import React from 'react';
import './TakeInput.css';

class TakeInput extends React.Component {
    state = {
        name: "",
        age: "",
    };

    add = (e) => {
        e.preventDefault();

        if((this.state.name === "" && this.state.age==="") || 
        (this.state.name === "" && this.state.age!=="") || 
        (this.state.name !== "" && this.state.age===""))
            {
                alert ("All the fields are mandatory!");
                return;
            }
        else if(this.state.age<='0')
        {
            alert("Age must be positive");
            return;
        }

        this.props.addDetails(this.state);
        this.setState({name:'',age:''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.add}>

                    <input 
                     type="text"
                     name="name"
                     placeholder="Name"
                     value={this.state.name}
                     onChange={(e) => 
                         {
                         this.setState({ name: e.target.value })
                         }}></input>

                    <input 
                    type="number"
                            name="age"
                            placeholder="Age"
                            value={this.state.age}
                            onChange={(e) => 
                                {
                                this.setState({ age: e.target.value })
                                }}></input>

                    <button type='submit'>Add</button>

                </form>
            </div>
        )
    }

}
export default TakeInput;
