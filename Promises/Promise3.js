const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Good to go')
    }, 1000)

    setTimeout(() => {
        reject('Uh ohh');
    }, 1500)
});

const promiseSequel = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2, the promising');
    }, 500);

    setTimeout(() => {
        reject('Box office bomb');
    });
});

Promise.all([myPromise, promiseSequel])
    .then((...resolvedData) => {
        console.log(resolvedData);
    })
    .catch((...errors) => {
        console.log(errors);
    });