import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Users from './users';


class Back extends Component {

    render() {
        return (
            <div style={{
        position: 'absolute', left: '50%', top: '40%',
        transform: 'translate(-50%, -50%)'
    }}>
            <Card  bg="light" border="light" style={{ width: '20em', height: '20em'}}>
                <Card.Body>
                <Card.Title className="text-center">
                    User Input
                </Card.Title>
                <Card.Text className="text-center">
                    <Users />
                </Card.Text>

                </Card.Body>
            
            
            
            
            </Card>
            </div>

        )
    }
}



export default Back;