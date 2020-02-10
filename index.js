
async function fetchJSON() {
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  const response = await axios.get(url);
  const data = response.data;

  const htmlData = `
  <h1><strong>${data[0].character}</strong></h1>
      <p><strong>${data[0].quote}</strong></p>
      <img src=${data[0].image} />
      `;
  document.querySelector("#Simpsons").innerHTML = htmlData
};



fetchSimpsonsJSON();