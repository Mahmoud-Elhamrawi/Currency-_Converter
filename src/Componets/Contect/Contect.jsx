import React , { useState }  from 'react';
import imgMan from '../../imgs/man.png';
import emailjs from '@emailjs/browser';
import { clear } from '@testing-library/user-event/dist/clear';

export default function Contect() {
  const[send, setSend]= useState(false)
  setTimeout(()=>{setSend(false)},1400)
  const sendEmail = (e) => {
    e.preventDefault();


 
    emailjs.sendForm('service_nohs5ti', 'template_us4ukbd', e.target, '0xWJbZTl5x2nOcdzC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
   


   <div className="container">
    <div className="row">
      <div className="col-md-7">
         <h2 className='text-white fs-3 mt-3'>Contact With Me : </h2>


     <form onSubmit={sendEmail}>
 
            <label>Name</label>
            <input type="text" name="user_name" placeholder='Name' className='form-control my-2'/>
            <label>Email</label>
            <input type="email" name="user_email" placeholder='email' className='form-control my-2'/>
            <label>Message</label>
            <textarea name="message" className='form-control my-2 ' rows="6"  cols="6"></textarea>
            <button type="submit" onClick={()=>{setSend(true)} } className='btn btn-warning my-2  w-100 mx-auto text-white fs-2'>send</button>
               {send? <p className='text-white fs-3 bg-info py-2 text-center' >ur mesage sent will connect with you soon thanks</p>:''} 
            

       </form>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-4 mt-5">
        <img src={imgMan} alt="imgMan"  className='w-100'/>
      </div>
    </div>


   </div>

    </>
  )

}