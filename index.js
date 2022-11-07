const jokes = document.querySelector('#jokes');
const jokeBtn = document.querySelector('#jokeBtn');

// Promises 

// function generateJokes() {
    //    setting with header
//     const setHeaders = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com', setHeaders)
//         .then((res) => res.json())
//         .then((data) => {
//             jokes.innerHTML = data.joke;
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }

// Promise using async await
async function generateJokes() {

    try {
        const setHeaders = {
            headers: {
                Accept: "application/json"
            }
        }

        const res = await fetch('https://icanhazdadjoke.com', setHeaders)
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }catch(err){
        console.log(err);
    }
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();