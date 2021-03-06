async function getRandom() {
    axios
        .get('https://api.punkapi.com/v2/beers/random')
        .then(function (response) {
            const data = response.data;

            for (const i of data) {

                const imageText = document.getElementsByClassName('beer-name')
                const image = document.getElementById('random')
                const imgURL = i.image_url ?? './placeholder.png'

                const textElement = document.createElement('h1')
                const textNode = document.createTextNode(`${i.name}`)
                textElement.appendChild(textNode)
                
                image.src = imgURL
                imageText.innerHTML = '';
                imageText.appendChild(textElement)


            }
            
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {});
}

getRandom();