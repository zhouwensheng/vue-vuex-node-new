// 公共方法
import Path from './BasePath.js';

let s = module.exports = global.AppUtil = {};
// cookie
s.cookie={
    // 设置cookie
    setCookie :(cname, cvalue, exdays, path, domain) => {
        var expires;
        path = path || "/";
        var isIE = !_.isEmpty((navigator.userAgent.toLowerCase()).match(/(msie\s|trident.*rv:)([\w.]+)/));
        if (exdays === "Session") {
            if (isIE) {
                    expires = 'expires=At the end of the Session';
            } else {
                    expires = "expires=-1";
            }
        }
        else {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            expires = "expires=" + d.toUTCString();
    }
    document.cookie = cname + "=" + cvalue + ";Domain=" + domain + ";" + expires + ";path=" + path;
    },
        //取得cookie
    getCookie :(objName) => {
        var arrStr = document.cookie.split("; ");
        for (var i = 0; i < arrStr.length; i++) {
            var temp = arrStr[i].split("=");
            if (temp[0] === objName) {
                return decodeURI(temp[1]);
            }
        }
        return null;
    },
    // 删除cookie
    deleteCookie:(cname, domain, path) => {
        s.cookie.setCookie(cname, "", -1, path, domain);
    }
}
