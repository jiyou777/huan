


function rendernew(data) {
    for (var i = 0; i < data.child.length; i++) {
        switch (data.child[i].type) {
            case "truck/swiperlist":
                 var id = data.child[i].id.split("/")[1];
                 if (!isEmpty(data.child[i].props.interfacechoose)){
                    getnew(base + data.child[i].props.interfacechoose + '.json',id)
                 }else{
                    // 数组名字
                    getdefaultnew(id,data.child[i].props.sliders,data.child[i].props)
                 }

                break;
            case "truck/emptyContainer":
                renderimg(data.child[i])
                break;
            default:
        }
    }
}
rendernew(content)
function getnew(url,id) {
    Ajax('get', url, true, {}, function (success) {
        var res = JSON.parse(success);
        var str1 = ""
        console.log(res)
        for (var i = 0; i < res.length; i++) {
            str1 += '<div  class="imglist-item">' + res[i].label + '</div>';
        }
        $(id).innerHTML = str1
    }, function (faild) {
    })
}
function getdefaultnew(id,data,data2){
    console.log(data2)
    console.log(id)
    console.log(data)
    var imgWidth= data2.imgWidth
    var imgHeight= data2.imgHeight
 
    var str  =         '<div id="slider" style="width:'+imgWidth+'px;height:'+imgHeight+'px;" >'+
    '<div class="window" style="width:'+imgWidth+'px;height:'+imgHeight+'px;" @mouseover="stop" @mouseleave="play">'+
  '<!-- 轮播页面 -->'+
  '<!-- 有动画部分 -->'+
 ' <ul v-if="!iscards"  class="container" style="width:'+imgWidth+'px;height:'+imgHeight+'px;" >'+
  '  <li>'+
   '<img style="width:'+imgWidth+'px;height:'+imgHeight+'px;" src="'+data[data.length-1].imgurl+'" />'+
  ' </li>'
  var str15 = '<li>'+
  '<img style="width:'+imgWidth+'px;height:'+imgHeight+'px;" :src="'+data[0].imgurl+'" alt />'+
'</li>'+
'</ul>'
// 中间需要循环的部分 单独拿出来在拼接吧
    var str1 = ""
    for(var i=0;i<data.length;i++){
        str1 +=
        '<li>'+
        '<img style="width:'+imgWidth+'px;height:'+imgHeight+'px;" :src="'+data[i].imgurl+'" alt />'+
       ' </li>'
    }
    var str23 = '<ul v-if="iscards" class="container-cards">'
    var str2 =""
    for(var i=0;i<data.length;i++){
        str2 +=
    '<li >'+
    '<img style="width:'+imgWidth+'px;height:'+imgHeight+'px;" :src="'+data[i].imgurl+'" alt />'+
    '</li>'
}
    var str3 =      '</ul>'+   
     '<!-- 轮播页面 -->'+
    '<!-- 左右按钮 -->'+
    '<ul v-if="isbutton" class="direction">'+
      '<li class="left" @click="move(imgWidth, 1, initialSpeed)">'+
         '<div   class="icon"></div>'+
      '</li>'+
     '<li class="right" @click="move(imgWidth, -1, initialSpeed)">'+
          '<div   class="icon"></div>'+
      '</li>+'
    '</ul>'+
    '<!-- 指示器 -->'+
   '<ul v-if="ispagin" style="dotsWidth" class="dots">'
   var str4 =""
   for(var i=0;i<data.length;i++){
   str4 += '<li  class="dotted" @click="jump+1"></li>'
}

 var str5= '</ul>'+
  '</div>'+
  '</div>' 
    $(id).innerHTML = str +str15 +str1 +str2 +str3+str4+str5
}
