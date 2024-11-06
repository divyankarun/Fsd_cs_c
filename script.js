const API_URL = 'https://v2.jokeapi.dev/joke/Any';

async function fetchJoke() {  // Function name matches the onclick handler in HTML
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        let joke = '';
        if (data.type === 'single') {
            joke = data.joke;
        } else {
            joke = `${data.setup} - ${data.delivery}`;
        }

        document.getElementById('joke').textContent = joke;
        document.getElementById('character-count').textContent = `Character count: ${joke.length}`;
    } catch (error) {
        console.error('Error fetching joke:', error);
        document.getElementById('joke').textContent = 'Failed to load joke. Try again!';
        document.getElementById('character-count').textContent = 'Character count: 0';
    }
}

function clearJoke() {
    document.getElementById('joke').textContent = 'Press the button for a joke!';
    document.getElementById('character-count').textContent = 'Character count: 0';
}
