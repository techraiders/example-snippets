/* If you need to scroll to a specific location on the page this little custom jQuery function can help you out. This snippet will help you scroll to a particular section based on the element you choose.
Add this little snippet inside your scripts file.
*/

$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}

// Add this (also in your scripts file) and modify it to be the element which you would like to scroll to.
$('#your-element').scrollView();

// You could use the above snippet it many ways. A very simple example would be to trigger the function inside a click event.
$('#your-link').click(function (event) {
  event.preventDefault();
  $('#your-div').scrollView();
});