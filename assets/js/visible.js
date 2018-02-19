(function ($) {
	$.fn.visible = function () {
        const isExist = $(this);
        if (!isExist) {
            return false;
        }
		var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var top_of_screen = $(window).scrollTop();
        var bottom_of_screen = $(window).scrollTop() + $(window).height();
        if ((top_of_element > top_of_screen && top_of_element < bottom_of_screen) || (bottom_of_element > top_of_screen && bottom_of_element < bottom_of_screen )) {
            return true;
        } else {
            return false;
        }
        // if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && (bottom_of_screen - top_of_element > 180)) {
        //     // The element is visible, do something
        //    return true;
           
        // } else {
        // 	return false;
        //     //console.log('not');
        //     // The element is not visible, do something else
        // }
	}
})(jQuery)