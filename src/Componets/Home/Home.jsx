import React, { useState } from 'react'
import style from './home.module.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Home() {
 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [money,setmoney]= useState(0)
  const [conversion_rates,setconversion_rates]= useState({})
  const [show,setshow]= useState(false)

  async function submitData(datas){

      let {data} = await axios.get(`https://prime.exchangerate-api.com/v5/59121a8c8b62742f9c762581/latest/${datas.Curency}`)
      console.log(data.conversion_rates);
      setmoney(datas.money);
      setconversion_rates(data.conversion_rates)
      setshow(true)
 
 }



  return (
    <>
      
 <div className ="container">
   

  <div className='d-flex justify-content-center align-items-center mb-5 py-2'>
      <i className="fa-solid fa-magnifying-glass-dollar fa-3x text-white"></i>
      <h4 className='text-white fw-bolder fs-3 text-center text-uppercase'> now ? you can know  about all currency in the world with your country curenycy </h4>
      <i className="fa-solid fa-magnifying-glass-dollar fa-3x text-white"></i>

  </div>


  <form onSubmit={handleSubmit(submitData)}>
  <div className="row border  py-3">

  

    <div className="col-md-5">
      <input {...register('money' , {required:true, pattern:/(^[0][.]{1}[0-9]{0,}[1-9]+[0-9]{0,}$)|(^[1-9]+[0-9]{0,}[.]?[0-9]{0,}$)/ })} type="number" className='form-control border-2' placeholder='Your Money' />
   {errors.money && errors.money.type === 'required' && <p className='text-danger fs-2 text-center'> required</p>}
   {errors.money && errors.money.type === 'pattern' && <p className='text-danger fs-2 text-center'> Enter valid value</p>}
    </div>
    <div className="col-md-1"></div>
    <div className="col-md-5">
    
    
         <select {...register("Curency", {required:true})} className='form-control  border-2 ' >
          <option hidden>Select Curency</option>
          <option value="EGP">Egypt</option>
          <option value="USD">Dollor</option>
          <option value="GGP">GGP</option>
          <option value="EUR">Euor</option>
          <option value="SAR">SAR</option>
          <option value="CHF">Frank</option>
         </select>
         {errors.Curency && errors.Curency.type === 'required' && <p className='text-danger fs-2 text-center'> required</p>}

    </div>
    <button disabled={errors.money && errors.money.type === 'required'} type='submit' className='btn btn-outline-info w-25 d-block mx-auto  mt-5'>Convert</button>
 
  
  </div>

  </form>
  {(show===true) ?
 <div className="showInfo  mb-3 py-5">
  <div className="card w-75 text-center mx-auto fs-1 ">
      <ul className=" d-flex justify-content-around align-items-center p-2">
        <li className="list-group-item border">{(money * conversion_rates['EGP']).toFixed(2)}  EGP</li>
        <li className="list-group-item border">{(money * conversion_rates['USD']).toFixed(2)}  USD</li>
        <li className="list-group-item border">{(money * conversion_rates['SAR']).toFixed(2)}  SAR</li>
        <li className="list-group-item border">{(money * conversion_rates['EUR']).toFixed(2)}  Euro</li>
        <li className="list-group-item border">{(money * conversion_rates['GGP']).toFixed(2)}  Sterln </li>
        <li className="list-group-item border">{(money * conversion_rates['CHF']).toFixed(2)}  Frank</li>
      </ul>
  </div>
</div>

:<div className='d-flex justify-content-center align-items-center mt-5'>
  
  <div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

  </div>} 












 </div>
    </>
  )
}
