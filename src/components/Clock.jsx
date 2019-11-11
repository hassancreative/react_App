import React, { Component } from 'react'
import AnalogClock from './AnalogClock'


class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentDate : new Date().toLocaleString()
        }
        this.updateTime()
    }
 updateTime = () => {
     setInterval(()=>{
        this.setState({
            currentDate : new Date().toLocaleString()
        })
     },1000)
 }
 


    render(){
        return(
            <div>
                {/* <h2>{ this.state.currentDate }</h2> */}
                {/* <todayTime  time = { this.state.currentDate }/> */}
           
                 <AnalogClock time={ this.state.currentDate } />
                
            </div>
        )
    }
}

export default Clock;