import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Users from './users';


class Back extends Component {

    render() {
        return (
            <Card style={{ width: '20em'}}>
                <Card.Body>
                <Card.Title>
                    User Input
                </Card.Title>
                <Card.Text>
                    <Users />
                </Card.Text>

                </Card.Body>
            
            
            
            
            </Card>

        )
    }
}



export default Back;