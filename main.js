const segundero = document.getElementById("sec");
const minutero = document.getElementById("min");
const aguHora = document.getElementById("hs");
const manecillas = document.querySelector(".hand");
function fecha() {
  const ahora = new Date();
  const segundos = ahora.getSeconds();
  const secDeg = (segundos / 60) * 360 + 90;
  segundero.style.transform = `rotate(${secDeg}deg)`;

  const minutos = ahora.getMinutes();
  const minDeg = (minutos / 60) * 360 + 90;
  minutero.style.transform = `rotate(${minDeg}deg)`;

  const horas = ahora.getHours();
  const hsDeg = (horas / 60) * 360 + 90;
  aguHora.style.transform = `rotate(${hsDeg}deg)`;
}
setInterval(fecha, 1000);
