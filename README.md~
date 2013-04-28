This is a very simple module to provide a custom block with an archive of blog nodes (content type "article").

The reason for its creation is that, although views can provide a block with summaries by year and month, displaying nodes in a list grouped by year and month is actually quite a pain, and I am always being asked for this functionality by clients. So I thought it would be a good idea to create a quick rough-and-ready custom module for it.

The module provides a block, nothing more. Here are some snippets of JS and CSS to get you started on theming:

# jQuery
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

# CSS
/* custom archive block */
#block-custom-blog-archive-custom-blog-archive .clicker{
cursor: pointer;
}

#block-custom-blog-archive-custom-blog-archive ul.years,
#block-custom-blog-archive-custom-blog-archive ul.months{
list-style: none;
}

#block-custom-blog-archive-custom-blog-archive ul.months{
margin-left: 0.5em;
}

#block-custom-blog-archive-custom-blog-archive ul.items{
display: none;
}

#block-custom-blog-archive-custom-blog-archive li.year:first-child li.month:first-child ul.items{
display: block; /* show the first month's nodes by default */
}
