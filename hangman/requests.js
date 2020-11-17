const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}


const getCountryDetails = async (code) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === code)

    } else {
        throw new Error('Unable to fetch countries')

    }

}


const getLocation = async () => {

    const data = await fetch("https://ipinfo.io/json?50451a220a5363")
    if (data.status === 200) {
        return data.json()


    } else {
        throw new Error('Unable to fetch location')
    }

}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountryDetails(location.country)


}
