const url = 'https://programming-memes-images.p.rapidapi.com/v1/memes';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '80c5c0aa5emshe67de439f2227b7p1093a7jsn9c76d40b3aa7',
		'x-rapidapi-host': 'programming-memes-images.p.rapidapi.com'
	}
};



const memeBox =document.getElementById('memeBox');
const nextBtn =document.getElementById('nextBtn');

async function loadMeme(){
    try {
        memeBox.innerHTML = "<h3>Loading...</h3>";

        const response = await fetch(url, options);

        const result = await response.json();
        console.log(result);

    

        const randomMeme= result[Math.floor(Math.random() * result.length)];

        memeBox.innerHTML = `
            <img src=${randomMeme.image} alt="meme" />
        `;

    } catch (error) {
        memeBox.innerHTML = "<h3>Some error happened, try again later</h3>";
        console.error(error);
    }
}

loadMeme();


nextBtn.addEventListener('click', loadMeme);