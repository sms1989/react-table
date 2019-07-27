import React,{Component} from 'react';
import './App.css';

class App extends Component {

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

  render() {
    const {rows,inputRow:{username,firstName,lastName,sex}} = this.state;
    return <> {/* <React.Fragment> */}
      <h1>Editable Table</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Sex</th>
            <th>Action</th>
          </tr>
          <tr>
            <td><input type="text" name="username" placeholder="Username" onChange={this.changeHandler} value={username} /></td>
            <td><input type="text" name="firstName" placeholder="First Name" onChange={this.changeHandler} value={firstName}/></td>
            <td><input type="text" name="lastName" placeholder="Last Name" onChange={this.changeHandler} value={lastName}/></td>
            <td><input type="checkbox" name="sex" checked={sex} onChange={this.changeHandler}/> </td>
            <td><button onClick={this.addRow}>Add</button></td>
          </tr>
        </thead>
        <tbody>
          {rows.map(row=><tr>
            {/* <td>{row.username}</td>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.sex ? 'Male' : 'Female' }</td> */}
            {Reflect.ownKeys(row).map(key=><td>{row[key]}</td>)}
            <td><button onClick={this.addRow}>Delete</button></td>
          </tr>)}
        </tbody>
      </table>
    </>;
  }
}

export default App;
