document.addEventListener('DOMContentLoaded', function() {
    const quotes = document.querySelectorAll('.quote');
    quotes.forEach(quote => {
        const symbol = document.createElement('span');
        symbol.className = 'quote-symbol';
        symbol.textContent = '“';

        const link = document.createElement('a');
        link.className = 'quote-link';
        link.href = `transcript.html?quote=${encodeURIComponent(quote.textContent.trim())}`;

        quote.parentNode.insertBefore(symbol, quote);
        quote.parentNode.insertBefore(link, quote);
        link.appendChild(quote);
    });
});