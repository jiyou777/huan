

function renderimg(data) {
    for (var i = 0; i < data.child.length; i++) {
        switch (data.child[i].type) {
            case "truck/menue":
                 var id = data.child[i].id.split("/")[1];
                 if (!isEmpty(data.child[i].props.interfacechoose)){
                    getmenue(base + data.child[i].props.interfacechoose + '.json',id)
                 }else{
                    getdefaultmenue(id,data.child[i].props.list)
                 }
               
                break;
            case "truck/emptyContainer":
                renderimg(data.child[i])
                break;
            default:
        }
    }
}
renderimg(content)
function getmenue(url,id) {
    Ajax('get', url, true, {}, function (success) {
        var res = JSON.parse(success);
        console.log(res)
        var str1 = ""
        for (var i = 0; i < res.length; i++) {
            str1 += '<div  class="item">' + res[i].label + '</div>';
        }
        $(id).innerHTML = str1
    }, function (faild) {
    })
}
function getdefaultmenue(id,data){
    console.log(id,data)
    var str1 = ""
    for(var i=0;i<data.length;i++){
        str1 += '<div  class="item">' + data[i].label + '</div>';
    }
  
    $(id).innerHTML = str1
}
