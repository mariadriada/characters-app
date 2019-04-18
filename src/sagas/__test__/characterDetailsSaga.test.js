import { runSaga } from 'redux-saga'

import { handleCharacterDetailsRequest } from '../characterDetailsSaga'
import * as api from '../../api'
import { loadCharacterDetails, setCharacterDetails, setCharacterDetailsError } from '../../actions'

describe('When do request to Character details ', () => {

    test('Should load character details and handle them in case of success', async () => {

        // Dispatched actions
        const dispatchedActions = []
        // Data to test fake api request
        const fakeId = 12
        const fakeDetails = { id:12, name:'name_test1' }
        const mockedDetails = fakeDetails 
        
         // Mock characters of truly
        api.fetchCharacterDetails = jest.fn(() => Promise.resolve(mockedDetails));

        // Simulate store
        const fakeStore = {
            dispatch: action => dispatchedActions.push(action),
        };

        await runSaga(fakeStore, handleCharacterDetailsRequest, fakeId).done;

        // Should have the fake id
        expect(dispatchedActions).toContainEqual(loadCharacterDetails(fakeId));
        // Should make one call to api  
        expect(api.fetchCharacterDetails.mock.calls.length).toBe(1);
        // Should contains mocked characters
        expect(dispatchedActions).toContainEqual(
            setCharacterDetails(fakeId, fakeDetails),
        );
    }) 

    test('Should be three attempts and load error in case of fail', async () => {
       
        // Dispatched actions
        const dispatchedActions = []
        // Fake error
        const error = 'Api Server is down'   
        const fakeId = 12
      
        // Mock error
        api.fetchCharacterDetails = jest.fn(() => Promise.reject())     
        
        // Simulate store
        const fakeStore = {            
            dispatch: (action) => dispatchedActions.push(action)
        }        
      
        await runSaga(fakeStore, handleCharacterDetailsRequest, error).toPromise() 
        // Should make three calls to api  
        expect(api.fetchCharacterDetails.mock.calls.length).toBe(3);
        // Should contains the error
        expect(dispatchedActions).toContainEqual(setCharacterDetailsError(error));
    })
})