//cards hover

//--------------------1-----------------------------------------

$('.testh').mouseover(function(){
    console.log("hi there");
    $(this).addClass('card-show');
    console.log(this);
    $('.layer-content-container1').addClass('card-show');
})

$('#image-card1').mouseleave(function(){
    $('.card-layer1').removeClass('card-show');
    $('.layer-content-container1').removeClass('card-show');
})

//---------------------2----------------------------------------

// $('#image-card2').mouseover(function(){
//     console.log("hi there");
//     $('.card-layer2').addClass('card-show');
//     $('.layer-content-container2').addClass('card-show');
// })

// $('#image-card2').mouseleave(function(){
//     $('.card-layer2').removeClass('card-show');
//     $('.layer-content-container2').removeClass('card-show');
// })

//----------------------3---------------------------------------

// $('#image-card3').mouseover(function(){
//     console.log("hi there");
//     $('.card-layer3').addClass('card-show');
//     $('.layer-content-container3').addClass('card-show');
// })

// $('#image-card3').mouseleave(function(){
//     $('.card-layer3').removeClass('card-show');
//     $('.layer-content-container3').removeClass('card-show');
// })

//----------------------4---------------------------------------

// $('#image-card4').mouseover(function(){
//     console.log("hi there");
//     $('.card-layer4').addClass('card-show');
//     $('.layer-content-container4').addClass('card-show');
// })

// $('#image-card4').mouseleave(function(){
//     $('.card-layer4').removeClass('card-show');
//     $('.layer-content-container4').removeClass('card-show');
// })

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

$(document).on('click', '#button8', function(){
    $('.pop-up-containers').addClass('card-show');
    $('.pop-up').addClass('card-show');
})

$('.cancels').on('click', function(){
    $('.pop-up-containers').removeClass('card-show');
    $('.pop-up').removeClass('card-show');
})