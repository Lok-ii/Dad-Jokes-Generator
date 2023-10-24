let button = document.querySelector("button");
let joke = document.querySelector(".joke");
const tweet = document.querySelector('.twitter');

const options = {
    method: "GET",
    headers: {
        "X-Api-Key" : "tHAS7eRVwmq/LSs0dQN+Ig==HWxnkz1RW3RIcy3q"
    }
}

button.addEventListener("click", async ()=> {
    tweet.disabled = false;
    joke.innerHTML = `<div class="📦"></div>
    <div class="📦"></div>
    <div class="📦"></div>
    <div class="📦"></div>
    <div class="📦"></div>`;
    const response = await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', options);
    let result = await response.json();

    setTimeout(() => {
        joke.innerHTML = result["0"].joke;
    }, 1200);
})



tweet.addEventListener('click', shareOnTwitter);

function shareOnTwitter() {
  const navUrl =
    'https://twitter.com/intent/tweet?text=' +
    joke.innerText;
  window.open(navUrl, '_blank');
}