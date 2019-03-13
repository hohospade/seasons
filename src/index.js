import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
 constructor(props) {
    super(props);

    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            //called setstate
            this.setState({ lat: position.coords.latitude })
        }
   );
 }


 render(){
    
    return <div>Latitude: {this.state.lat}</div>
 }
}


ReactDOM.render(<App />,document.querySelector('#root'));
