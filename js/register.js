// 点击登录
$('#l-btn').click(function(){
    // localStorage.clear();
    $('#login').show();
  })
  $(".alist").on("click","li",function(){
    $(this).addClass("active").siblings().removeClass("active");
    let index = $(this).index();
    $('.form').children('div').eq(index).show().siblings().hide();
  })
  $('#l-form').click(function(event){
    event.preventDefault();
  })
  $("button").click(function(event){
    event.preventDefault();
  });
  // 判断用户名
  let userResult;
  $('#r-username').blur(function(){
    userResult=$('#r-username').val().length>4?true:false;
    if($('#r-username').val()!=''){
      if(userResult){
        $('.user-notice').text('用户名正确')
      }
      else{
        $('.user-notice').text('用户名不能小于4位')
      }
    }
    else{
      $('.user-notice').text('用户名不能为空')
    }
  })
  // 判断密码
  let passResult;
  $('#r-password').blur(function(){
    passResult=$('#r-password').val().length>8?true:false;
    if($('#r-password').val()!=''){
      if(passResult){
        $('.pass-notice').text('密码正确')
      }
      else{
        $('.pass-notice').text('密码不能小于8位')
      }
    }
    else{
      $('.pass-notice').text('密码不能为空')
    }
  })
  const phoneReg=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
  let phoneResult;
  function phoneRes(){
    let value=$('#phone').val();
    console.log(value);
    phoneResult=phoneReg.test(value);
    console.log(phoneResult);
    if(value!=''){
      if(phoneResult){
        $('.phone-notice').text('手机号码输入正确')
      }
      else{
        $('.phone-notice').text('请输入正确的11位手机号码')
      }   
    }
    else{
      $('.phone-notice').text('手机号码不能为空')
    }
  }
  $('#phone').blur(phoneRes)
  
    // 验证验证码
    // 随机生成四位验证码
    let arrCode=[]
    $('#getCode').click(function(){
      arrCode=[];
      for(let i=0;i<4;i++){
        let code=Math.floor(Math.random()*9);
        arrCode.push(String.fromCharCode(code+65))
      }
      str=arrCode.join('')
      $('.code-info').text(str);
    })
    // 判断验证码是否输入正确
    let codeResult;
    $('#r-code').blur(function(){
      codeResult=$('#r-code').val()==$('.code-info').text()?true:false;
      if($('#r-code').val()!=''){
        if(!codeResult){
          $('.code-notice').text('输入错误请重新输入')
        }
        else{
          $('.code-notice').text('输入验证码正确')
        }
      }
      else{
        $('.code-notice').text('输入验证码不能为空')
      }
    })
    // 注册
    function addUser(){
      let username=$('#r-username').val();
      let pass=$('#r-password').val();
      let phone=$('#phone').val();
      let code=$('#r-code').val();
      if(username!=''&&userResult && pass!=''&&passResult&&phone!=''&&phoneResult&&code!=''&&codeResult){
        localStorage.setItem('name',username);
        localStorage.setItem('pass',pass);
        localStorage.setItem('img','./images/16.jpg');
        $('.alist li').eq(1).addClass("active").siblings().removeClass("active");
        $('.form').children('div').eq(1).show().siblings().hide();
      }
      else{
        alert('注册失败');
      }
    }
    $('#register-btn').click(addUser)
    function getUser(){
      let name=localStorage.getItem('name');
      let img=localStorage.getItem('img')
      let pass=localStorage.getItem('pass');
      if(name==$('#l-username').val()&&pass==$('#l-password').val()){
        window.location.href="./user.html"
        setCookie('name', name,7);
        setCookie('img',img,7);
        setCookie('pass',pass,7);
      }
      else{
        $('.l-u-pass').text('用户名或密码错误')
      }
    }
    $('#login-btn').click(function(){
        getUser();
        isUser();
    })