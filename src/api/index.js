
const URL = "https://rickandmortyapi.com/api/character"

const fetchCharacters = async () => {
    const response = await fetch(`${URL}`)   
    const data = await response.json()     
    if(response.status >= 400){
        throw new Error(data.error)
    }
    return data.results
}

const fetchCharacterDetails = async id => {
    console.log('get id: ', id)

    const response = await fetch(`${URL}/${id}`)   
    const data = await response.json()  
    console.log('data', data)   
    if(response.status >= 400){
        throw new Error(data.error)
    }   
    return data
}

export { fetchCharacters, fetchCharacterDetails }