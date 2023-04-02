document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value.toLowerCase();
    const url = `https://animechan.vercel.app/api/quotes/anime?title=${choice}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            let info = data[0];
            console.log(info.anime);

            result.innerHTML = `
            
             <div class= "details">
              <h2>${info.anime}</h2>
              <h4>${info.character}</h4>
             </div>
             <div class="quote">${info.quote}</div>
            `;

            document.querySelector('input').value = ''; // clear the input value

        }).catch(err => {
            console.log(`error ${err}`)
        })

}