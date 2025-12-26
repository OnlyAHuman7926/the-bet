document.addEventListener('DOMContentLoaded', function() {
    const quotes = document.querySelectorAll('.quote');
    quotes.forEach(quote => {
        // Add quote symbol
        const symbol = document.createElement('span');
        symbol.className = 'quote-symbol';
        symbol.textContent = '“';

        // Create link
        const link = document.createElement('a');
        link.className = 'quote-link';
        link.href = `transcript.html?quote=${encodeURIComponent(quote.textContent.trim())}`;

        // Insert symbol before quote
        quote.parentNode.insertBefore(symbol, quote);

        // Wrap quote in link
        quote.parentNode.insertBefore(link, quote);
        link.appendChild(quote);
    });
});