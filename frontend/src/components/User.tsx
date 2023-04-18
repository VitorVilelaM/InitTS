import React from 'react';

interface Iuser {
    name: string;
    email: string;
}

interface Props{
    user: Iuser;
}

const User: React.FC<Props> = ({ user}) => {
    return (
        <div>
            <strong>Nome:</ strong> {user.name}<br />
            <strong>E-mail:</ strong> {user.email}<br /><br />
        </div>
    )
};

export default User;