import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Users from './users';


class Back extends Component {

    render() {
        return (
            <div
    style={{
        position: 'absolute', left: '50%', top: '40%',
        transform: 'translate(-50%, -50%)'
    }}>
            <Card style={{ width: '20em', height: '20em'}}>
                <Card.Body>
                <Card.Title>
                    User Input
                </Card.Title>
                <Card.Text>
                    <Users />
                </Card.Text>

                </Card.Body>
            
            
            
            
            </Card>
            </div>

        )
    }
}



export default Back;