async function fetchData() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

    try {
        const response = await fetch("https://data.covid19india.org/v4/min/data.min.json", requestOptions);
        const responseBody = await response.json();
        document.getElementById("date").innerHTML = new Date().toLocaleDateString();
        document.getElementById("confirmed").innerHTML = responseBody.GJ.total.confirmed;
        document.getElementById("deaths").innerHTML = responseBody.GJ.total.deceased;
        document.getElementById("recovered").innerHTML = responseBody.GJ.total.recovered;
    } catch(error) {
        console.log('error', error);
    }
}
fetchData(); 