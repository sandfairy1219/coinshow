async function getBitcoinPrice() {
    const url = 'https://api.upbit.com/v1/ticker?markets=KRW-BTC';
    const response = await fetch(url);
    const data = await response.json();
    const price = data[0].trade_price;
    const formattedPrice = price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 });
    console.log(`현재 비트코인 가격: ${formattedPrice} 원`);
    btcprice.innerHTML = `비트코인/BTC: ${formattedPrice}원`;
}

const btcprice = document.querySelector('#btcprice');
const load = document.querySelector('#load');
load.addEventListener('click', () => {
    getBitcoinPrice();
});

setInterval(() => {
    getBitcoinPrice();
}, 1000);

// 페이지 로드시 한 번 실행
getBitcoinPrice();