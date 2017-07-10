'use strict';
import React from 'react';
import Form from './components/form.jsx';
import Table from './components/cal_table.jsx';

let App = React.createClass({
  render : function(){
    return (
      <div>
       <Form />
       <Table />
      </div>
    );
  }
});

module.exports = App;
