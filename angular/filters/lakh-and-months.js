( function () {
  'use strict';
  getModule( 'mx.ftr' )
   .filter( 'mxLakhAndThousand', [function ( ) {
     return function ( input ) {
       if ( input ) {
         if ( input < 1000 ) {
           return input;
         } else {
           var lakh = input / 100000;
           
           var thousand = input % 100000;
           thousand = thousand / 1000;
           return lakh.toString().substr(0, 2) + ' Lakh ' + thousand.toString().substr(0, 2) + ' thousand';
         }
       }
     };
   }] );

} )();