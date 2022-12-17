import React, { Component } from "react";
import PureClassCompSendProps from './PureClassCompSendProps'
// class PureClassCompUseState extends Component{
//     constructor(){
//         super();
//         this.state={
//             count:0
//         }
//     }
//     render(){
//         console.log('rerendering')
//         return(
//             <div>
//                 <h1>Pure Class Componemt Use State</h1>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={()=>this.setState({count:1})}>Update count</button>
//             </div>
//         )
//     }
// }

// Pure component match the state or the component is change or not if the state is not change it stop the rerendring 
// if the state changes then its rerender 
// but in normal component it cant stop rerendering wether the state are changed or not it always rerender the comp when 
// event calls

class PureClassCompUseState extends React.PureComponent{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    render(){
        console.log('rerendering')
        return(
            <div>
                <h1>Pure Class Componemt Use State</h1>
                <h1>{this.state.count}</h1><br></br>
                <PureClassCompSendProps count={this.state.count}/>
                <button onClick={()=>this.setState({count:1})}>Update count</button>
                
            </div>
        )
    }
}
export default PureClassCompUseState