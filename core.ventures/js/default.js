$(document).ready(function () {

    /* default settings */
    $('.venobox').venobox();


    /* custom settings */
    $('.venobox_custom').venobox({
        framewidth: '440px',        // default: ''
        frameheight: '300px',       // default: ''
        border: '0px',             // default: '0'
        bgcolor: '#5dff5e',         // default: '#fff'
        titleattr: 'data-title',    // default: 'title'
        numeratio: false,            // default: false
        infinigall: false            // default: false
    });

    /* auto-open #firstlink on page load */
    $("#firstlink").venobox().trigger('click');

    $(".fancyboxLauncher").on("click", function () {
        $(".fancyboxImage").eq(0).trigger("click");
        return false;
    });

    $(".fancyboxImage")
    .attr('rel', 'gallery1')
    .fancybox({
        padding: 0,
        maxWidth: 1000,
        helpers: {
            media: {}
        }
    });


    $(".fancyboxEvents").on("click", function () {
        $(".fancyboxEvent").eq(0).trigger("click");
        return false;
    });

    $(".fancyboxEvent")
    .attr('rel', 'events')
    .fancybox({
        maxWidth: 500
    });

    $(".fancybox").fancybox({
        
    });

    $('#sendEmail').click(function () {
        debugger;

        $.ajax({
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
                data: {
                  'key': 'NSmTMXnSBHm6NMil6Au5nA',
                  'message': {
                    'from_email': $('#email').val(),
                    'to': [
                        {
                          'email': 'james@core.ventures',
                          'name': 'James Coleman',
                          'type': 'to'
                  }
            ],
          'autotext': 'true',
          'subject': 'Core.Ventures Inquiry',
          'html': 'Name: ' + $('#name').val() + '<br/>Message: ' + $('#message').val()
          }
            }
        }).done(function(response) {
            $('#sendEmail').val('Thank you for your message.');
            $('#sendEmail').prop("disabled", true);

        });
        return false;
    });
});

