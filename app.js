const fetchadvice = async () => {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();
  console.log(data);
  document.getElementById('advice-id').innerHTML = `Advice #${data.slip.id}`;
  document.getElementById('advice-text').innerHTML = `"${data.slip.advice}"`;
};
fetchadvice();
