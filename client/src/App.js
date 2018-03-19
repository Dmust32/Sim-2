import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import router from './router';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      prop_name: '',
      prop_desc: '',
      address: '',
      city: '',
      state: '',
      zip: null,
      img: '',
      loan_amount: 0,
      monthly_mortgage: 0,
      desired_rent: 0
    }
  }

  render() {
    return (
      <div>
        {router}
      </div>
    );
  }
}

// mapStateToProps = (state) => {
//   return state
// }

export default App;
