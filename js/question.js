// 加载文章页面内容区域内容
    function loadData(type, page) {
    //   console.log(1);
        // var len = articleData[type][page - 1]['list'].length;
        // console.log();
        for (let i = 0; i < articleData[type][page - 1]['list'].length; i++) {
            let $json = articleData[type][page - 1]['list'][i];
            //   console.log($json['image']);
            let $box = `
            <div class="box birth">
                <div class="line4-img">
                    <img src="${$json['teacher']}" alt="">
                </div>
                <div class="line4-content">
                    <p class="na">${$json['title']}<span  class="connact">${$json['tag']}</span></p>
                    <p class="te"><span>${$json['describe1']}</span><span>${$json['describe2']}</span><span>${$json['describe3']}</span></p>
                    <p class="classInfo"><span>${$json['detail1']}</span><span>${$json['detail2']}</span><span>${$json['detail2']}</span><span>${$json['detail4']}</span></p>
                </div>
            </div>
          `;
          
            $("#tabContent .tab").append($box);
    
        }
    
    }
    if($('#tabContent .tab').attr("display")=='block'){
        $(this).find('.birth').remove();
    }
    if($('#tabContent .tab').attr("class")=='tab action') {  
        let $boxC=$(this).parent().parent().siblings().find(".action");
        $boxC.find('.birth').remove();
        update("dian", 1,$boxC);
    }
    // console.log($('#tabContent .tab').attr("class")=='tab action');
    $('#nav ul li').on('click',function (e) {  
        let $boxC=$(this).parent().parent().siblings().find(".action");
        $boxC.find('.birth').remove();
        update("new", 2,$boxC);
    })
    function update(type, a,main) {
            
        $(window).scroll(function () {
            var scrollTop = $(this).scrollTop()
            var innerHeight = $(document).innerHeight();
            var windowHeight = $(this).height();
            if (Math.floor(scrollTop + windowHeight) == innerHeight||Math.ceil(scrollTop + windowHeight) ==innerHeight) {
                // console.log(2);
                if(a<articleData[type].length+1){
                    // console.log("开头", a);
                        var warn = `
                        <div class=" loading" role="alert">
                            正在加载数据，请稍后，不要着急，正在请求！
                        </div>
                        `;
                        main.append(warn);
                }
                      // 加载一个数据之后，隐藏提示
                    setTimeout(function () {
                        loadData(type, a);
                        a++;
                        // $(".loading").css("visibility","hidden");
                        $(".loading").css("display","none");
                    }, 1000)
                    // console.log(a);
                    // 加载所有数据之后，弹出提示
                    if(a===articleData[type].length){
                        setTimeout(function () {
                            var warn = `
                            <div class="loading" role="alert">
                                数据加载完毕，改天再瞅瞅！
                            </div>
                            `;
                            // $(".loading").css("display","block");
                            main.append(warn);
                        }, 1000)
                    }
            }
        })
    }  
    //   监听滚动条加载数据结束
    $(".connact").click(function () {  
        let parent=$(this).parent().parent().parent();
        // console.log($(this).parent().parent().parent().find(".line4-img img").attr("src"));
        // var im=parent.find(".line4-img img").attr("src");
        // var name=parent.find(".line4-content .na").text();
        // var name=parent.find(".line4-content .na").text();
        var info=`{"image":"${parent.find(".line4-img img").attr("src")}","name":"${parent.find(".line4-content .na").text()}","tag":"${parent.find(".te span:first").text()}","date":"${parent.find(".te span:nth-child(2)").text()}","hours":"${parent.find(".te span:nth-child(3)").text()}"}`;
        // console.log(parent.find(".te span:nth-child(3)").text());
        window.location.href='connact.html?info='+info;
    })
       
		$("#zySearch").zySearch({
			"width":"355",
			"height":"33",
			"parentClass":"pageTitle",
			"callback":function(keyword){
				// console.info("搜索的关键字");
				// console.info(keyword);
                 // 读取搜索词
                let item = `<span class="item c">${keyword}<i class="iconfont icon-cha"></i></span>`
                $("#searchInput").val("");
                $(".history").prepend(item);
                deleteOne();
                $(".clear").show();
			}
		});
        //清除单个记录
        function deleteOne() {
            $(".history .item i").click(function () {
                $(this).parent().remove();
                if ($(".history").find(".item").length == 1) {
                    $(".clear").hide();
                } else {
                    $(".clear").show();
                }
            })
        }
        //清除所有记录
        function deleteAll() {
            $(".history  .clear").click(function () {
                $(this).parent().find('.c').remove();
                $(this).hide();
            })
        }
        deleteAll();
        deleteOne();
        window.onload = function () {
            var nav = document.getElementById('nav');
            var oNav = nav.getElementsByTagName('li');

            var tabContent = document.getElementById('tabContent');
            var oDiv = tabContent.getElementsByClassName('tab');
            for (var i = 0; i < oNav.length; i++) {
                oNav[i].index = i;
                oNav[i].onclick = function () {
                    for (var i = 0; i < oNav.length; i++) {
                        oNav[i].className = '';
                        oDiv[i].style.display = "none";
                        oDiv[i].setAttribute('class','tab');
                    }
                    this.className = 'act';
                    // oDiv[this.index].className("tab action");
                    oDiv[this.index].style.display = "block";
                    oDiv[this.index].setAttribute('class','tab action');
                }
                for (var m = 1; m < oNav.length; m++) {
                    oNav[m].className = '';
                    oDiv[m].style.display = "none";
                    oDiv[m].setAttribute('class','tab');
                }
            }
        };
        // 轮播图
        var mySwiper = new Swiper('.swiper-container',{
            autoplay : 2000,//可选选项，自动滑动
            loop : true,//可选选项，开启循环
            })