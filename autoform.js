function autoForm(args, parent) {
    var defaults = {
        default: 'asdadsSD',
        email: 'test@test.com',
        tel: '+380931111111'
    };

    args = $.extend({}, defaults, args);
    parent = typeof parent !== 'undefined' ? parent : 'html';

    var input = $(parent).find('input'),
        textarea = $(parent).find('textarea');

    textarea.val(args.default);
    input.each(function () {

        var $this = $(this),
        type = $this.attr('type'),
        name = $this.attr('name');

        if (args[type])
            $this.val(args[type]);
        else if (args[name])
            $this.val(args[name]);
        else
            $this.val(args.default);

    });
}
/*
autoForm({
    default: 'RAQ SOOQA'
}, 'body');
*/
