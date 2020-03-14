function dataHandler(method, url = 'http://api.data.com') {
    return fetch(url)
        .then(res => res.json);
}

dataHandler('POST');
dataHandler('GET');