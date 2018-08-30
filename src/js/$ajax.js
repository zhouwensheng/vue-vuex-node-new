import $ from 'jquery';
$.ajaxSetup({
    complete: function(xhr) {
        if (xhr.status == 401){
            let url=window.location.href;
            url=url.split('/')
            let urlls='';
            for(let i=0;i<url.length-1;i++){
                urlls+=url[i]+'/'
            }
            urlls+='login';
            window.location.href=urlls;

        } 
    },
    xhrFields: {
        withCredentials: true
    }
})
export default $;