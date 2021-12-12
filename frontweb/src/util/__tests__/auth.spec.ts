import { hasAnyRoles } from '../auth';
import * as TokenModule from '../token';

describe('hasAnyRoles tests', () => {

    test('should return true when empty list', () => {
       //ARRANGE
       
       //ACT
       const result = hasAnyRoles([]);
       //ASSERT
       expect(result).toEqual(true);
    });

    test('should return true when user has given role', () => {
        
        jest.spyOn(TokenModule, 'getTokenData').mockReturnValue({
            exp: 0,
            user_name: '',
            authorities: ['ROLE_ADMIN', 'ROLE_OPERATOR'],
        })
        
        //ARRANGE
        
        //ACT
        const result = hasAnyRoles(['ROLE_ADMIN']);
        //ASSERT
        expect(result).toEqual(true);
     });
});