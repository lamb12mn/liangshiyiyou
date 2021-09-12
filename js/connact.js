console.log(1);
var jsonArr = [{
  "id": 1,
  "img": "./images/1.jpg",
  "name": "1刘德华",
  "email": "123@126.com",
  "content": "把轻松注入你的空气，把快乐铺满你的脚底",
  "commentcontent": "你锻炼"
},
{
  "id": 2,
  "img": "./images/2.jpg",
  "name": "2刘德华",
  "email": "123@126.com",
  "content": "出生一张纸，忙碌一辈子",
  "commentcontent": "张纸"
},
{
  "id": 3,
  "img": "./images/3.jpg",
  "name": "3刘德华",
  "email": "133@126.com",
  "content": "你在天南，我在地北，我们之间是天涯。",
  "commentcontent": ""
},
{
  "id": 4,
  "img": "./images/4.jpg",
  "name": "4郭富城",
  "email": "113@126.com",
  "content": "寒风吹过，吹落了树叶，吹枯了小草，却吹不掉我的思念",
  "commentcontent": ""
},
{
  "id": 5,
  "img": "./images/5.jpg",
  "name": "5张学友",
  "email": "223@126.com",
  "content": "鉴于你锻炼迟到，上班从不迟到；工作兴致高，但玩乐兴趣不高",
  "commentcontent": ""
},
{
  "id": 6,
  "img": "./images/6.jpg",
  "name": "6孙红雷",
  "email": "423@126.com",
  "content": "天气再冷，也不冷落祝福；树叶再落，也不落下情意",
  "commentcontent": ""
}
];

function loadData() {
for (let i = 0; i < jsonArr.length; i++) {
  // 评论区
  var $imgStr = '<div class="hotComent-left"><img class="hotComent-left-img" src="' + jsonArr[i].img + '" alt=""></div>';
  var $p1 = '<p class="h-r-r"><span>' + jsonArr[i].name + '</span><span>[' + jsonArr[i].email + ']</span><span>2018年8月15日14:45:34</span></p>';
  var $p2 = '<p  class="h-r-r">' + jsonArr[i].content + '</p>';
  var $repContent = '<div class="repContent"><img src="' + jsonArr[i].img + '" alt=""><span>' + jsonArr[i].name + ':</span><span class="ct">' + jsonArr[i].commentcontent + '</span><span class="del" >删除评论</span></div>'
  var $p3 = '<p  class="h-r-r"><span class="delete" >删除</span> <span class="iconfont icon-fenxiang"></span><span class="iconfont icon-pingjia"></span><span class="iconfont icon-dianzan"></span><span class="reponse">回复</span></p>';
  var $hotComentright = '<div class="hotComent-right">' + $p1 + $p2 + $p3 + $repContent + '</div>';
  //回复区域
  var $hotComentBottom = '<div class="hotComent-bottom"><img src="' + jsonArr[i].img + '" alt=""><span>' + jsonArr[i].name + '</span><div class="area-textarea"><textarea placeholder="有事没事说两句..." class="textarea-content" name="" node-type="textarea" id="repContent"></textarea></div><p><span class="rep" >回复</span></p>' + '</div>';
  // $($commentDiv).append($hotComentBottom);
  var $commentDiv = '<div class="hotComent">' + $imgStr + $hotComentright + $hotComentBottom + '</div>';
  // console.log($($commentDiv));
  if (jsonArr[i].commentcontent !== '') {
      $("#tbList").append($commentDiv);
      $(".hotComent .hotComent-right .repContent").css("display", 'block');

  } else {
      $("#tbList").append($commentDiv);
  }

}
// rep();
// del();
// response();
// delet();
};
function delet(){  
$('.delete').click(function (e) {
    console.log($(this).parent().parent().parent());
  $(this).parent().parent().parent().remove();
});
};
function rep() {  
$(".rep").click(function (e) {
  let $repC = $($(this).parent().parent().parent().children());
  //获取到回复内容
  //  console.log($repC.eq(2).find("#repContent").val());
  //写入回复框里面
  if (($repC.eq(2).find("#repContent").val() == "")) {
  //    prompt("请输入完整的信息",100)
      return;
  }
  let $repCon = '<div class="repContent"> <img src="' + jsonArr[0].img + '" alt=""><span>' + jsonArr[0].name + ':</span><span class="ct">' + $repC.eq(2).find("#repContent").val() + '</span> <span class="del" >删除评论</span></div>'
  // console.log($repC.eq(1));
  $repC.eq(1).append($repCon);
  $repC.eq(1).find('.repContent').last().css('display', 'block');
  // console.log($repC.eq(2));
  $repC.eq(2).toggleClass('show');
  $repC.eq(2).find("#repContent").val("");
  // console.log($repC.eq(2).parent().find(".hotComent-bottom"));
  $repC.eq(2).parent().find(".hotComent-bottom").css('display', 'none');
  del();
  //  console.log($repC.eq(1).find('.repContent'));
})
}
function response() {  
$('.reponse').click(function (e) {
  let $re = $($(this).parent().parent().parent().children()[2]);
  // console.log($re);
  $re.show();

});
}
function del() {  
$(".del").click(function (e) {
  // console.log($(this).parent());
  // let $re = $($(this).parent().parent().parent().children().eq(1).find(".repContent"));
  // $re.remove();
  $(this).parent().remove();

})
}
$(function () {
loadData();
// rep();
// del();
// response();
// delet();
$("#btnAdd").click(function () {
//  console.log(1);
  var content = $("#txtcontent").val();
  $("#txtcontent").val("");
  // $("#txtcontent").val().clear();
  // console.log(content);
  if ((content == "")) {
      alert("请输入完整的信息");
      return;
  }
  var $imgStr = '<div class="hotComent-left"><img class="hotComent-left-img" src="' + jsonArr[0].img + '" alt=""></div>';
  var $p1 = '<p><span>' + jsonArr[0].name + '</span><span>[' + jsonArr[0].email + ']</span><span>2018年8月15日14:45:34</span></p>';
  var $p2 = '<p>' + content + '</p>';
  var $repContent = '<div class="repContent"> <img src="' + jsonArr[0].img + '" alt=""><span>' + jsonArr[0].name + ':</span><span class="ct"></span> <span class="del" >删除评论</span></div>'
  var $p3 = '<p><span class="delete" >删除</span><span class="iconfont icon-fenxiang"></span><span class="iconfont icon-pingjia"></span><span class="iconfont icon-dianzan"></span><span class="reponse">回复</span></p>';
  var $hotComentright = '<div class="hotComent-right">' + $p1 + $p2 + $p3 + $repContent + '</div>';
  //回复区域e + '</span><div class="area-textarea"><textarea placeholder="有事没事说两句..." class="textarea-content" name="" node-type="textarea" id="repContent" >'+ content+'</textarea></div><p><span class="rep" >回复</span></p>' + '</div>';
  var $hotComentBottom = '<div class="hotComent-bottom"><img src="' + jsonArr[0].img + '" alt=""><span>' + jsonArr[0].name + '</span><div class="area-textarea"><textarea placeholder="有事没事说两句..." class="textarea-content" name="" node-type="textarea" id="repContent"></textarea></div><p><span class="rep" >回复</span></p>' + '</div>';

  var $commentDiv = '<div class="hotComent">' + $imgStr + $hotComentright + $hotComentBottom + '</div>';
  $("#tbList").prepend($commentDiv);
  rep();
  response();
  delet();
  // del();

});
rep();
del();
response();
delet();
});