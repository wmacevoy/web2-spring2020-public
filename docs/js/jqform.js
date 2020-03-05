$(function() { 
    $("form[name='color-form']").validate({
        rules : {
            'favorite-color': 'required'
        }
    });
})
