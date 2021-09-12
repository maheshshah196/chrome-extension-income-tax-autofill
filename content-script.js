(function ($) {

    'use strict';

    const USERID_TEXTFIELD_SELECTOR = "#panAdhaarUserId";

    function init() {
        $(USERID_TEXTFIELD_SELECTOR).after(`<input type="password" style="display: none;" />`);
    }

    init();

})(jQuery)