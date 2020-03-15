const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Good to go')
    }, 1000)

    setTimeout(() => {
        reject('Uh ohh');
    }, 1500)
});

myPromise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });