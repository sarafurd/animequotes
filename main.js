document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value.toLowerCase();
    const url = `http://animechan.melosh.space/random/anime?title=${choice}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)


            if (data.anime && data.character && data.quote) {
                var html = `<div class="details">
                              <h2>${data.anime}</h2>
                              <h4>${data.character}</h4>
                            </div>
                            <div class="quote">
                              ${data.quote}
                            </div>
                            <br>
                            <br>`;
                result.innerHTML = html;
            } else {
                result.innerHTML = 'No product found.';
            }

            // var listItems = data.map(function(item) {
            //     return `<div class="details">
            //             <h2>` + item.anime + `</h2>
            //             <h4>` + item.character + `</h4>
            //             </div>
            //             <div class="quote">
            //             ` + item.quote + `</div>
            //             <br>
            //             <br>`;

            // })

            // result.innerHTML = listItems;

            document.querySelector('input').value = ''; // clear the input value

        }).catch(err => {
            console.log(`error ${err}`)
        })

}