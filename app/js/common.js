$(function() {


  // Dropdown
  $(".has-dropdown").click(function(){
    $(this).toggleClass('is-active');
  });




  // Tabs
  $tab_list = $("#block-about .tab");
  $box_list = $("#block-about .box-innear");


  $box_list.hide().first().show();


  $tab_list.click(function(){

    if (!$(this).hasClass('active')){

      $tab_list.removeClass('active');
      $(this).addClass('active');

      $tab_target = $(this).data('target');

      $box_list.hide();

      $('#block-about .' + $tab_target).fadeIn();
    }

  });



  // Sign Up


  $step_list = $('#block-sign_up .box-innear');
  $step_list.hide().first().show();

  $('.js-next').click(function(){
      $tab_target = $(this).data('target');
      $step_list.hide();
      $('js-tab-step-2').addClass('continue');
      $('js-tab-step-1').addClass('success');
      $('#block-sign_up .' + $tab_target).fadeIn();
  })



  // Navigation

  $('.scrollTo').click(function(event){
    event.preventDefault();
    $tager_id = $(this).data('target');

    $target = document.getElementById($tager_id);

    $('html, body').animate({
      scrollTop: $($target).offset().top
    }, 500);

  });




});
