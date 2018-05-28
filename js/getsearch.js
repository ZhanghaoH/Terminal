;
(function() {
    //定义一些默认参数
    var _options = {
        search: ""
    }

    //定义一些api
    var getSearch = {
            parseURL: function(search = _options.search) {
                let url = search.split("?")[1];
                let para = url.split("&");
                console.log(para);
                let len = para.length;
                let res = {};
                let arr = [];
                for (let i = 0; i < len; i++) {
                    arr = para[i].split("=");
                    res[arr[0]] = arr[1];
                }
                return res;
            },
        }
        //这里确定了插件的名称
    this.getSearch = getSearch;
})();