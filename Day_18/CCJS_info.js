//Promise JS info
// Case 1
let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);

//Answer should be 1

// Case 2


// Case 3

