const URL = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd
`;

const bitcoin = document.querySelector(".bit-price");
const ethCoin = document.querySelector(".Eth-price");
const dogeCoin = document.querySelector(".doge-price");

const getPrices = async () => {
    try{
        const response = await fetch(URL);
        const data = await response.json();
        bitcoin.innerHTML = `$ ${data.bitcoin.usd}`;
        ethCoin.innerHTML = `$ ${data.ethereum.usd}`;
        dogeCoin.innerHTML = `$ ${data.dogecoin.usd}`;
        console.log("hello");
    } catch (e) {
        console.log(e);
    }
}

getPrices();
// setInterval(getPrices, 1000);
