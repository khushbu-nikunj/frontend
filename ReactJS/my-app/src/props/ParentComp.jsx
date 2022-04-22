import React, { Component } from 'react'
import ChildComp from "./ChildComp"
export class ParentComp extends Component {
    mail = "Mail Delivred";
    message = {
        message: "GoodMorning",
        user:"Narsimha",
    };
    constructor(){
        super();
        this.state = {
            employee:{
                empCode: "118",
                name: "abcd",
                age: "27",
                email:"abcd@gmail.com",
                location: "Hyderabad",
                salary: 65000
            },
        };
    }
  render() {
    return (
      <div>
          <ChildComp
             employee1={this.state.employee}
             message1={this.message}
             mail={this.mail}/>
      </div>
    )
  }
}

export default ParentComp