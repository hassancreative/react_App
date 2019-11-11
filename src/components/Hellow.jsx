import React, { Component } from 'react';

class Hellow extends Component{
    constructor(props){
        super(props);

         console.log( this.props)
    }
    componentDidMount(){
        // console.log(  this.props )
    }

      
     


    render(){
        return(
            <div>
                        {
                             this.props.link
                        }
            </div>
        )
    }
}

export default Hellow;