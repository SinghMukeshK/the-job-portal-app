
import React from 'react';
import UserService from '../service/UserService';

let user = new UserService().getUser();
export const UserContext = React.createContext(user);

const UserProvider = (props) => {
    return (
        <UserContext.Provider value={{
            name: user.name,
            email: user.email,
            mobile: user.mobile
        }}>
            {props.children}
        </UserContext.Provider >
    )
}

export default UserProvider;