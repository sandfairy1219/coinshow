async function getBitcoinPrice() {
    const url = 'https://api.upbit.com/v1/ticker?markets=KRW-BTC';
    const response = await fetch(url);
    const data = await response.json();
    const price = data[0].trade_price;
    const prevClose = data[0].prev_closing_price;
    const changePercent = ((price - prevClose) / prevClose) * 100;

    const formattedPrice = price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 });
    const formattedPercent = changePercent.toFixed(2);

    let percentColor = changePercent > 0 ? 'red' : (changePercent < 0 ? 'blue' : 'black');

    btcprice.innerHTML = `
        ${formattedPrice}원<br>
        `;
    btcchange.innerHTML = `
        <span style="color:${percentColor}">전일 대비: ${formattedPercent}%</span>
    `;
}

const btcprice = document.querySelector('#btcprice');
const btcchange = document.querySelector('#btcchange');
const load = document.querySelector('#load');
load.addEventListener('click', () => {
    getBitcoinPrice();
    getEthereumPrice();
});

// 5초마다 자동 새로고침
setInterval(() => {
    getBitcoinPrice();
}, 1000);
setInterval(() => {
    getEthereumPrice();
}, 1000);

// 페이지 로드시 한 번 실행
getBitcoinPrice();

async function getEthereumPrice() {
    const url = 'https://api.upbit.com/v1/ticker?markets=KRW-ETH';
    const response = await fetch(url);
    const data = await response.json();
    const price = data[0].trade_price;
    const prevClose = data[0].prev_closing_price;
    const changePercent = ((price - prevClose) / prevClose) * 100;

    const formattedPrice = price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 });
    const formattedPercent = changePercent.toFixed(2);

    let percentColor = changePercent > 0 ? 'red' : (changePercent < 0 ? 'blue' : 'black');

    ethprice.innerHTML = `
        ${formattedPrice}원<br>
        `;
    ethchange.innerHTML = `
        <span style="color:${percentColor}">전일 대비: ${formattedPercent}%</span>
    `;
}
const ethprice = document.querySelector('#ethprice');


