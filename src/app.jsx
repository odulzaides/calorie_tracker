'use strict';
import $ from 'jquery';
import React from 'react';
import Form from './components/form.jsx';
import Calender from './components/calender.jsx';
import axios from 'axios';



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {calender: []};

  }
  componentWillMount() {
    axios.get('http://localhost:3000/tracker')
      .then(response => this.setState({calender:response.data}));
    
  }
  render() {
    console.log(this.state.calender)
    return (
      <div>
        <Form />
        <Calender days={this.state.calender}/>
      </div>
    );
  }
}

