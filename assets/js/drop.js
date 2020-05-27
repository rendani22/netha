$(document).mouseover('.service-menu', function(){
    console.log('it works');
    $('.service-drop-down').addClass('menu-show');
})

$(document).mouseleave('.service-menu', function(){
    console.log('this too works');
    $('.service-drop-down').removeClass('menu-show');
})

$(document).on('click', 'body', function(){
    console.log('this too works');
    $('.service-drop-down').removeClass('menu-show');
})