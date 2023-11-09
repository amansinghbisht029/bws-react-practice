
import React from "react";
class StarWars extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loadCharacter: false,
            Name: null,
            Height: null,
            HomeWorld : null,
            image: null,
             films: [],
        }
    }
   getNewCharacter()
   {
    const randomNumber = Math.round(Math.random() * 88)
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`
   

    fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data)
            this.setState({
                Name: data.name,
                Height: data.height,
                HomeWorld: data.homeworld,
                image: data.image,
                 films:data.films,
                loadCharacter:true,
             })
            

        })
        

    
   }

    render(){
        return(
            <div>
                  {
                    this.state.loadCharacter && <div>
                        <h1>{this.state.Name}</h1>
                        <img src={this.state.image}/>
 <p>{this.state.Height} cm</p>
 <p> <a href={this.state.HomeWorld} target="blank">HomeWorld:</a>   </p>
 <ul>
 <li>{this.state.films}</li>
 </ul>
 
 

                        </div>
                  }               
  <button type="button" className="btn" onClick={() => this.getNewCharacter()}>Generate StarWars</button>
            </div>
            
        )
    }
}
export default StarWars;