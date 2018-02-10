// Fixing jQuery failed to load

if (!window.$) {
  console.error('jQuery failed to load.');
  document.body.innerHTML = '<h1> Sorry! Something terrible happened. Are you in an elevator? Try again. </h1>' +
    '<div> If you have lots of problems, email us at hello_navneet@hotmail.com </div>';
}

/* NETWORK/PROXY BUG: The stripe API drop their javascript API on your page, and decrorate the form. It says this field in the form is the credit card number. This field in the form is the expiration date. This field in the form is the checksum CVV number. One you're done the stripe library would intercept the form, and go and process the credit card for you.

If stripe.js fails to load, you have a form that takes the credit card, and there is nothing that is going to intercept it, and the user hits submit, the form will do what forms do it will just take all the field, put them up in the URL, and do a GET request back in the URL.
You see - 'hey, here is my credit card detail in the URL, and it doesn't look very secure. That is one of many ways this can byte you.

  1. Always anticipate that a library can fail to load, it has a fallback. Even if it has a fallback, it should be saying that you can't      proceed, because nothing is worst than leaving your application in half ready state.
  
WHAT CAUSE A NETWORK/PROXY BUG/ERROR:
  1. It can happen because of a poor or unreliable network like in subways, elevator and crowded areas.
  2. It can happened in corporate environment due to nasty corporate proxies.
  3. It can happed with invasive browser's plugins.

CONCEPTS:
  1. Load Checking.
  2. Simulating Networks.
  3. Charles/Fiddler Proxy.  
*/

(function () {
  if (undef) {console.log('this should not work.');}
})(); // throws Uncaught ReferenceError: undef is not defined
2

(function () {
  if (window.undef) {console.log('this should not work.');}
})(); // undefined

