import React from 'react'  ; 
import { Link } from 'react-router-dom';
import imglogo from '../../imgs/images (1).jfif' ;
import  styles from './navbar.module.css'

export default function Navbar() {
  return (<>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="home">
     
       <img src={imglogo} alt="logo" className={styles.img_logo} />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="gallery">Gallery</Link>
        </li>
   
        <li className="nav-item">
          <Link className="nav-link" to="contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="crud">CRUD</Link>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">



          <li className="nav-item">
          <a className="nav-link" target='_blank'  href="https://www.facebook.com/profile.php?id=100001542958988"><i class="fa-brands fa-facebook"></i></a>
          </li>

          <li className="nav-item">
            <a className="nav-link" target='_blank' href="https://www.linkedin.com/in/mahmoud-rashad-elhamrawi-9761a8105/"><i class="fa-brands fa-linkedin"></i></a>
          </li>
      
          <li className="nav-item">
            <a className="nav-link" target='_blank' href="https://github.com/Mahmoud-Elhamrawi"> <i class="fa-brands fa-github"></i></a>
          </li>

</ul>


    </div>
  </div>
</nav>
    

    </>
  )
}
