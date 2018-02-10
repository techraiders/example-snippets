( function () {
  'use strict';
  getModule( 'mx.ftr' )
    .filter( 'monthsToYearsAndMonths', function (  ) {
      return function ( months ) {
        var result;
        if ( Number( months ) !== NaN ) {
          if ( months > 12 ) {
            var years = months / 12;
            years = Math.floor( years );
            var months = months % 12;
            result = years + " Years " + months.toString() + " Months";
          }
          else {
            result = months.toString() + " Months";
          }
        }
        return result;
      }
    } );
} )();