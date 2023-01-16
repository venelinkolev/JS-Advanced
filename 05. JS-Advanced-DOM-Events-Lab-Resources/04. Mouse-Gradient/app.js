function attachGradientEvents() {
  let result = document.getElementById('result');
  let gradient = document.getElementById('gradient');
  gradient.addEventListener('mousemove', mouseMove);
  gradient.addEventListener('mouseout', () => {
    document.getElementById('result').textContent = '';
  });

  function mouseMove(event) {
    //debugger;
    let percentage = event.offsetX / (event.target.clientWidth - 1);
    percentage = Math.trunc(percentage * 100);

    result.textContent = percentage + '%';
  }
}
