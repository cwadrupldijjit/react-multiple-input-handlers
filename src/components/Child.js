import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);

        
        this.state = {
            name: props.name || '',
            email: '',
            phone: '',
        };
    }
    
    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.name}
                    placeholder="name"
                    name="name"
                    onChange={(e) => this.handleChange(e)} />
                <input
                    type="text"
                    value={this.state.email}
                    placeholder="email"
                    name="email"
                    onChange={(e) => this.handleChange(e)} />
                <input
                    type="text"
                    value={this.state.phone}
                    placeholder="phone"
                    name="phone"
                    onChange={(e) => this.handleChange(e)} />
                
                <button
                    type="submit"
                    onClick={e => this.handleSubmit(e)}
                >
                    Submit
                </button>
                <hr />
                <p>The current name is "{this.state.name}"</p>
                <p>The current email is "{this.state.email}"</p>
                <p>The current phone is "{this.state.phone}"</p>
            </form>
        );
    }

    handleChange(e) {
        const value = e.target.value;
        const stateName = e.target.name;

        // if (stateName == 'email') {
        //     this.setState({
        //         email: value,
        //     });
        // }

        this.setState({
            [stateName]: value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.changeName(this.state.name);
    }
}

export default Child;