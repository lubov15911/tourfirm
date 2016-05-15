(function() {

    $('#signIn').on('click', function() {
        $('#login-popup').show();
    });

    $('#signUn').on('click', function() {
        $('#sighup-popup').show();
    });

    $('.btn-close').on('click', function() {
        $('.popup').hide();
    });

    $(document).ready(function() {
        $('#none-btn').trigger('click');
    });
})();
