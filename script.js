fetch('https://cat-fact.herokuapp.com/facts/random')
    .then(data => data.json())
    .then(factData => {
        const factText = factData.attachments[0].text;
     const factElement = document.getElementById('factElement');

        factElement.innerHTML = factText;
    })