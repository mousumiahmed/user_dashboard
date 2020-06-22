import React from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/Latestlaunch.js';
import propTypes from 'prop-types';


 class Latestlaunches extends React.Component{
    constructor(props){   
        super(props)
            this.state={
            }
       
    }

    componentDidMount(){
      this.props.fetchPosts()
    }
 
    render(){
        console.log(this.props.latestlaunch)  
        return(
            <div className="imgcontainer fontstyle">
                <img src="https://live.staticflickr.com/65535/50009748327_93e52a451f_o.jpg" alt="Notebook" style={{width:"100%"}}></img>
                <div class="content" style={{textAlign:"center",paddingTop:"10%"}}>
                    <p>FLIGHT NUMBER  : {this.props.latestlaunch.flight_number}</p>
                    <p>MISSION NAME  :{this.props.latestlaunch.mission_name}</p>
                    <p>LAUNCH TIME {}</p>
                <p><mark>LAUNCH DATE  :{this.props.latestlaunch.launch_date_utc}</mark></p>
            </div>
        </div>            
        )
    }
}

Latestlaunches.propTypes = {
    fetchPosts:propTypes.func.isRequired,
    posts:propTypes.object.isRequired
}

const mapStateToProps = state =>  {
    return{
        loading: state.latestlaunch.loading,
        latestlaunch: state.latestlaunch.latestlaunch,
        hasErrors: state.latestlaunch.hasErrors,
    }
}
export default connect(mapStateToProps,{fetchPosts})(Latestlaunches)