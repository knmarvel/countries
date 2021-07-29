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

const getAllCountries = function () {
fetch(COUNTRY_URL + "all")
    .then(response => response.json())
    .then(data => data
        .forEach(displayCountry))
    }

// getAllCountries()

// search
const input = document.createElement("input")
input.setAttribute(id="input", "Search Input")
main.append(input)

const button = document.createElement("button")
button.setAttribute(id="button", "Search!")
button.innerText = "Search!"
main.append(button)

const handleClick = function (event){
    event.preventDefault()
    console.log(input.value)

    //search API for input value
    let search_url = `${COUNTRY_URL}name/${input.value}`

    fetch(search_url)
        .then(response => response.json())
        .then(data => console.log(data))

    //clear the search box
    input.value = ""
}

button.addEventListener("click", handleClick)

