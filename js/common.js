$(document).ready(function(){

    /*=============================get===============================*/

    $('#getForecast').bind('click', function(){

        $.get('getForecast.txt', function(data){
            $('.result').html(data);
        });

    });

    /*==============================post==============================*/

    $('#getForecast-2').bind('click', function(){

        $.post('getForecast.php', function(data){
            $('.result').html(data);
        });

    });

    /*==============================ajax==============================*/

    function funcBefore () {
        $('#getUser').text('Loading...');
    }

    function funcSuccess (data) {
        $('.result').html(data);
    }

    $('#getUser').bind('click', function(){

        var user = 'Artemis';

        $.ajax({
            url:'content.php',
            type:'POST',
            data: ({name:user, age:22}),
            dataType: 'HTML',
            beforeSend: funcBefore,
            success: funcSuccess
        });

    });

});