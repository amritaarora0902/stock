import React, { Component } from 'react';
import Stock from './stock';



class Users extends Component {
    constructor(props){
        super(props);


        this.state = {
            check1: false,
            check2: false,
            check3: false,
            passer: 'my'
        }
        this.onCheckChange1 = this.onCheckChange1.bind(this)
        this.onCheckChange2 = this.onCheckChange2.bind(this)
        this.onCheckChange3 = this.onCheckChange3.bind(this)
    }

    onCheckChange1(e) 
    {
        console.log(e.target.checked);
        this.setState({
           [e.target.name]: e.target.checked,
           passer:'FB'       
        })
        
    }
    onCheckChange2(e) 
    {
        console.log(e.target.checked);
        this.setState({
           [e.target.name]: e.target.checked,
           passer: 'AMZN'
           
        })
        
        
    }
    onCheckChange3(e) 
    {
        console.log(e.target.checked);
        this.setState({
           [e.target.name]: e.target.checked,
           passer: 'MSFT'
           
        })
        
    }
    render() {
        return (
            <div>
            <div>
                <input type="checkbox" name="check1" 
                checked={this.state.check1} onChange={this.onCheckChange1.bind(this)} />Facebook <br />
                <input type="checkbox" name="check2" 
                checked={this.state.check2} onChange={this.onCheckChange2.bind(this)} />Amazon <br />
                <input type="checkbox" name="check3" 
                checked={this.state.check3} onChange={this.onCheckChange3.bind(this)} />Microsoft <br />
                
                
            </div>
            <Stock passer={this.state.passer} />
            
            </div>
        )
    }
}

export default Users;