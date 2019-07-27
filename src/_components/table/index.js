import React,{Component} from 'react';
import Header from './header';
import Row from './row';

export default class Table extends Component {
    state = {
        inputRow: {
          username: '',
          firstName: '',
          lastName: '',
          sex: true
        },
        rows: []
    }

    changeHandler = (event) =>{
        const {target:{value,name,type,checked}} = event;
        const {inputRow} = this.state;
        if (type === 'checkbox') {
          this.setState({inputRow: {...inputRow, [name]: checked }});
        } else {
          this.setState({inputRow: {...inputRow, [name]: value }});
        }
    }

    
    addRow = () =>{
        const {inputRow,rows} = this.state;
        if (inputRow.username && inputRow.firstName && inputRow.lastName) {
        this.setState({rows: [...rows, inputRow],inputRow: {
            username: '',
            firstName: '',
            lastName: '',
            sex: true
        }})
        }
    }

    deleteRow = () =>{

    }

    render() {
        const {rows,inputRow:{username,firstName,lastName,sex}} = this.state;
        const {changeHandler,addRow} = this;
        return <> {/* <React.Fragment> */}
          <h1>Editable Table</h1>
          <table>
            <Header
                username={username}
                firstName={firstName}
                lastName={lastName}
                sex={sex}
                addRow={addRow}
                changeHandler={changeHandler}
            />
            <tbody>
              {rows.map(row=><Row row={row} onDelete={deleteRow} />)}
            </tbody>
          </table>
        </>;
    }
}