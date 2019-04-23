import React from 'react';

// THIS IS BAD CODING METHOD
// let badBadBad = 2;
// setInterval(() => {
//     badBadBad++;
// }, 1000);

class Counter extends React.Component {

    // define how the instance will be created
    // including the initial state
    constructor(props) {
        // Activate the super powers from the React.Component
        super(props);

        // this.state is an object 
        // where the component stores 
        // key-value pairs
        this.state = {
            number: 0
        };
    }

    // do more setup when
    // the component gets drawn
    // to the page
    componentDidMount() {
        console.log("I am here");
        // You can NOT do this
        // this.state.number++;


        setInterval(() => {

            // Safely change state using this.setState()
            // It accepts an object with updated key/value pairs
            this.setState({
                number: this.state.number + 1
            });

        }, 100);



    }

    // define what will be drawn
    render() {
        return (
            <h1>
                {this.state.number}
            </h1>
        );
    }

}

// function Counter(props) {
//     return (

//         <h1>
//             {props.number}
//         </h1>

//     );
// }

export default Counter;