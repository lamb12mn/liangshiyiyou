 // 解析参数
 function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return decodeURI(r[2]); return null; 
  }
  let info=getQueryString('info');
  let infoS=JSON.parse(info);
//   console.log(infoS["image"]);
  if(getQueryString('info')==null){
     let str=` 
     <div class="aut"><img src="./images/3.jpg" alt=""></div>
          <div class="c-f-content">
              <p>张老师</p>
              <p>一年级数学</p>
              <p><span>教龄10年</span><span>已授1013课</span></p>
          </div>
          
     `;
     $(".content-first").append(str);
  }else{
      let str=` 
     <div class="aut"><img src="${infoS["image"]}" alt=""></div>
          <div class="c-f-content">
              <p>${infoS["name"]}</p>
              <p>${infoS["tag"]}</p>
              <p><span>${infoS["date"]}</span><span>${infoS["hours"]}</span></p>
          </div>
     `;
     $(".content-first").append(str);
  }