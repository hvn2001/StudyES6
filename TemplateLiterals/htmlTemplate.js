let data = {
    "id": 1,
    "name": "Bulbasaur",
    "base_experience": 64,
    "height": 7,
    "is_default": true,
    "order": 1,
    "weight": 69
};

function createMarkup(data) {
    return `
        <article class="pokemon">
            <h3>${data.name}</h3>
            <p>The Pokemon ${data.name} has a base experience of ${data.base_experience}, they also weigh ${data.weight}</p>
        </article>
    `
}

$(document).ready(function () {
    $('#content').html(createMarkup(data));
});
