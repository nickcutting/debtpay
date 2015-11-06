$(document).ready(function(){

    // Alert box

    $('#alert-btn').click(function(e){
        alert('This is an alert');
        e.preventDefault();
    });

    // Hide text 1
    $('#text1-btn').click(function(e){
        $('#text1').slideToggle();
        e.preventDefault();
    });


    // Show text 2
    $('#text2-btn').click(function(e){
        $('#text2').toggle();
        e.preventDefault();
    });

    // Colour text 3 red
    $('#text3-btn').click(function(e){
        $('#text3').addClass('red');
        e.preventDefault();
    });

    // Hover
    $('#text4 img').hover(function(){
        $(this).stop().animate({'width' : '640px'}, 500);
        }, function(){
        $(this).stop().animate({'width' : '320px'}, 500);
  });

  // Add text to paragraph
  $('#text5-btn').click(function(e){
    $('#text5 p').append($('#textarea').val());
    e.preventDefault();

  });

  $('form').parsley({
      trigger: 'focusout', // What listen event shall trigger the validation
      successClass: "success", // Success class name
      errorClass: "error", // Error class name that will be applied on the element returned in the classHandler
      classHandler: function (el) {
          return el.$element.parent('.form-group');
      }, // classHandler returns the element where successClass and errorClass are applied
      errorsContainer: function (el) {
          return el.$element.parent().find('.error-container');
      }, // This tells the script which element we want to display the error message
      errorsWrapper: '<span class="error-message" aria-hidden="true"></span>', // This will wrap around our errorTemplate
      errorTemplate: '<span></span>' // The error message will be displayed within this HTML element
  });
});
