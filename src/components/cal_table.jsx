import React from 'react';
import $ from 'jquery';

export default class Table extends React.Component {
    constructor (props){
        super(props);

        this.url = "http://localhost:3000/tracker";
        this.getData();
    }
    getData (){
        $.getJSON(this.url, function(data){
            console.log(data);
        })
    }
    render(){

        return(
            <Table></Table>
        )
    }
}