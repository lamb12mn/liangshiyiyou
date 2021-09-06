$("#zySearch").zySearch({
    "width": "355",
    "height": "33",
    "parentClass": "pageTitle",
    "callback": function (keyword) {
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

function loadData(type, page) {
    for (let i = 0; i < articleData[type][page - 1]['list'].length; i++) {
        let $json = articleData[type][page - 1]['list'][i];
        //   console.log($json['image']);
        let $str = `
    <div class="content-line4">
    <div class="line4-img">
        <img src="${$json['teacher']}" alt="">
    </div>
    <div class="line4-content">
        <p>${$json['title']}<span>￥${$json['price']}</span></p>
        <p><span>${$json['describe1']}</span><span>${$json['describe2']}</span><span>${$json['describe3']}</span></p>
        <p class="classInfo"><span>${$json['detail1']}</span><span>${$json['detail2']}</span><span>${$json['detail2']}</span><span>${$json['detail4']}</span></p>
    </div>
</div>
  `;
        $(".content").append($str);
    }
}
update("new", 1);

function update(type, a) {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop()
        var innerHeight = $(document).innerHeight();
        var windowHeight = $(this).height();
        if (Math.floor(scrollTop + windowHeight) == innerHeight || Math.ceil(scrollTop +
                windowHeight) ==
            innerHeight) {
            if (a < articleData[type].length) {
                var warn = `
                <div class=" loading" role="alert">
                    正在加载数据，请稍后，不要着急，正在请求！
                </div>
                `;
                setTimeout(function () {
                console.log("开头", a);
               
                if ($(".loading").length ===0) {
                        $(".content").append(warn);
                    }
                },1000)
                // 加载一个数据之后，隐藏提示
                setTimeout(function () {
                    loadData(type, a);
                    a++;
                    $(".loading").remove();
                }, 2000)
            }
            console.log("结尾a",a);
            // 加载所有数据之后，弹出提示
            if (a >= articleData[type].length) {
                var warn = `
                    <div class="loading" role="alert">
                        数据加载完毕，改天再瞅瞅！
                    </div>
                    `;
                if ($(".loading").length ===0) {
                    $(".content").append(warn);
                }
                
            }
        }
    })
}