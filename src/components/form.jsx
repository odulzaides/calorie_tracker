'use strict';
import React from 'react';
import $ from 'jquery';

export default class Form extends React.Component {
    constructor (props){
        super(props);
    }
    addRecord () {
        alert("Called");
                    $.ajax({
                url: 'http://localhost:3000/tracker',
                type: 'POST',
                contenttype: 'application/json; charset=utf-8',
                data: {
                    "date": $('#date').val(),
                    "calories": $('#calories').val(),
                },
                datatype: 'JSON'
            });
    }
    render (){
        return (
            <form>
                <label>Date: </label>
                <input id="date" />
                <label>Calories </label>
                <input id="calories" />
                <label>Submit</label>

                <input type="submit" onClick={this.addRecord}/>
            </form>
        )
    }
}
