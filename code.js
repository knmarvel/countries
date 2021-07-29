const COUNTRY_URL = "https://restcountries.eu/rest/v2/"

//BREAK TIME UNTIL 4PM EASTERN

const main = document.body
const countryList = document.createElement("ul")
main.append(countryList)

const displayCountry = function (country){
    const li = document.createElement("li")
    // add country name to list
    li.innerHTML = country.name
    countryList.append(li)

    //add flag to list
    const flag = document.createElement("img")
    flag.src = country.flag
    flag.alt = `${country.name}'s flag`
    li.append(flag)
    console.log(country)
}

fetch(COUNTRY_URL + "all")
    .then(response => response.json())
    .then(data => data
        .forEach(displayCountry))
    