import "isomorphic-fetch"

function getPokemon(id, cb) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(res => cb(res));
}

function coro(g) {
    let it = g();
    return function () {
        return it.next.apply(it, arguments);
    }
}

const pokemon = coro(function* () {
    let pokemon1 = yield getPokemon(1, pokemon);
    let pokemon2 = yield getPokemon(242, pokemon);
    console.log(pokemon1, pokemon2);
});

pokemon();