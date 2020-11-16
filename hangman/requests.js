const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((puzzle) => {
        if (puzzle.status === 200) {

            return puzzle.json()

        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
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