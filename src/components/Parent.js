import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    state = {
        name: 'Steven'
    };
    
    render() {
        return (
            <div>
                <h1>Hello, {this.state.name}! How are you doing?</h1>

                <Child name={this.state.name} changeName={name => this.changeName(name)} />
                {/* new Child({ name: this.state.name }) */}
            </div>
        );
    }

    changeName(name) {
        this.setState({ name: name });
    }
}

export default Parent;