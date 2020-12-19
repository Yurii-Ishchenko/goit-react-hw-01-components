import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import User from './Profile/user.json'
// import Profile from './Profile/Profile'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// ReactDOM.render(<Profile avatar={User.avatar} name={User.name}/>, document.querySelector('#root'))
