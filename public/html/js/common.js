var base = "http://" + window.location.hostname + ":8565";
// var imageBase = "http://" + window.location.hostname + ":8080/";
var content = JSON.parse(window.localStorage.getItem("EditorautoSave_tmp"));
var basic = {
    /*  监听事件 */
    onEvent: function (event) {
        switch (event.keyCode) {
            case 37:
                this.moveLeft(event);
                break;
            case 38:
                this.moveUp(event);
                break;
            case 39:
                this.moveRight(event);
                break;
            case 40:
                this.movewDown(event);
                break;
            case 13:
                this.enter(event);
                break;
            case 48:
                this.redKey(event);
                break;
            case 27:
            case 340:
            case 65367:
            case 8:
            case 339: //退出键
            case 283:
                this.back(event);
                break;
            case 513:
                if (basic.isP60) {
                    goExit();
                } else {
                    this.redKey(event);
                }
                break;
            case 458:
                this.redKey(event);
                break;
            default:
                // console.log(event.keyCode)
                break;
        }
    },
    /**
     * 遥控器 上键
     * @param event
     */
    moveUp: function (event) {
        event.preventDefault();
        if (this.bool) op.moveUp();
    },
    /**
     * 遥控器 下键
     * @param event
     */
    movewDown: function (event) {
        event.preventDefault();
        if (this.bool) op.movewDown();
    },
    /**
     * 遥控器 右键
     * @param event
     */
    moveRight: function (event) {
        event.preventDefault();
        if (this.bool) op.moveRight();
    },
    /**
     * 遥控器 左键
     * @param event
     */
    moveLeft: function (event) {
        event.preventDefault();
        if (this.bool) op.moveLeft();
    },
    /**
     * 遥控器 确认键
     * @param event
     */
    enter: function (event) {
        if (this.bool) op.Enter();
    },
    /**
     * 遥控器返回键
     * @param event
     */
    back: function (event) {
        event.preventDefault();
        op.Back();
    }

};

function $(id) {
    if (!isEmpty(id) && id.indexOf("#") == 0) {
        return document.getElementById(id.substring(1, id.length));
    } else {
        return document.getElementById(id);
    }
}

//移除某一个类名
function removeclassName(el, aname) {
    var obj_class = el.className;//获取 class 内容.
    var obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
    x = 0;
    for (x in obj_class_lst) {
        if (obj_class_lst[x] == aname) {//循环数组, 判断是否包含cls
            el.classList.remove(aname)
        }
    }
}

/**
 *
 * @param event
 */
document.onkeydown = function (event) {
    basic.onEvent(event);
};

//获取类名相同的元素
function getElementsByClass(parentEl, tagname, className) {
    var tagname = parentEl.getElementsByTagName(tagname);
    var tagnameAll = [];
    for (var i = 0; i < tagname.length; i++) {
        if (tagname[i].className == className) {
            tagnameAll[tagnameAll.length] = tagname[i];
        }
    }
    return tagnameAll;
}

//移除某元素
function remove(selectors) {
    selectors.removeNode = [];
    if (selectors.length != undefined) {
        var len = selectors.length;
        for (var i = 0; i < len; i++) {
            selectors.removeNode.push({
                parent: selectors[i].parentNode,
                inner: selectors[i].outerHTML,
                next: selectors[i].nextSibling
            });
        }
        for (var i = 0; i < len; i++)
            selectors[0].parentNode.removeChild(selectors[0]);
    } else {
        selectors.removeNode.push({
            parent: selectors.parentNode,
            inner: selectors.outerHTML,
            next: selectors.nextSibling
        });
        selectors.parentNode.removeChild(selectors);
    }
}


/**
 * 非空判断
 * @param param
 * @returns {boolean}
 */
function isEmpty(param) {
    if (param == "" || param == "undefined" || param == undefined
        || param == null || param == "null") {
        return true;
    } else {
        return false;
    }
}
/**
 * 获取当前连接参数
 * @param name
 * @returns {*}
 */
function getUrlParam(name) {
    var url = window.location.href;
    if (!isEmpty(url) && url.indexOf("?") != -1) {
        url = url.substring(url.indexOf("?") + 1);
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
        var r = url.match(reg); // 匹配目标参数
        if (r != null)
            return decodeURI(r[2]);
    }
    return null; // 返回参数值
}
// 返回指定页面
function goBack(backUrl) {
    if (!isEmpty(backUrl)) {
        window.location.href = backUrl;
    } else {
        window.location.href = "../index.html";
    }
}

/**
 * 返回处理
 */
function toBack() {
    var backUrl = getUrlParam('backUrl');
    if (!isEmpty(backUrl)) {
        var param = getCookie2(backUrl);
        if (!isEmpty(param)) {
            if (basic.isP60) {
                setCookie(backUrl, "", -1);
                top.window.location.href = param;
            } else {
                setCookie(backUrl, "", -1);
                location.href = param;
                return;
            }
        } else {
            setCookie(backUrl, "", -1);
            top.window.location.href = "/index.html";
        }
    } else {
        goExit();
    }
}

