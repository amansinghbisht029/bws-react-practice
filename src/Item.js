import React from "react";
class Item extends React.Component{

    constructor(props)
    {
        super(props)
        this.state = {
            click: 0
        }
    }
    
    click() {
    console.log("Hello budy why are you clicking the text!!");
    this.setState ({
        click:this.state.click+1
    })
   } 
    render(){
        return(
            <div>

                  <h1 onClick={() => this.click()}>Hello Word from {this.props.name}</h1>
                  <span>{this.state.click} is the number of clicks</span>
            </div>
            
        )
    }
}
export default Item;