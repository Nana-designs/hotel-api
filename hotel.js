let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementsByClassName("search");
searchBtn.addEventListener("click", ()=> {
    let countryName = countryInp.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '23c3877b72msh7fbd8995e46cbedp155a90jsn9f6f2ac20b08',
            'X-RapidAPI-Host': 'hotelsearch2.p.rapidapi.com'
        }
    };
    
    fetch('https://hotelsearch2.p.rapidapi.com/?location=%24%7BcountryName%7D', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    });
