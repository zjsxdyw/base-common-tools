// jQuery.ajax
$.ajaxSetup({
    complete: function (xhr) {
        var res = xhr.responseText;
        var body = JSON.parse(res);
        var isKicked = body["Code"] === 401;
        if (isKicked) {
            window.alert(body["Message"]);
            // redirect to login page
            window.location.href = "http://login.xx.xxx/";
        }
    }
});



// axios
axios.interceptors.response.use(function (res) {
    // 200
    if (res.data) {
        var body = res.data;
        var isKicked = body["Code"] === 401;
        if (isKicked) {
            window.alert(body["Message"]);
            // redirect to login page
            window.location.href = "http://login.xx.xxx/";
        }
    }
    return res;
}, function (err) {
    // 500
    return Promise.reject(err);
});