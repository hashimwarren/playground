const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}


const getCountryDetails = (code) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((data) => {
        if (data.status === 200) {
            return data.json()

        } else {
            throw new Error('Unable to fetch countries')

        }

    }).then((data) => {
        return data.find((country) => country.alpha2Code === code)



    })

}


const getLocation = () => {

    return fetch("https://ipinfo.io/json?50451a220a5363").then((location) => {
        if (location.status === 200) {
            return location.json()

        } else {
            throw new Error('Unable to fetch location')

        }


    })

}