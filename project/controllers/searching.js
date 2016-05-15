var Tour = require('../models/tour');

module.exports = function(req, res, next) {

    console.log('***********');
    console.log(req.body);
    var re = new RegExp('(' + req.body.search + ')', 'i');
    console.log(re);
    console.log('***********');

    return Tour.find({ 'tags': re }, function (err, tour) {
        if (!err) {
            console.log(tour);
            return res.render('search', { message: tour });
        } else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s', res.statusCode, err.message);
            return res.send({error: 'Server error'});
        }
    })
}




                //View.EventsDialog = function(CalendarEvent){
                //    var t;
                //    var r;
                //}
                //View.EventsDialog.prototype.open = function(){
                //    document.getElementById('eventshell').style.display = 'block';
                //}
                //View.EventsDialog.prototype.close = function(){
                //    document.getElementById('eventshell').style.display = 'none';
                //}
                //
                //var dialog = new View.EventsDialog(eventObject);
                //dialog.open();
                //dialog.close();


                //    Controllers.EventsEdit = function(event) {
                //        var id = event.target.id.replace(/[^d]/g, '');
                //        var dialog = new View.Dialog( Events.get(id) );
                //        dialog.open();
                //    }


                //var Events = {
                //    get: function (id) {
                //        return this.data[id];
                //    },
                //    del: function (id) {
                //        delete this.data[id];
                //        AjaxRequest.send('/events/delete/' + id);
                //    },
                //    data:{
                //        '112': { 'name': 'Party time!', 'date': '2009-10-31' },
                //        '113': { 'name': 'Pressies!', 'date': '2009-12-25' }
                //    },
                //    metadata: {
                //        'name': { 'type':'text', 'maxlength':20 },
                //        'date': { 'type':'date', 'between':['2008-01-01','2009-01-01'] }
                //    }
                //}









