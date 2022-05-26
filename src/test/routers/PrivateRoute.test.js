import { mount } from "enzyme/build";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { PrivateRoute } from "../../routers/PrivateRoute";


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <span>Public Route</span>,
}));

describe('Testing <PriveateRoute />', () => {
    
    Storage.prototype.setItem = jest.fn();

    test('should display the component if is authenticated and save in local storage', () => {
        
        const contextValue = {
            user: {
                logged: true,
                name: 'Saulo'
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Components</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( wrapper.text().trim() ).toBe('Private Components');
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath','/');

    });

    test('should display the component if is authenticated and save in local storage', () => {
        
        const contextValue = {
            user: {
                logged: false,
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Components</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( wrapper.text().trim() ).toBe('Public Route');

    });

});