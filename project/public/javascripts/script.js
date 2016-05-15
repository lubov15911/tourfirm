

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








            //(function() {
            //    this.Observer = {
            //        events: new Array(),
            //        listen: function(id, callback) {
            //            if (!this.events[id]) {
            //                this.events[id] = new Array();
            //            }
            //            return this.events[id].push(callback);
            //        },
            //        trigger: function(id, data) {
            //            var callback, key, _ref, _results;
            //            if (data == null) {
            //                data = {};
            //            }
            //            if (this.events[id]) {
            //                _ref = this.events[id];
            //                _results = [];
            //                for (key in _ref) {
            //                    callback = _ref[key];
            //                    _results.push(callback(data));
            //                }
            //                return _results;
            //            }
            //        }
            //    };
            //}).call(this);
            //
            //
            //Observer
            //
















