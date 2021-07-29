const COUNTRY_URL = "https://restcountries.eu/rest/v2/"

//BREAK TIME UNTIL 4PM EASTERN

const main = document.createElement("main")
document.body.append(main)

const countryDiv = document.createElement("div")
countryDiv.classList.add("countryDiv")

const countryList = document.createElement("ul")
countryDiv.append(countryList)


const displayCountry = function (country){
    const li = document.createElement("li")
    const card = document.createElement("div")
    card.classList.add("card")
    // add country name to list
    li.append(card)
    countryList.append(li)

    const countryName = document.createElement("h4")
    countryName.innerHTML = country.name
    card.append(countryName)

    //add flag to list
    const flag = document.createElement("img")
    flag.src = country.flag
    flag.alt = `${country.name}'s flag`
    card.append(flag)

    const infoDiv = document.createElement("div")
    infoDiv.classList.add("infoDiv")

    const info = `
        Capital: ${country.capital}
        <br/>
        Currency: ${country.currencies[0].name}
        <br/>
        Population: ${country.population}
        <br/>
        Bordering Countries: ${country.borders}
    `
    infoDiv.innerHTML = info
    card.append(infoDiv)

    console.log(country)
    main.append(countryDiv)
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
    countryList.innerHTML = ""
    fetch(search_url)
        .then(response => response.json())
        .then(data => data.forEach(displayCountry))

    //clear the search box
    input.value = ""
}

button.addEventListener("click", handleClick)

