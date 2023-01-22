import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => console.log(err)
        );
    }

    // React says we have to define render!
    render() {
        return <div>Latitude: {this.state.lat}</div>;
    }
}

export default App;
