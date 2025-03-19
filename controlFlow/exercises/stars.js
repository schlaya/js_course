showStars(10);

function showStars(count) {
    for (let row = 1; row <= count; row++){
        let stars = '';
    
        for (let i = 0; i < row; i++) {
            stars += '*'
            console.log(stars)
        }
    }
}

