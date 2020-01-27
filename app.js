// here I checked to see if jQuery was connected and running and all
$(document).ready(function () {

    let textInput = $('#textInput');
    let btn = $('#btnSubmit');

    textInput.keyup(function (e) {
        if (textInput.val() !== '') {
            btn.attr('disabled', false);
        } else {
            btn.attr('disabled', true);
        }
    });

    $('#btnSubmit').click(function (e) {
        e.preventDefault();
        var submitValue = $('#textInput').val();
        //alert(submitValue);
        let item = $('<ul>' + submitValue + '<ul>');
        item.mouseover(function () {
            $(item).css('background-color', 'blue', );
            $(item).css('border-radius', '20px');

        });

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#'
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }


        item.click(function () {
            $(item).css('color', getRandomColor())

        })
        item.dblclick(function(){
            item.remove();
        })
        $('body').append(item)
    })

});