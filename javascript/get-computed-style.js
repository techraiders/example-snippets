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


/* ADD and REMOVE RULES DIRECTLY TO STYLESHEETS:
We're all well versed in modifying styles via the element.style.propertyName method, and we've used JavaScript toolskits to do it, but did you know you can actually read and write rules within new and existing stylesheets?
*/

function addCSSRule (sheet, selector, rules, index) {
  if (sheet.insertRule) {
    sheet.insertRule(selector + "{" + rules + "}", index);
  } else {
    sheet.addRule(selector, rules, index);
  }
}

Use it!
  CSSRule(document.stylesheets[0], 'header', 'float: left');
