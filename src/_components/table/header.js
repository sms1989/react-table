import React from 'react';

const Header = (props) => {
    const {changeHandler,username,firstName,lastName,sex,addRow} = props;
    return <thead>
        <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Sex</th>
            <th>Action</th>
        </tr>
        <tr>
            <td><input type="text" name="username" placeholder="Username" onChange={changeHandler} value={username} /></td>
            <td><input type="text" name="firstName" placeholder="First Name" onChange={changeHandler} value={firstName}/></td>
            <td><input type="text" name="lastName" placeholder="Last Name" onChange={changeHandler} value={lastName}/></td>
            <td><input type="checkbox" name="sex" checked={sex} onChange={changeHandler}/> </td>
            <td><button onClick={addRow}>Add</button></td>
        </tr>
    </thead>;
}

export default Header;