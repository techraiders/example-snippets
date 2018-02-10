var isMomHappy =  true;

// Promise
var willIGetNewPhone = new Promise(
  function(resolve, reject) {
    if(isMomHappy) {
      var phone = {
        brand : 'Samsung',
        color: 'black'
      };
      resolve(phone); // fullfilled
    } else {
      var reason = new Error('mom is not happy');
      reject(reason);
    }
  } //promise function
); // promise obj willIGetNewPhone

var askMom = function() {
  willIGetNewPhone
    .then(function(fullfilled) {
      // yay, you got a new phone
      console.log(fullfilled);
    })
    .catch(function(error){
      console.log(error.message);
    });
};

console.clear();
askMom();


/* 2nd promise
var showOff = function (phone) {
    return new Promise(
        function (resolve, reject) {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};

// shorten it
...

// 2nd promise */

var showOff = function (phone) {
    var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

    return Promise.resolve(message);
};
