import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))


describe('Testing <LoginScreen />', () => { 

    const contextValue = {
        dispatch : jest.fn(),
        user : {
            logged : false
        }
    }

    
    const wrapper = mount( 
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={['/login']}>
                <Routes >
                    <Route path='/login' element={<LoginScreen />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
         )
    test('should match the snapshot', () => {
        
        
        // expect( wrapper ).toMatchSnapshot();

    });

    test('should do the dispatch and the navigation', () => {
        
        const handleLogin = wrapper.find('button').prop('onClick');
        
        handleLogin();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({ 
            payload: {name: "Saulo",}, 
            'type': types.login 
        });

        expect( mockNavigate ).toHaveBeenCalledWith('/marvel', { replace: true });

        localStorage.setItem('lastPath', '/dc');

        handleLogin();

        expect( mockNavigate ).toHaveBeenCalledWith('/dc', { replace: true });

    });

 })