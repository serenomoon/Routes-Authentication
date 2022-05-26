import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";



describe('Test authReducer', () => {
    
    test('should display the default value of state', () => {
        
        const state = authReducer({ logged: false }, {});

        expect( state ).toEqual({ logged: false });

    });

    
    test('should change the state value and display the new added parameters', () => {
        
        const action = {
            type : types.login,
            payload : {
                name: 'Saulo',
            }
        }

        const state = authReducer({ logged: false }, action );

        expect( state ).toEqual( {
            name: 'Saulo', 
            logged: true 
        });

    });


    test('should change the logged value to false', () => {
        
        const action = {
            type : types.logout
        }

        const state = authReducer({ logged: true, name: 'Saulo' }, action );

        expect( state ).toEqual( { logged: false });

    });

});