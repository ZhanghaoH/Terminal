;
! function($) {　　
    $.extend({
            "dialog": function(options) {
                //检测用户传进来的参数是否合法
                var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
                console.log(opts);
                var dialog_html = `<div class="container">
                            <div class="dialog">
                                <div class="title">${opts.title}</div>
                                <div class="txt">${opts.txt}</div>
                                <div class="action">
                                    <button class="confirm btn-lg">确<span>定</span></button>
                                </div>
                            </div>
                        </div>`;
                $(".wrap").append(dialog_html);
                $("body").on("click", ".confirm", function() {
                    $(this).parents(".container").css("visibility", "hidden").remove();
                })
            }
        })
        //默认参数
    var defaluts = {
        "title": '温馨提示',
        "txt": '请求出错，请检查网络',
    };
}(window.jQuery);