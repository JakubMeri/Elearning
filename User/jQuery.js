$('#upload').on('click', function(e) {
    e.preventDefault();
    $('.odovzdatAlert').css('display', 'flex');
    $('#odovzdat').on('click', function(){
    var file_data = $('#odovzdaneZadanie').prop('files')[0];   
    var form_data = new FormData();                  
    form_data.append('file', file_data);                           
    $.ajax({
        url: 'uploadZadanie.php',
        dataType: 'text', 
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,                         
        type: 'POST',
        success: function(php_script_response){
            console.log(php_script_response);
            $(".hlaska").html("ODOVZDANÉ");
        }
     });
     $('.odovzdatAlert').css('display', 'none');
     setTimeout(() => {  
     $(".odovzdatZadanie").css("opacity", "0");
     setTimeout(() => {
        $(".odovzdatZadanie").css("display", "none");
        $(".hlaska").html("");
     }, 300);
    }, 2000);
     $('#odovzdaneZadanie').val("");
    });
    $('#neodovzdat').on('click', function(){
        $('.odovzdatAlert').css('display', 'none');
    });
});