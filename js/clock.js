const clock = document.querySelector("h2#clock");

// interval
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 뒤쪽에 추가
// console.log("1".padEnd(2, "0"));

// 브라우저 로딩되면 즉시 1번 실행
getClock();
// 1초마다 실행
setInterval(getClock, 1000);

// 한 번 실행된다.
// setTimeout(sayHello, 5000);