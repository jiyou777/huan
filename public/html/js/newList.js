


function rendernew(data) {
    for (var i = 0; i < data.child.length; i++) {
        switch (data.child[i].type) {
            case "truck/newList":
                 var id = data.child[i].id.split("/")[1];
                 if (!isEmpty(data.child[i].props.interfacechoose)){
                    getnew(base + data.child[i].props.interfacechoose + '.json',id)
                 }else{
                    getdefaultnew(id,data.child[i].props.imglist,data.child[i].props)
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

    console.log(data2.isshow)
    console.log(data2.isshowpic)
    var isshowstyle ="none"
    var isshowpicimg = ""
    var isshowpictitle = ""
    var isshowimgstyle ="none"
    if(data2.isshow){
        isshowstyle = "block"
    } else {
         isshowstyle ="none"
    }
    if(data2.isshowpic){
        isshowpicimg = "imglist-item-img"
        isshowpictitle ="imglist-item-title"
        isshowimgstyle ="block"

    } else {
        isshowpicimg = "none"
        isshowpictitle ="imglist-item-title2"
        isshowimgstyle="none"
        
    }
    console.log(isshowstyle)
    // data[i].imgurl
    // data[i].label
    // style="'margin:'+ parseInt(leftw)+'px;'+'width:'+spacew+'px;'+'height:'+spaceh+'px;'"
    var str1 = ""
    for(var i=0;i<data.length;i++){
        str1 += '<div style="margin:'+ parseInt(data2.leftw)+'px;'+'width:'+data2.spacew+'px;'+'height:'+data2.spaceh+'px;" class="imglist-item">' +
            '<img style="display:'+isshowimgstyle+'"; class="'+isshowpicimg+'" src="'+data[i].imgurl+'">' +
            '<div style="display:'+isshowstyle+';font-size:'+data2.fontsize+'px;" class="'+isshowpictitle+'" ><span >'+data[i].label+'</span>' +
            '</div>' +
            '</div>';
    }
    // ' + data[i].label + '
    $(id).innerHTML = str1
}
