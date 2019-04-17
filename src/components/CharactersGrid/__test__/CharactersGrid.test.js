
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import CharactersGrid from '../'


describe('<CharactersGrid />', () => {
    it('Render grid for characters', () => {
        const characters = shallow(<CharactersGrid />)
        expect(characters.find('.contentChatacters').find('.grid').length).toEqual(1)
    })
})