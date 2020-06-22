import React from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/Allaction.js';
import propTypes from 'prop-types';


 class Alllaunches extends React.Component{
    constructor(props){   
        super(props)
            this.state={
            }  
    }

    componentDidMount(){
      this.props.fetchPosts()
    }
 
    render(){
      // console.log(this.props.all)

       if (this.props.all.length) {
           return(<div>
                { this.props.all.map((val,index)=>{     
                return(
                        <div class="row mt-5" >
                            <div class="col-md-12">
                                <div class="card">
                                <div class="card-block">
                                    <h1 class="card-text namestyle float-left">{val.mission_name}</h1>
                                    <h4 class="card-title" style={{color:"black"}}>ROCKET TYPE:{val.rocket.rocket_type}</h4>
                                    <p class="card-text"style={{color:"black"}}>STATUS:{val.details}</p>
                                    <p class="card-text"style={{color:"black"}}>LAUNCH SITE :<span style={{color:"blue"}}>{val.launch_site.site_name_long}</span></p>
                                </div>
                                <div class="card-footer">
                                    <p class="card-text text-right"style={{color:"black"}}><mark>LAUNCH DATE:{val.launch_date_utc}</mark></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    ) 
                })}
           </div>)  
        }     
       else{          
        return(
            <div className="fontstyle" style={{textAlign:"center",marginTop:"20px"}}> 
                Page loaging...           
            </div>
        )
       } 
    }
}

Alllaunches.propTypes = {
    fetchPosts:propTypes.func.isRequired,
    posts:propTypes.object.isRequired
}

const mapStateToProps = state =>  {
    return{
        loading: state.all.loading,
        all: state.all.all,
        hasErrors: state.all.hasErrors,
    }
}
export default connect(mapStateToProps,{fetchPosts})(Alllaunches)