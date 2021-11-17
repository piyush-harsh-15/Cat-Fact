fetch('https://cat-fact.herokuapp.com/facts/random')
    .then(data => data.json())
    .then(factData => {
        const factText = factData.text;
        const factElement = document.getElementById('factElement');

        factElement.innerHTML = factText;
    })