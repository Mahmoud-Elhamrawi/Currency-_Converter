import React from 'react'
import imgGallery1 from '../../imgs/g1.jfif';
import imgGallery2 from '../../imgs/g2.webp';
import imgGallery3 from '../../imgs/g3.jpg';
import imgGallery4 from '../../imgs/g4.jpg';
import imgGallery5 from '../../imgs/g5.webp';
import imgGallery6 from '../../imgs/g6.jfif';
import imgGallery7 from '../../imgs/g7.webp';
import imgGallery8 from '../../imgs/g8.jfif';
import imgGallery9 from '../../imgs/g9.jfif';
import imgGallery10 from '../../imgs/g10.jfif';
import imgGallery11 from '../../imgs/g11.jfif';
import imgGallery12 from '../../imgs/g12.png';
export default function Gallery() {
  return (  <>
      
      <div className="container">



      <div className="row">
           <div className="col-md-4">
           <div className="gallery my-3">
                <img src={imgGallery8} alt="imgGallery5" className='w-100 '/>
              </div>
           </div>
            <div className="col-md-4">
            <div className="gallery my-3">
                <img src={imgGallery9} alt="imgGallery3" className='w-100 '/>
              </div>
            </div>
            <div className="col-md-4">
            <div className="gallery my-3">
                <img src={imgGallery10} alt="imgGallery3" className='w-100 '/>
              </div>
            </div>
           </div>










           <div className="row">
            <div className="col-md-6">
              <div className="gallery my-3">
                <img src={imgGallery2} alt="imgGallery2" className='w-100 '/>
              </div>
            </div>
            <div className="col-md-6">
            <div className="gallery my-3">
                <img src={imgGallery1} alt="imgGallery1" className='w-100 '/>
              </div>
            </div>
           </div>

           <div className="row">
           <div className="col-md-4">
           <div className="gallery my-3">
                <img src={imgGallery4} alt="imgGallery4" className='w-100 '/>
              </div>
           </div>
            <div className="col-md-8">
            <div className="gallery my-3">
                <img src={imgGallery7} alt="imgGallery6" className='w-100 '/>
              </div>
            </div>
           </div>


           <div className="row">
           <div className="col-md-4">
           <div className="gallery my-3">
                <img src={imgGallery6} alt="imgGallery5" className='w-100 '/>
              </div>
           </div>
            <div className="col-md-4">
            <div className="gallery my-3">
                <img src={imgGallery5} alt="imgGallery3" className='w-100 '/>
              </div>
            </div>
            <div className="col-md-4">
            <div className="gallery my-3">
                <img src={imgGallery3} alt="imgGallery3" className='w-100 '/>
              </div>
            </div>
           </div>

           <div className="row">
            <div className="col-md-6">
              <div className="gallery my-3">
                <img src={imgGallery11} alt="imgGallery2" className='w-100 '/>
              </div>
            </div>
            <div className="col-md-6">
            <div className="gallery my-3">
                <img src={imgGallery12} alt="imgGallery1" className='w-100 '/>
              </div>
            </div>
           </div>

      </div>
      
      
      
      
      
      
      
      
      
      </>
    
  )
}
