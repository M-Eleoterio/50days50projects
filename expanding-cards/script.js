const expand = (cardNumber) => {
  const card1 = document.querySelector(`#card-1`);
  const card2 = document.querySelector(`#card-2`);
  const card3 = document.querySelector(`#card-3`);
  const card4 = document.querySelector(`#card-4`);
  const card5 = document.querySelector(`#card-5`);

  card1.style.width = "800px";
  card2.style.width = "800px";
  card3.style.width = "800px";
  card4.style.width = "800px";
  card5.style.width = "800px";

  document.querySelector('#p1').style.fontSize = '0px'
  document.querySelector('#p2').style.fontSize = '0px'
  document.querySelector('#p3').style.fontSize = '0px'
  document.querySelector('#p4').style.fontSize = '0px'
  document.querySelector('#p5').style.fontSize = '0px'

  document.querySelector(`#card-${cardNumber}`).style.width = "6000px";
  document.querySelector(`#p${cardNumber}`).style.fontSize = "30px";
};
