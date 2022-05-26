import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { Navbar } from "../../../components/ui/NavBar";
import { types } from "../../../types/types";


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Testing <NavBar />', () => { 

    const contextValue = {
        dispatch: jest.fn(),
        user : {
            name: 'Saulo',
            logged: true
        }
    };

    const wrapper = mount( 
    <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/']}>
            <Routes>
                <Route path='/' element={ <Navbar /> }/>
            </Routes>
        </MemoryRouter>
    </AuthContext.Provider>
     );



    test('should display correctly', () => {
        
        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Saulo');

    });

    test('should call the logout, call the navigate and the dispatch with the arguments', () => {
        
        // wrapper.find('.btn').simulate('click');
        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({ 'type': types.logout });
        expect( mockNavigate ).toHaveBeenCalledWith('/login', {replace: true});

    });

 })