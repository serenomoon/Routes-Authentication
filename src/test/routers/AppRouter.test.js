import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";



describe('Testing <AppRouter />', () => {
    

    test('should display the login page if isnt authenticated', () => {
        
        const contextValue = {
            user: {
                logged: false
            }
        }

        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue }>
                
                <AppRouter />
          
              </AuthContext.Provider>
         )
        
 
        //  expect( wrapper ).toMatchSnapshot();
         expect( wrapper.find('h1').text().trim() ).toBe('Login');

    });


    test('should display the Marvel page if is authenticated', () => {
        
        const contextValue = {
            user: {
                logged: true,
                name: 'Saulo'
            }
        }

        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue }>
                
                <AppRouter />
          
              </AuthContext.Provider>
         )
        
 
        //  expect( wrapper ).toMatchSnapshot();
         expect( wrapper.find('.navbar').exists() ).toBe( true );

    });

});