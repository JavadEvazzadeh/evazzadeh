function UpdateTableHeaders() {
   $(".persist-area").each(function() {

       var el             = $(this),
           offset         = el.offset(),
           scrollTop      = $(window).scrollTop(),
           floatingHeader = $(".floatingHeader", this)

       if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
           floatingHeader.css({
            "visibility": "visible",
            "opacity": "1"
           });
       } else {
           floatingHeader.css({
            "visibility": "hidden"
           });
       };
   });
}

$(document).ready(function ()
{
  $('.donate-box input').bind('focus', function ()
  {
     $(this).parents('.donate-box').addClass('active');
  });

});

// DOM Ready
// $(function() {

   // var clonedHeaderRow;

   // $(".persist-area").each(function() {
   //     clonedHeaderRow = $(".persist-header", this);
   //     clonedHeaderRow
   //       .before(clonedHeaderRow.clone())
   //       // .css("width", clonedHeaderRow.width())
   //       .addClass("floatingHeader");

   // });

   // $(window)
   //  .scroll(UpdateTableHeaders)
   //  .trigger("scroll");

// });




// var previousScroll = 0;
// $(window).on("scroll touchmove", function () {
//   var currentScroll = $(this).scrollTop();

//   // $('body').toggleClass('tiny', $(document).scrollTop() > 10);
//   // $('body').toggleClass('full', currentScroll > previousScroll && $(document).scrollTop() > 99);
//   // $('#wrapper').removeClass('removeside', $(document).scrollTop() > 10);

//   // for detect slide status on other elements
//   // $('body').toggleClass('slideDown', currentScroll < previousScroll);
//   // $('body').toggleClass('slideUp', currentScroll > previousScroll);

//   // for slide up and down header
//   // $('#header').toggleClass('slideDown', currentScroll < previousScroll && $(document).scrollTop() > 99);
//   // $('#header').toggleClass('slideUp', currentScroll > previousScroll && $(document).scrollTop() > 99);






   // if (currentScroll > previousScroll && $(document).scrollTop() > 200){
   //    $('#site-title').addClass('slideUp');
   //    $('#site-title').removeClass('slideDown');

   // } else {
   //    $('#site-title').addClass('slideDown');
   //    $('#site-title').removeClass('slideUp');

   // }
   // previousScroll = currentScroll;
// });
  if($('body').width() < 959){
    $("#wrapper").removeClass('removeside', $('body').width() < 959 );
  }



$("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("removeside");
      // $(".floatingHeader").style.removeProperty("width");

      // var myElements = document.querySelectorAll(".floatingHeader");

      // for (var i = 0; i < myElements.length; i++) {
      //     // myElements[i].style.width = $(".persist-area").width()-250+"px" ;
      // }
      // alert( $(".persist-area").width()+"px" );
});

// Prevent variables from being global
(function () {

      /*
          1. Inject CSS which makes iframe invisible
      */

    var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] ||
              document.getElementsByTagName('script')[0];

    div.innerHTML = '&shy;<style> iframe { visibility: hidden; } </style>';

    ref.parentNode.insertBefore(div, ref);


    /*
        2. When window loads, remove that CSS,
           making iframe visible again
    */

    window.onload = function() {
        div.parentNode.removeChild(div);
    }

})();
