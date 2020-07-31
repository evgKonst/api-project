const findCoordinatesForm = document.getElementById("findCoordinatesForm");
const long = document.getElementById("longitude");
const lat = document.getElementById("latitude");

findCoordinatesForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const response = await fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      "Accept": "application/json",
      "Authorization": "Token 1dece4c2c20dc44893da99091df724ac23470a82"
    },
    body: JSON.stringify({
      "query": event.target.address.value
    })
  })

  const result = await response.json()
  const historicalDiv = document.getElementById('history')

  lat.value = result.suggestions[0].data.geo_lat
  long.value = result.suggestions[0].data.geo_lon


  if (result.suggestions[0].data.history_values != null) {
    const p = document.getElementById('historyP')
    p.innerText = result.suggestions[0].data.history_values[0]
    historicalDiv.classList = 'visible d-flex justify-content-center align-items-center border border-primary mb-2 rounded mx-auto d-block w-75'
  } else {
    historicalDiv.classList = 'invisible d-flex justify-content-center position-absolute'
  }

});
