import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";


describe('Testing <DashboradRoutes />', () => { 

    const contextValue = {
        user : {
            logged : true,
            name: 'Saulo'
        }
    };

    test('should display the users name in navbar and display the default route', () => {
        
        const wrapper = mount( 
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={ ['/'] } >
                <DashboardRoutes />
            </MemoryRouter>
        </AuthContext.Provider>
         )

        //  expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Saulo');
        expect( wrapper.find('h1').text().trim() ).toBe('MarvelScreen');


    });


    test('should display the dc route', () => {
        
        const wrapper = mount( 
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={ ['/dc'] } >
                <DashboardRoutes />
            </MemoryRouter>
        </AuthContext.Provider>
         )

        //  expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe('DcScreen');


    });

 })