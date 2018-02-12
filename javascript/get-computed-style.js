[].forEach.call(
  document.querySelectorAll('body *'),
  function(el) {
    var computedStyle = document.defaultView.getComputedStyle(el, null);
    zIndex = computedStyle.getPropertyValue('z-index');
    zIndex = Number(zIndex);
    if (zIndex === zIndex && zIndex > 999) {
      console.info(el);
      //inspect(el);
      //debugger;
    }
  }
);

//var y = document.defaultView.getComputedStyle($0, null).getPropertyValue('z-index');
