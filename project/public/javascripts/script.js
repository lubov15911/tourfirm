(function() {
    console.log("luba");

    $('#signIn').on('click', function() {
        $('#login-popup').show();
    });

    $('#signUn').on('click', function() {
        $('#sighup-popup').show();
    });

    $('.btn-close').on('click', function() {
        $('.popup').hide();
    });
/*
    $('#check-user-btn').on('click', function() {

        var data = {};
        data.login = $('#check-user-form input[type="text"]')[0].value;
        data.password = $('#check-user-form input[type="password"]')[0].value;

        console.log(data);

        $.ajax({
            type: "post",
            url: "/login",
            data: JSON.stringify(data),
            //data: data,
            dataType: "json",
            contentType: 'application/json',
            success: function(msg){
                console.log( msg );
            },
            error: function(err) {
                console.log( err );
            }
        });
    });*/
})();