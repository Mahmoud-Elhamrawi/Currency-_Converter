import React, { Component } from "react";
export default class Child extends Component {

  render() {
    let {name , age ,id , av} = this.props.ele;
    let {term} = this.props;
    console.log(term);
    return (
      
      <>


             {av? <div className="col-md-3 my-2" >
            <div className="layer text-center bg-success text-white " >
              <h5>name :{name}</h5>
              <h6>mark : {age}</h6>
              <p> Ok</p>
            
              <button onClick={()=>this.props.inc(this.props.ele)} className="btn btn-info me-1">Inc</button>
              <button onClick={()=>this.props.dec(this.props.ele)}  className="btn btn-success me-1">Dec</button>
              <button onClick={()=>this.props.dele(id)}  className="btn btn-danger me-1">delete</button>
            </div>
          </div>
       :
       <div className="col-md-3 my-2" >
       <div className="layer text-center bg-dark text-white" >
         <h5>name :{name}</h5>
         <h6>mark : {age}</h6>
         <p> no</p>
         <button onClick={()=>this.props.inc(this.props.ele)} className="btn btn-info me-1">Inc</button>
              <button onClick={()=>this.props.dec(this.props.ele)}  className="btn btn-success me-1">Dec</button>
              <button onClick={()=>this.props.dele(id)}  className="btn btn-danger me-1">delete</button>

  
       </div>
     </div>
       }

      {
         (term === name )?<div className="col-md-3 my-2" >
         <div className="layer text-center bg-dark text-white " >
           <h5>name :{name}</h5>
           <h6>mark : {age}</h6>
           <p> Ok</p>
         
           <button onClick={()=>this.props.inc(this.props.ele)} className="btn btn-info me-1">Inc</button>
           <button onClick={()=>this.props.dec(this.props.ele)}  className="btn btn-success me-1">Dec</button>
           <button onClick={()=>this.props.dele(id)}  className="btn btn-danger me-1">delete</button>
         </div>
       </div> 
       : ''
      }

           
      </>
    );
  }
}
