(function ($) {
  $(function () {

    var window_width = $(window).width();
    $('.content_area > ul > li a').click(function () {

      $(this).siblings('.outer_overlay_area').show();
    });

    $('.modal_content .modal_content_area .fa-times').click(function () {


      $(this).parents('.outer_overlay_area').hide();

    });

    //Slider
    $('#my-slider').change(function () {
      var myswitch = $(this);
      var show = myswitch[0].selectedIndex == 1 ? true : false;
      $('#show-me').toggle(show);
    });

    //Fade out alert
    $('#wizard-t-5').on('click', function () {
      $(".alert").delay(10000).fadeOut('slow');
    });

//    $('#nav-search').click(function(){
//
//      $('#nav-in-s').slideToggle("slow");
//
//
//    });

    // add user checkbox

    $(".cb").on("click", function () {
      var br = '<br>';
      var user = '<span class="us"> No users present for this role  </span>';
      if ($(this).is(":checked")) {
        $('span.us').hide();
        $(this).closest("td").siblings("td").each(function () {
          $("#append").append($(this).text());
          $("#append").append(br)
        });
      } else {
        $("#append").html("");
        $(":checkbox:checked").closest("td").siblings("td").each(function () {
          $("#append").append($(this).text());
          $("#append").append(br)
        });
      }

      var n = $('input:checkbox:checked').length;
      if (n === 0) {
        $("#append").append(user);
      }
    });

    /* ----------------------------------------------------------------------------------------- */

      /* Data Builder Starts Here */
    var data_count = 1;
    var data_idi;

    //Add text field

    $(document.body).on('click', '#data-txt', function () {

      var dtxtinput = '<div class="row dataframe" id="' + data_count + '"><button class="btn btn-default btn-block shadow"><span class="edit-data-label"  > Enter Label </span></button><div class="pull-right btn-pannel"><button class="btn-transparent" id="delD"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#data-inter").append(dtxtinput);
      data_count = data_count + 1;
    });

    //Add paragraph
    $(document.body).on('click', '#data-para', function () {

      var ddropinput = '<div class="row dataframe" id="' + data_count + '"><button class="btn btn-default btn-block shadow"><span class="edit-data-label"  > Enter Label </span></button><div class="pull-right btn-pannel"><button class="btn-transparent" id="delD"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#data-inter").append(ddropinput);
      data_count = data_count + 1;
    });

    //Add number
    $(document.body).on('click', '#data-noinput', function () {

      var dnuminput = '<div class="row dataframe" id="' + data_count + '"><button class="btn btn-default btn-block shadow"><span class="edit-data-label"  > Enter Label </span></button><div class="pull-right btn-pannel"><button class="btn-transparent" id="delD"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#data-inter").append(dnuminput);
      data_count = data_count + 1;
    });

    //Add web
    $(document.body).on('click', '#data-webinput', function () {

      var dwinput =  '<div class="row dataframe" id="' + data_count + '"><button class="btn btn-default btn-block shadow"><span class="edit-data-label"  > Enter Label </span></button><div class="pull-right btn-pannel"><button class="btn-transparent" id="delD"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#data-inter").append(dwinput);
      data_count = data_count + 1;
    });

    //Add time
    $(document.body).on('click', '#data-timeinput', function () {

      var dtimeinput = '<div class="row dataframe" id="' + data_count + '"><button class="btn btn-default btn-block shadow"><span class="edit-data-label"  > Enter Label </span></button><div class="pull-right btn-pannel"><button class="btn-transparent" id="delD"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#data-inter").append(dtimeinput);
      data_count = data_count + 1;
    });

    //Add date
    $(document.body).on('click', '#data-dateinput', function () {

      var ddtinput = '<div class="row dataframe" id="' + data_count + '"><button class="btn btn-default btn-block shadow"><span class="edit-data-label"  > Enter Label </span></button><div class="pull-right btn-pannel"><button class="btn-transparent" id="delD"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#data-inter").append(ddtinput);
      data_count = data_count + 1;
    });

    //Add email
    $(document.body).on('click', '#data-emailinput', function () {

      var deminput = '<div class="row dataframe" id="' + data_count + '"><button class="btn btn-default btn-block shadow"><span class="edit-data-label"  > Enter Label </span></button><div class="pull-right btn-pannel"><button class="btn-transparent" id="delD"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#data-inter").append(deminput);
      data_count = data_count + 1;
    });

    //Add price
    $(document.body).on('click', '#data-priceinput', function () {

      var dprinput = '<div class="row dataframe" id="' + data_count + '"><button class="btn btn-default btn-block shadow"><span class="edit-data-label"  > Enter Label </span></button><div class="pull-right btn-pannel"><button class="btn-transparent" id="delD"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#data-inter").append(dprinput);
      data_count = data_count + 1;
    });

    //Add address
    $(document.body).on('click', '#data-addinput', function () {

      var dadinput = '<div class="row dataframe" id="' + data_count + '"><button class="btn btn-default btn-block shadow"><span class="edit-data-label"  > Enter Label </span></button><div class="pull-right btn-pannel"><button class="btn-transparent" id="delD"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#data-inter").append(dadinput);
      data_count = data_count + 1;
    });

    //Add phone
    $(document.body).on('click', '#data-phoneinput', function () {

      var dphinput = '<div class="row dataframe" id="' + data_count + '"><button class="btn btn-default btn-block shadow"><span class="edit-data-label"  > Enter Label </span></button><div class="pull-right btn-pannel"><button class="btn-transparent" id="delD"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#data-inter").append(dphinput);
      data_count = data_count + 1;
    });

    //Delete task input

    $(document.body).on('click', '#delD', function () {
      if (confirm("Are you sure ?")) {
        $(this).parents('.dataframe').fadeOut();
      }
      return false;
    });


    //Edit and Properties Panel
    $('#data-btn-edit').on('click', function () {
      $('.edit-data').show();
      $('#data-btn-property').removeClass('btn-primary');
      $('#data-btn-edit').removeClass('btn-default');
      $('#data-btn-edit').addClass('btn-primary');
      $('.properties-data').hide();
    });

    $('#data-btn-property').on('click', function () {
      $('.properties-data').show();
      $('#data-btn-edit').removeClass('btn-primary');
      $('#data-btn-property').removeClass('btn-default');
      $('#data-btn-property').addClass('btn-primary');
      $('.edit-data').hide();
    });

    $(document.body).on('click', '.dataframe', function (e) {


      $('.properties-data').hide();
      $('#data-btn-property').removeClass('btn-primary');
      $('#data-btn-edit').removeClass('btn-default');
      $('#data-btn-edit').addClass('btn-primary');
      $('.edit-data').show();
      data_idi = $(this).attr('id');

      $('#data-et').keyup(function () {
        var value = $(this).val();

        $('#' + data_idi).find('span').text(value);

      });

      $('#data-et').change(function () {

        $(this).val('');
      });

    });

    //Add required to fields.
    $(document.body).on('click', '#data-check', function (e) {

      if ($(this).is(":checked")) {
        $('.edit-data-label').addClass('required');

      } else {
        $('.edit-data-label').removeClass('required');
      }
    });

    /*Data Builder Ends Here */


    /* ------------------------------------------------------------------------------------------- */


    /* Task Builder Starts Here */
    var count = 2;
    var idi;

    //Add text field
    $(document.body).on('click', '#txt', function () {

      var txtinput = '<div class="row taskframe" id="' + count + '"><label class="edit-label"  > Enter Label </label><input type="email" class="form-control formctrl" id="exampleInputEmail1" placeholder="Text" disabled><div class="pull-right btn-pannel"><button class="btn-transparent" id="delT"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#inter").append(txtinput);
      count = count + 1;
    });

    //Add paragraph
    $(document.body).on('click', '#para', function () {

      var dropinput = '<div class="row taskframe" id="' + count + '"><label class="edit-label"  > Enter Label </label><textarea class="form-control formctrl shadow" rows="3" style="resize:none" placeholder="Paragraph" disabled /><div class="pull-right btn-pannel"><button class="btn-transparent" id="delT"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#inter").append(dropinput);
      count = count + 1;
    });

    //Add number
    $(document.body).on('click', '#noinput', function () {

      var numinput = '<div class="row taskframe" id="' + count + '"><label class="edit-label"  > Enter Label </label><input type="number" class="form-control formctrl" placeholder="Number" disabled><div class="pull-right btn-pannel"><button class="btn-transparent" id="delT"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#inter").append(numinput);
      count = count + 1;
    });

    //Add web
    $(document.body).on('click', '#webinput', function () {

      var winput = '<div class="row taskframe" id="' + count + '"><label class="edit-label"  > Enter Label </label><input type="text" class="form-control formctrl" placeholder="Web" disabled><div class="pull-right btn-pannel"><button class="btn-transparent" id="delT"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#inter").append(winput);
      count = count + 1;
    });

    //Add time
    $(document.body).on('click', '#timeinput', function () {

      var tinput = '<div class="row taskframe" id="' + count + '"><label class="edit-label"  > Enter Label </label><input type="text" class="form-control formctrl" placeholder="Time" disabled><div class="pull-right btn-pannel"><button class="btn-transparent" id="delT"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#inter").append(tinput);
      count = count + 1;
    });

    //Add date
    $(document.body).on('click', '#dateinput', function () {

      var dtinput = '<div class="row taskframe" id="' + count + '"><label class="edit-label"  > Enter Label </label><input type="text" class="form-control formctrl" placeholder="Date" disabled><div class="pull-right btn-pannel"><button class="btn-transparent" id="delT"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#inter").append(dtinput);
      count = count + 1;
    });

    //Add email
    $(document.body).on('click', '#emailinput', function () {

      var eminput = '<div class="row taskframe" id="' + count + '"><label class="edit-label"  > Enter Label </label><input type="email" class="form-control formctrl" placeholder="Email" disabled><div class="pull-right btn-pannel"><button class="btn-transparent" id="delT"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#inter").append(eminput);
      count = count + 1;
    });

    //Add price
    $(document.body).on('click', '#priceinput', function () {

      var prinput = '<div class="row taskframe" id="' + count + '"><label class="edit-label"  > Enter Label </label><input type="text" class="form-control formctrl" placeholder="Price" disabled><div class="pull-right btn-pannel"><button class="btn-transparent" id="delT"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#inter").append(prinput);
      count = count + 1;
    });

    //Add address
    $(document.body).on('click', '#addinput', function () {

      var adinput = '<div class="row taskframe" id="' + count + '"><label class="edit-label"  > Enter Label </label><input type="text" class="form-control formctrl" placeholder="Address" disabled><input type="text" class="form-control formctrl" placeholder="State" disabled><input type="text" class="form-control formctrl" placeholder="City" disabled><input type="text" class="form-control formctrl" placeholder="Zipcode" disabled><input type="text" class="form-control formctrl" placeholder="Country" disabled><div class="pull-right btn-pannel"><button class="btn-transparent" id="delT"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#inter").append(adinput);
      count = count + 1;
    });

    //Add price
    $(document.body).on('click', '#phoneinput', function () {

      var phinput = '<div class="row taskframe" id="' + count + '"><label class="edit-label"  > Enter Label </label><input type="text" class="form-control formctrl" placeholder="Phone Number" disabled><div class="pull-right btn-pannel"><button class="btn-transparent" id="delT"><i class="fa fa-trash-o"></i></button></div></div>';
      $("#inter").append(phinput);
      count = count + 1;
    });

    //Delete task input

    $(document.body).on('click', '#delT', function () {
      if (confirm("Are you sure ?")) {
        $(this).parents('.taskframe').fadeOut();
      }
      return false;
    });

    //Edit and Properties Panel
    $('#btn-edit').on('click', function () {
      $('.edit-task').show();
      $('#btn-property').removeClass('btn-primary');
      $('#btn-edit').removeClass('btn-default');
      $('#btn-edit').addClass('btn-primary');
      $('.properties-task').hide();
    });

    $('#btn-property').on('click', function () {
      $('.properties-task').show();
      $('#btn-edit').removeClass('btn-primary');
      $('#btn-property').removeClass('btn-default');
      $('#btn-property').addClass('btn-primary');
      $('.edit-task').hide();
    });

    $(document.body).on('click', '.taskframe', function (e) {


      $('.properties-task').hide();
      $('#btn-property').removeClass('btn-primary');
      $('#btn-edit').removeClass('btn-default');
      $('#btn-edit').addClass('btn-primary');
      $('.edit-task').show();
      idi = $(this).attr('id');

      $('#et').keyup(function () {
        var value = $(this).val();

        $('#' + idi).find('label').text(value);

      });

      $('#et').change(function () {

        $(this).val('');
      });

    });

    //Add required to fields.
    $(document.body).on('click', '#task-check', function (e) {

      if ($(this).is(":checked")) {
        $('.edit-label').addClass('required');

      } else {
        $('.edit-label').removeClass('required');
      }
    });

    /*Task Builder Ends Here */

    //close all modals on button click
    $('#cardholder').on("click", function () {
      $('#c1 , #c2 , #c3, #c4').modal('hide');

    });

    //toggle accordion arrows

    $('.collapse').on('shown.bs.collapse', function () {
      $(this).parent().find(".glyphicon-chevron-right").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-up");
    }).on('hidden.bs.collapse', function () {
      $(this).parent().find(".glyphicon-chevron-up").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-right");
    });

    //toggle tag view

    $("#tagarrow").on("click", function () {
      $(this).toggleClass('fa-angle-down fa-angle-up');
      $('.tagview').toggle('fast');
    });

    //toggle roles view

    $("#rolesarrow").on("click", function () {
      $(this).toggleClass('fa-angle-down fa-angle-up');
      $('.rolesview').toggle('fast');
    });

    // Hide Content on click
    $('.acc').on("click", function (z) {
      var $this = $(this),
        $id = $this.attr('id'),
        $class = '.' + $('.about-' + $id).attr('class').replace('hideDiv', '');

      $('#').addClass('hideDiv');
      $('.about-' + $id).removeClass('hideDiv');
      $('div[class*=about]').not($class).addClass('hideDiv');
    });

    //show hide cards
    $('.cl').on("click", function (z) {
      var $this = $(this),
        $id = $this.attr('id'),
        $class = '.' + $('.card-' + $id).attr('class').replace('hideDiv', '');

      $('#').addClass('hideDiv');
      $('.card-' + $id).removeClass('hideDiv');
      $('div[class*=card]').not($class).addClass('hideDiv');
    });

    //remove preview
    $('.pr').on("click", function (z) {
      var $this = $(this),
        $id = $this.attr('id'),
        $class = '.' + $('.preview-' + $id).attr('class').replace('hideDiv', '');

      $('#').addClass('hideDiv');
      $('.preview-' + $id).removeClass('hideDiv');
      $('div[class*=preview]').not($class).addClass('hideDiv');
    });

    $('.cross').on('click', function (c) {
      $(this).parents().eq(2).addClass("hideDiv")
    });

    //Add Closure

    $('#addClosure').on('click', function () {
      var closureContent = '<div class="row closure shadow" id="closure1"><div class="form-group" style="display:inline-flex"><label style="margin-top: 6px;">If </label><select class="form-control shadow" style="width:110px !important; margin-left:10px"><option class="hideDiv">Tag</option><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option><option>Option 5</option></select><select class="form-control shadow" style="width:60px !important; margin-left:10px " ><option class="hideDiv">=</option><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option><option>Option 5</option></select><div style="margin-left:10px"> <select class="form-control shadow" style="width:110px !important" ><option class="hideDiv">Value</option><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option><option>Option 5</option></select></div></div><div class="pull-right btn-pannel"><button class="btn-transparent"> <i class="fa fa-pencil"></i> </button> <button class="btn-transparent"><i class="fa fa-save"></i></button> <button class="btn-transparent" id="del1"><i class="fa fa-trash-o"></i></button></div></div>';
      $('#closureBody').append(closureContent);
    });


    //Delete closure

    $(document.body).on('click', '#del1', function (e) {
      if (confirm("Are you sure ?")) {
        $(this).parents('.closure').fadeOut();
      }
      return false;
    });



    // Plugin initialization
    $('.slider').slider({
      full_width: true
    });
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav({
      'edge': 'left'
    });
    $('.datepicker').pickadate({
      selectYears: 20
    });
    $('select').not('.disabled').material_select();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(window).load(function () {

  $(document.body).on('click', 'a.tm-tag', function (e) {
    //alert('hi');
    $(this).addClass('selected');
    $(this).siblings('a').removeClass('selected');


  });

});

/* $('#del1').on('click', function () {
   if (confirm("Are you sure ?")) {
   //  $('.closure').remove();
    // $(this).closest('.closure').fadeOut();
   }
   return false;
 });*/

//show/ hide button on mouse enter
//    $('.closure').mouseenter(function () {
//      $('.btn-pannel').show();
//    }).mouseleave(function () {
//      $('.btn-pannel').hide();
//    });
