import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Hero } from "../../../components/hero/Hero";


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Testing <Hero />', () => {
    
    test('shouldnt display any hero', () => {
        
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path='/hero' element={ <Hero /> }/>
                    <Route path='/' element={ <h1>No hero screen</h1> }/>
                </Routes>
            </MemoryRouter>
         )

        expect( wrapper.find('h1').text().trim() ).toBe('No hero screen');

    });

    test('should display a hero', () => {
        
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroId' element={ <Hero /> }/>
                    <Route path='/' element={ <h1>No hero screen</h1> }/>
                </Routes>
            </MemoryRouter>
         )

        expect( wrapper.find('.row').exists()).toBe(true);

    });

    test('should display a hero', () => {
        
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroId' element={ <Hero /> }/>
                    <Route path='/' element={ <h1>No hero screen</h1> }/>
                </Routes>
            </MemoryRouter>
         )

        wrapper.find('button').prop('onClick')();

        expect( mockNavigate ).toHaveBeenCalledWith(-1);

    });


    test('should display a hero', () => {
        
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/hero/he-man']}>
                <Routes>
                    <Route path='/hero/:heroId' element={ <Hero /> }/>
                    <Route path='/' element={ <h1>No hero screen</h1> }/>
                </Routes>
            </MemoryRouter>
         )

         expect( wrapper.text().trim() ).toBe('No hero screen');

    });
});