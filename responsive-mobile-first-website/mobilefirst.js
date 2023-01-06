$('#view-work').on('click' ,function() {
    const images = $('#images').position().top;
    console.log("images", images);
    $('html,body').animate({
        scrollTop :images
    }, 1000);
});