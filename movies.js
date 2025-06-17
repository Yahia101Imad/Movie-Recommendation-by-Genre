let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
})

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
})


let ids = JSON.parse(sessionStorage.getItem('selectedGenreIds'))

for (const id of ids) {
    for (let page = 7; page <= 9; page++) {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8f3f1f4faf3cd11b75cfd05e41bf66d6&with_genres=${id}&page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                data.results.forEach(movie => {
                    let slide = document.querySelector('.slide');
                    let posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

                    let content = `
                        <div class="item" style="background-image: url('${posterUrl}');">
                            <div class="content">
                                <div class="title">${movie.title}</div>
                                <div class="overview">${movie.overview}</div>
                                <button>Details</button>
                            </div>
                        </div>
                    `;
                    slide.innerHTML += content;
                });
            })
            .catch((err) => console.error('Error fetching data:', err));
    }
}