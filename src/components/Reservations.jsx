// this component will be loaded into <Home /> and will take care of fetching all the booked
// tables and create a dynamic list out of it

// for any component that needs to fetch some data and show it, you'll need a Class component

import { Component } from 'react'
// import {ListGroup} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'

// for showing an interface dynamically generated from a data fetching operation
// first and foremost you need to fetch the data and STORE IT into the state of the component
// then you can bind your interface to the state

// now our interface is successfully connected to our state; it will generate as many list items
// as elements in my reservations array.
// now our goal is just to MANAGE the reservations. How are you going to fill it up?
// it's a good practice to NOT perform a data-fetching operations BEFORE the full loading of the page
// because potentially the user can stare to a blank screen for quite some time (maybe you're in the 
// middle of the desert...)
// you want to present immediately the user with something to watch!
// after this initial loading, you're gonna fetch the data and update the interface

class Reservations extends Component {
    state = {
        reservations: [] // <-- an empty array will ALWAYS be the initial state of any array
    }

    render() {
        return (
            <>
                <h2>Booked Tables</h2>
                <ListGroup>
                    {
                        this.state.reservations.map(r => (
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </>
        )
    }
}

export default Reservations