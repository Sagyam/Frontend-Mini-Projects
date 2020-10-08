const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hrDeg = day.getHours() * 30;
  let minDeg = day.getMinutes() * 6;
  let secDeg = day.getSeconds() * 6;

  hrDeg = hrDeg + secDeg / 12;

  hr.style.transform = `rotateZ(${hrDeg}deg)`;
  mn.style.transform = `rotateZ(${minDeg}deg)`;
  sc.style.transform = `rotateZ(${secDeg}deg)`;
});
