const getDataCallback = (callback) => {
    setTimeout(() => {
        callback('this is my callback error', undefined)

    }, 2000);

}


getDataCallback((err, data) => {
    if (err) {
        console.log(err);

    } else {
        console.log(data);

    }
})

// Promise

const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`this is my success data: ${data}`)
        //reject('this is my promise error')

    }, 2000)
})


const myPromise = getDataPromise(123)

myPromise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})

