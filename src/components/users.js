import React, { Component } from 'react';



class Users extends Component {
    constructor(props){
        super(props);


        this.state = {
            check1: true,
            check2: false,
            check3: false
        }
        this.onCheckChange = this.onCheckChange.bind(this)
    }

    onCheckChange(e) 
    {
        console.log(e.target.checked);
        this.setState({
            [e.target.name]: e.target.checked

        })
    }
    render() {
        return (
            <div>
                <input type="checkbox" name="check1" 
                checked={this.state.check1} onChange={this.onCheckChange} />Facebook <br />
                <input type="checkbox" name="check2" 
                checked={this.state.check2} onChange={this.onCheckChange} />Amazon <br />
                <input type="checkbox" name="check3" 
                checked={this.state.check3} onChange={this.onCheckChange} />Microsoft <br />
            </div>
        )
    }
}

export default Users;