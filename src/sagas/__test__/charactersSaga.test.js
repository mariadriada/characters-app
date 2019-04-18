import { runSaga } from 'redux-saga'

import { handleCharactersLoad } from '../charactersSaga'
import * as api from '../../api'
import { setCharacters, setError } from '../../actions'


describe('When do request to Characters ', () => {

    test('Should load characters and handle them in case of success', async () => {
       
        // Dispatched actions
        const dispatchedActions = []
        // Data to test fake api request
        const mockedCharacters = [{ id:1, name:'test_img1'}, { id:2, name:'test_img2'}]        
      
        // Mock characters of truly
        api.fetchCharacters = jest.fn(() => Promise.resolve(mockedCharacters))     
        
        // Simulate store
        const fakeStore = {
            dispatch: (action) => dispatchedActions.push(action)
        }        
      
        await runSaga(fakeStore, handleCharactersLoad).done 
        // Should make one call to api   
        expect(api.fetchCharacters.mock.calls.length).toBe(1)
        // Should contains mocked characters
        expect(dispatchedActions).toContainEqual(setCharacters(mockedCharacters))
    }) 

    test('Should load error in case of fail', async () => {
       
        // Disptached actions
        const dispatchedActions = []
        // Fake error
        const error = 'Some error is throw'      
      
        // Mock characters of truly
        api.fetchCharacters = jest.fn(() => Promise.reject(error))     
        
        // Simulate store
        const fakeStore = {            
            dispatch: (action) => dispatchedActions.push(action)
        }        
      
        await runSaga(fakeStore, handleCharactersLoad).done 
        // Should make one call to api   
        expect(api.fetchCharacters.mock.calls.length).toBe(1)
        // Should contains the error
        expect(dispatchedActions).toContainEqual(setError(error))
    })
})