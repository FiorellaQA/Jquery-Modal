$(function() {
    $("#openModal-js").on('click',function(e) {
        e.preventDefault();
        $('.bodyModal').show();
    });

    $("#closeModal-js").on('click',function(e){
        e.preventDefault();
        $('.bodyModal').hide();
    })
});