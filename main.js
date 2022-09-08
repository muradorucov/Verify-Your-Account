$(".inputs").keyup(function () {
    var thisEl = jQuery(this);
    var index = parseInt(thisEl.data('index'));
    if ($(this).val().length == $(this).attr('maxlength')) {
        index++;
        jQuery('.inputs[data-index="' + index + '"]').focus();
    }
});