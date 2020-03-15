import "isomorphic-fetch"

fetch('http://pokeapi.co/api/v2/pokemon/1/')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err);
    });