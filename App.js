import React, { Component } from 'react';
import { WebView } from 'react-native';

class App extends Component {
  render() {
    return (
      <WebView
        useWebKit={true} // won't work in ios without this
        source={{ uri: 'https://www.youtube.com/embed/cc0mZ5RHkXs' }}  // url should be embed and not watch
        style={{ marginTop: 20 }}
      />
    );
  }
}
export default App;