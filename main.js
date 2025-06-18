const finishBtn = document.getElementById('finish-btn')
let selectedGenreIds = []

function getId(btn) {
    btn.classList.toggle('ring-1')
    btn.classList.toggle('ring-[#33458b]')
    btn.classList.toggle('bg-[#45464d]')

    let id = btn.dataset.id
    if (selectedGenreIds.includes(id)) {
        selectedGenreIds = selectedGenreIds.filter(data => data !== id)
    } else {
        selectedGenreIds.push(id)
    }
}

function showNotification(message) {
    const notification = document.getElementById('notification')
    const messageSpan = document.getElementById('notification-message')
    messageSpan.textContent = message

    // Show with animation
    notification.classList.remove('hidden', 'opacity-0', '-translate-y-3')
    notification.classList.add('opacity-100', 'translate-y-0')

    // Hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('opacity-100', 'translate-y-0')
        notification.classList.add('opacity-0', '-translate-y-3')

        // Fully hide after transition completes
        setTimeout(() => {
            notification.classList.add('hidden')
        }, 500)
    }, 5000)
}

finishBtn.addEventListener('click', function () {
    if (selectedGenreIds.length === 0) {
        showNotification('You should select at least one movie genre')
    } else {
        sessionStorage.setItem('selectedGenreIds', JSON.stringify(selectedGenreIds))
        window.location.href = "movies.html"
    }
})
