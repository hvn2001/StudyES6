const myPromise = new Promise((resolve, reject) => {
    resolve('Good to go');
});

myPromise.then((res) => {
    console.log(res); //Good to go
});


const myPromise2 = new Promise((resolve, reject) => {
    reject('Not good to go');
});

myPromise2
    .then((res) => {
        //will not be called
        console.log(res);
    }, (err) => {
        //will be called
        console.log(err); //Not good to go
    });


const myPromise3 = new Promise((resolve, reject) => {
    reject('Not good to go');
});

myPromise3
    .then((res) => {
        //Only if the promise resolved
        console.log(res);
    })
    .catch((err) => {
        console.log(err); //Not good to go
    });