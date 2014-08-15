(function($){
    $(document).ready(function () {
        $("#block-custom-blog-archive-custom-blog-archive ul.years li.year .clicker").click(function () {
            $(this).next('ul.months').slideToggle('fast', function () {
                // Animation complete.
            });
        });
        $("#block-custom-blog-archive-custom-blog-archive ul.months li.month .clicker").click(function () {
            $(this).next('ul.items').slideToggle('fast', function () {
                // Animation complete.
            });
        });
    });
})(jQuery)


