document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const quoteText = decodeURIComponent(urlParams.get('quote') || '');
    if (quoteText) {
        const paragraphs = document.querySelectorAll('p');
        for (let p of paragraphs) {
            if (p.textContent.includes(quoteText)) {
                const rect = p.getBoundingClientRect();
                const offset = 50;
                window.scrollTo({
                    top: window.pageYOffset + rect.top - offset,
                    behavior: 'smooth'
                });
                p.classList.add('highlight');
                break;
            }
        }
    }
});