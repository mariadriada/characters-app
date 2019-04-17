import charactersSaga from './charactersSaga'

export default function* rootSaga(){
    yield charactersSaga()
}