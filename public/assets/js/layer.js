//cards hover

//--------------------1-----------------------------------------

    $('#image-card1').mouseover(function(){
        $('.card-layer1').addClass('card-show');
        $('.layer-content-container1').addClass('card-show');
    })
    
    $('#image-card1').mouseleave(function(){
        $('.card-layer1').removeClass('card-show');
        $('.layer-content-container1').removeClass('card-show');
    })

//---------------------2----------------------------------------

$('#image-card2').mouseover(function(){
    console.log("hi there");
    $('.card-layer2').addClass('card-show');
    $('.layer-content-container2').addClass('card-show');
})

$('#image-card2').mouseleave(function(){
    $('.card-layer2').removeClass('card-show');
    $('.layer-content-container2').removeClass('card-show');
})

//----------------------3---------------------------------------

$('#image-card3').mouseover(function(){
    console.log("hi there");
    $('.card-layer3').addClass('card-show');
    $('.layer-content-container3').addClass('card-show');
})

$('#image-card3').mouseleave(function(){
    $('.card-layer3').removeClass('card-show');
    $('.layer-content-container3').removeClass('card-show');
})

//----------------------4---------------------------------------

$('#image-card4').mouseover(function(){
    console.log("hi there");
    $('.card-layer4').addClass('card-show');
    $('.layer-content-container4').addClass('card-show');
})

$('#image-card4').mouseleave(function(){
    $('.card-layer4').removeClass('card-show');
    $('.layer-content-container4').removeClass('card-show');
})

//----------------------5---------------------------------------

$('#image-card5').mouseover(function(){
    console.log("hi there");
    $('.card-layer5').addClass('card-show');
    $('.layer-content-container5').addClass('card-show');
})

$('#image-card5').mouseleave(function(){
    $('.card-layer5').removeClass('card-show');
    $('.layer-content-container5').removeClass('card-show');
})

//----------------------6---------------------------------------

$('#image-card6').mouseover(function(){
    console.log("hi there");
    $('.card-layer6').addClass('card-show');
    $('.layer-content-container6').addClass('card-show');
})

$('#image-card6').mouseleave(function(){
    $('.card-layer6').removeClass('card-show');
    $('.layer-content-container6').removeClass('card-show');
})

//-----------------------7--------------------------------------

$('#image-card7').mouseover(function(){
    console.log("hi there");
    $('.card-layer7').addClass('card-show');
    $('.layer-content-container7').addClass('card-show');
})

$('#image-card7').mouseleave(function(){
    $('.card-layer7').removeClass('card-show');
    $('.layer-content-container7').removeClass('card-show');
})

//------------------------8-------------------------------------

$('#image-card8').mouseover(function(){
    console.log("hi there");
    $('.card-layer8').addClass('card-show');
    $('.layer-content-container8').addClass('card-show');
})

$('#image-card8').mouseleave(function(){
    $('.card-layer8').removeClass('card-show');
    $('.layer-content-container8').removeClass('card-show');
})


//pop-up

//-------------------hydro cyclones -----------------------------

$(document).on('click', '#button1', function(){
    $('.pop-up-containers').addClass('card-show');
    $('#hydro').addClass('card-show');
})

$('.cancels').on('click', function(){
    $('.pop-up-containers').removeClass('card-show');
    $('#hydro').removeClass('card-show');
})

//-------------------transfer chutes-----------------------------

$(document).on('click', '#button2', function(){
    $('.pop-up-containers').addClass('card-show');
    $('#trans').addClass('card-show');
})

$('.cancels').on('click', function(){
    $('.pop-up-containers').removeClass('card-show');
    $('#trans').removeClass('card-show');
})

//-------------------inter-stage screens---------------------------

$(document).on('click', '#button3', function(){
    $('.pop-up-containers').addClass('card-show');
    $('#inter').addClass('card-show');
})

$('.cancels').on('click', function(){
    $('.pop-up-containers').removeClass('card-show');
    $('#inter').removeClass('card-show');
})

//---------------------conveyor idlers-----------------------------

$(document).on('click', '#button4', function(){
    $('.pop-up-containers').addClass('card-show');
    $('#conveyor').addClass('card-show');
})

$('.cancels').on('click', function(){
    $('.pop-up-containers').removeClass('card-show');
    $('#conveyor').removeClass('card-show');
})

//-----------------------screen panels-----------------------------

$(document).on('click', '#button5', function(){
    $('.pop-up-containers').addClass('card-show');
    $('#screen').addClass('card-show');
})

$('.cancels').on('click', function(){
    $('.pop-up-containers').removeClass('card-show');
    $('#screen').removeClass('card-show');
})

//-----------------------spray nozzles-----------------------------

$(document).on('click', '#button6', function(){
    $('.pop-up-containers').addClass('card-show');
    $('#spray').addClass('card-show');
})

$('.cancels').on('click', function(){
    $('.pop-up-containers').removeClass('card-show');
    $('#spray').removeClass('card-show');
})

//-----------------------hdpe pipes---------------------------------

$(document).on('click', '#button7', function(){
    $('.pop-up-containers').addClass('card-show');
    $('#pipe').addClass('card-show');
})

$('.cancels').on('click', function(){
    $('.pop-up-containers').removeClass('card-show');
    $('#pipe').removeClass('card-show');
})

//-----------------------poly-u liners---------------------------------

$(document).on('click', '#button8', function(){
    $('.pop-up-containers').addClass('card-show');
    $('#poly').addClass('card-show');
})

$('.cancels').on('click', function(){
    $('.pop-up-containers').removeClass('card-show');
    $('#poly').removeClass('card-show');
})