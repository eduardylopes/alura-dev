const searchInput = document.querySelector('[data-header-input]')
searchInput.addEventListener('input', () => {

    const cards = document.querySelectorAll('[data-index]')
    const inputValue = searchInput.value.toLowerCase().trim()


    cards.forEach(card => {
        const cardTitle = card.querySelector('[data-card-title]').textContent.toLocaleLowerCase()
        const cardDescription = card.querySelector('[data-card-description]').textContent.toLocaleLowerCase()
        const cardLanguage = card.querySelector('[data-card-language]').textContent.toLocaleLowerCase()

        if (cardTitle.includes(inputValue) || cardDescription.includes(inputValue) || cardLanguage.includes(inputValue)) {
            card.style.display = 'flex'
            return
        }
        card.style.display = 'none'
    })
})