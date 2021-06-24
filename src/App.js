import React from 'react';
import {Grid} from '@material-ui/core';
import Searchbar from './components/Searchbar';
import Videodetail from './components/Videodetail';
import Videolist from './components/Videolist';
import youtube from './api/youtube';
import './App.css';
//import Videoitem from './components/Videoitem';

class App extends  React.Component{
  state={
    videos:[],
    selectedVideo:null,
  }
  componentDidMount(){
    this.handleSubmit('react and node tutorial')
  }
  onVideoSelect =(video) =>{
    this.setState({selectedVideo:video});
  }
  handleSubmit = async (searchTerm) =>{
    const response = await youtube.get('search',{
      params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyBmg0xvY1KDOhGKoPNot8jBb0FgRYuvTWk',
        q:searchTerm
    }
    });

    this.setState({videos:response.data.items, selectedVideo:response.data.items[0]});
  }
  render(){
    const {selectedVideo,videos} = this.state;
    return (
      <div className="app">
          <Grid justify="center" container spacing={16}>
              <Grid item xs={12}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                      <Searchbar onSubmit={this.handleSubmit}/> 
                    </Grid>
                    <Grid item xs={8}>
                      <Videodetail video={selectedVideo}/>
                    </Grid>
                    <Grid item xs={4}>
                     <Videolist videos={videos} onVideoSelect={this.onVideoSelect}/>
                    </Grid>
                </Grid>
              </Grid>
          </Grid>
          </div>
    );
  }
}
export default App;
