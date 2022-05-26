import { mount } from "enzyme/build";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));


describe('Testing <SearchScreen />', () => {
    
    test('should diplay search page', () => {
        
        const wrapper = mount( 
        <MemoryRouter initialEntries={['/search']}>
            <SearchScreen />
        </MemoryRouter>
         );

        //  expect( wrapper ).toMatchSnapshot();
         expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a Hero');

    });


    test('should search for batman', () => {
        
        const wrapper = mount( 
        <MemoryRouter initialEntries={['/search?q=batman']}>
            <SearchScreen />
        </MemoryRouter>
         );

        //  expect( wrapper ).toMatchSnapshot();
         expect( wrapper.find('input').prop('value')).toBe('batman');

    });

    test('should search for batman', () => {
        
        const q = '421';

        const wrapper = mount( 
        <MemoryRouter initialEntries={[`/search?q=${q}`]}>
            <SearchScreen />
        </MemoryRouter>
         );

        //  expect( wrapper ).toMatchSnapshot();
         expect( wrapper.find('.alert-danger').text().trim()).toBe(`No results for : ${q}`);

    });


    test('should search for batman', () => {
        

        const wrapper = mount( 
        <MemoryRouter initialEntries={['/search']}>
            <SearchScreen />
        </MemoryRouter>
         );

        wrapper.find('input').simulate('change',{
            target: {
                name: 'searchText',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( mockNavigate ).toHaveBeenCalledWith('?q=batman');

    });

});