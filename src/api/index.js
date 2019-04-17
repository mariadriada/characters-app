
const URL = "https://rickandmortyapi.com/api/character"


const fetchCharacters = async page => {
    console.log('fetchCharacters')

    const response = await fetch(`${URL}`)   
    const data = await response.json()   
    console.log(data)
    if(response.status >= 400){
        throw new Error(data.errors)
    }
    return data.results
}

export { fetchCharacters }