import React from 'react';

const Row = (props) =>{
    const {row,onDelete} = props;
    return <tr>
        {Reflect.ownKeys(row).map(key=><td>{row[key]}</td>)}
        <td><button onClick={onDelete}>Delete</button></td>
    </tr>
}

export default Row;