$('#view-work').on('click' ,function() {
    const images = $('#images').position().top;
    $('html,body').animate({
        screenTop :images
    },900);
});