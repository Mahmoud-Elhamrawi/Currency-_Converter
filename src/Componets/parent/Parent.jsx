import React, { Component } from "react";
import Child from "./../child/Child";
import styled from './Parent.module.css'
export default class Parent extends Component {
  state = {
    userInfo: [
      {id : "1" , name:"mahmoud", age: 30 , av:true},
      {id : "2", name: "ali", age: 60 , av:true },
      {id : "3", name: "weal", age: 35 , av:false},
      {id : "4" ,name: "weal", age: 35 , av:true},
      {id : "5", name: "weal", age: 35 , av:true},
      {id : "6", name: "menna", age: 20 , av:false},
      {id : "7", name: "menna", age: 20 , av:true},
      {id : "8", name: "menna", age: 20 , av:false},

  

    ],
    term:'',
  };


 decreas =(e)=>{
   let users = [...this.state.userInfo];
   let userInd = users.indexOf(e);
   if(   users[userInd].age ===0 ){
    users[userInd].age =0 ; 
   }else{
    users[userInd].age =  users[userInd].age - 1 ;
   }
   this.setState({userInfo:users})

  }

  incese =(e)=>{
    let users = [...this.state.userInfo];
    let userInd = users.indexOf(e);
    users[userInd].age =   users[userInd].age+1;
    this.setState({userInfo:users})
   
}


  dele =(id)=>{
 
    let users = [...this.state.userInfo]
    users= users.filter((ele)=>ele.id !== id)
    this.setState({userInfo:users})
}


searchItem=(item )=>{
  let term   = item  ; 
   this.setState({term})
   console.log(term);

}
  render() {
    return (
      <>
      <input className="my-3 form-control w-50 mx-auto" placeholder="search " onKeyUp={(e)=> this.searchItem(e.target.value) } />
        <div className="container">
          <div className="row">
            {this.state.userInfo.map((ele,ind)=> <Child term={this.state.term} key={ind} ele={ele}  inc={this.incese} dec={this.decreas} dele={this.dele}/> )}
          </div> 
        </div>
      </>
    );
  }
}
