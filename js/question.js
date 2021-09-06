 //加载文章数据
//  console.log($("#tabContent .tab"));


    // console.log(1);
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
    