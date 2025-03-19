const movie = {
    title: 'Zohan',
    releaseYear: 2009,
    rating: 5.0,
    director: 'Adam Sandler'
}

function showProperties(obj) {
    // with key is meant a valuekey of the object movie, for example title oder rating etc.
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key])
}

showProperties(movie)