const btt = $('#top_btn');
btt.click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},500)
})