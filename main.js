const finishBtn = document.getElementById('finish-btn')
let selectedGenreIds = []

function getId(btn) {
    btn.classList.toggle('ring-1')
    btn.classList.toggle('ring-[#33458b]')
    btn.classList.toggle('bg-[#45464d]')

    let id = btn.dataset.id
    if (selectedGenreIds.includes(id)) {
        selectedGenreIds = selectedGenreIds.filter(data => data !== id)
    }
    else{
        selectedGenreIds.push(id)
    }
}

finishBtn.addEventListener('click', function() {
    if (selectedGenreIds.length === 0) {
        alert('You should select at least one movie genre')
    }
    else {
        sessionStorage.setItem('selectedGenreIds', JSON.stringify(selectedGenreIds))
        window.location.href = "movies.html"
    }
})