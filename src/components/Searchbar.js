import React, { Component } from 'react';
import {Paper, TextField} from '@material-ui/core';

class Searchbar extends Component {
    state={
        searchTerm:'',
    }

    handleChange =(event) =>{
        this.setState({searchTerm:event.target.value})
    }
    handleSubmit =(event) =>{
        const {searchTerm} = this.state;
        const {onSubmit} = this.props;
        
        onSubmit(searchTerm);

        event.preventDefault();
    }
    render() {
        return (
           <Paper elevation={6} style={{padding:'25px'}}>
               <form onSubmit={this.handleSubmit}>
                   <TextField fullWidth label="Search..." onChange={this.handleChange}></TextField>
               </form>
           </Paper>
        );
    }
}

export default Searchbar;