/**
 * 页面跳转
 * @param op
 * @param url
 * @param addUrl 当前页面自定义参数 （格式：以 "&" 开始）;
 */
function jumpUrl(op, url) {
    var param = addParam(op);
    var pathname = getGuid();
    setCookie(pathname, param, 1);
    if (!isEmpty(url) && url.indexOf("?") != -1) {
        location.href = url + "&backUrl=" + pathname;
    } else if (!isEmpty(url)) {
        location.href = url + "?backUrl=" + pathname;
    }
}

function jumpIndexUrl(op, url) {
    var param = addParam(op);
    var pathname = getGuid();
    setCookie("index", param, 1);
    if (!isEmpty(url) && url.indexOf("?") != -1) {
        location.href = url + "&backUrl=index";
    } else if (!isEmpty(url)) {
        location.href = url + "?backUrl=index";
    }
}

/**
 * 详情页面跳转
 * @param op
 * @param url
 * @param addUrl
 * @param wikiId
 */
function detailUrl(op, url, addUrl, wikiId) {
    var param = addParam(op, addUrl);
    var pathname = getGuid();
    setCookie(pathname, param, 1);
    if (!isEmpty(url) && url.indexOf("?") != -1) {
        location.href = url + "&backUrl=" + pathname;
    } else if (!isEmpty(url)) {
        location.href = url + "?backUrl=" + pathname;
    }
}


/**
 * Ajax封装函数
 *
 * @param type 请求类型
 * @param url 请求url
 * @param data 请求参数
 * @param success 成功
 * @param failed 失败
 */
function Ajax(type, url, asyn, data, success, failed) {
    this.type = type || "GET";
    this.url = url;
    this.asyn = asyn || false;
    // 创建ajax对象
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    var type = type.toUpperCase();
    // 用于清除缓存
    var random = Math.random();
    if (typeof data == 'object') {
        var str = '';
        for (var key in data) {
            str += key + '=' + data[key] + '&';
        }
        data = str.replace(/&$/, '');
    }
    var div = document.createElement("div");
    div.id = "load";
    document.body.appendChild(div)
    // 处理返回数据
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // xhr.response
                var load = document.getElementById("load");
                load.parentNode.removeChild(load);
                success(xhr.responseText);
                xhr.abort()
            } else {
                if (failed) {
                    var load = document.getElementById("load");
                    load.parentNode.removeChild(load);
                    var err = document.createElement("section");//网络错误
                    err.id = "error_net";
                    document.body.appendChild(err)
                    failed(xhr.status);
                    xhr.abort()
                }
            }
        }
    }
    if ('GET' == type) {
        if (data) {
            xhr.open('GET', url + '?' + data, this.asyn);
        } else {
            xhr.open('GET', url + '?t=' + random, this.asyn);
        }
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send();
    } else if ('POST' == type) {
        xhr.responseType = "text";
        xhr.open('POST', url, this.asyn);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
    } else if ('DELETE' == type) {
        xhr.open('DELETE', url + '?' + data, this.asyn);
        xhr.send(data);
    }
}
//列表文字超长滚动,sw是span标签，dw是div标签
function scroll(s, len) {
    if (isEmpty(s)) {
        return;
    }
    var txt = s.innerHTML;
    var pw = len;
    var sw = s.innerHTML.length;
    if (sw > pw) {
        s.innerHTML = "";
        var node1 = document.createElement("marquee");
        node1.direction = "right"
        node1.id = "marquee";
        s.appendChild(node1);
        get("marquee").innerHTML = txt;
        get("marquee").style.color = "white";//p30样式不继承
        get("marquee").style.fontSize = "21px"//p30样式不继承
    }
}

//停止滚动
function stopscroll() {
    var marquee = document.getElementsByTagName("marquee")[0];
    if (marquee != undefined) {
        var txt = marquee.innerHTML;
        marquee.parentNode.innerHTML = txt
    }
}
function showJson(style){
    var s = [];
    for(var i in style){
        if(!isEmpty(style[i])){
            s.push(i+':'+style[i]);
        }
    }
    s = s.join(';')
    return  '{'+s+'}'
}
//动态插入css
function createStyleSheet(cssText){
    var style = document.createElement('style'),  //创建一个style元素
     head = document.head || document.getElementsByTagName('head')[0]; //获取head元素
    style.type = 'text/css'; //这里必须显示设置style元素的type属性为text/css，否则在ie中不起作用
    if(style.styleSheet){ //IE
        var func = function(){
            try{ //防止IE中stylesheet数量超过限制而发生错误
                style.styleSheet.cssText = cssText;
            }catch(e){

            }
        }
        //如果当前styleSheet还不能用，则放到异步中则行
        if(style.styleSheet.disabled){
            setTimeout(func,10);
        }else{
            func();
        }
    }else{ //w3c
        //w3c浏览器中只要创建文本节点插入到style元素中就行了
        var textNode = document.createTextNode(cssText);
        style.appendChild(textNode);
    }
    head.appendChild(style); //把创建的style元素插入到head中    
}


