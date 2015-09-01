 function autoForm(args) {
        var defaults = {
            text: 'asdadsSD',
            email: 'test@test.com',
            tel: '+380931111111'
        };

        args = $.extend({}, defaults, args);

        $('textarea').val(args.text);
        $('input').each(function (i) {

            if (args[$(this).attr('type')]) {
                $(this).val(args[$(this).attr('type')]);
            } else {
                $(this).val(args.text);
            }
        });
    }

    autoForm({text: 'RAQ SOOQA'});
