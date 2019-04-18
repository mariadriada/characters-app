
const URL = "https://rickandmortyapi.com/api/character"

const fetchCharacters = async page => {
    const response = await fetch(`${URL}`)   
    const data = await response.json()     
    if(response.status >= 400){
        throw new Error(data.error)
    }
    return data.results
}

export { fetchCharacters }