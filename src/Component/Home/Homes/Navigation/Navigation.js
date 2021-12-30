import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <header className='tops'>
                <section>
                <nav class="navbar navbar-expand-lg  navbar-dark ">
            <div class="container">
              <a className="navbar-brand d-flex align-items-center" href="https://www.google.com/">  
                <span className=" text-white">BOTSPOT AI</span></a>
               <span>  <i class="fas fa-phone-alt text-white"></i></span>
                <i class="fas fa-search text-white m-4"></i>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse "  id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center menu-bar ">
                  <li class="nav-item">
                    {/* <a class="nav-link active" aria-current="page" href="#home">Home</a> */}
                    <Link className="nav m-3 text-white" to="/home">Home</Link>
                  </li>
                  <li class="nav-item">
                  
                 
                  </li>
                 
                 
                
                  <li class="nav-item">
                  <Link className="nav m-3 text-white" to="/myOrders">MyOrders</Link>
                  </li>
                  {/* <li class="nav-item">
                  <Link className="nav" to="/service">Services</Link>
                  </li> */}


                  <li class="nav-item">
                  <Link className="nav m-3 text-white" to="/manage">Manage </Link>
                   </li>
                  <li className="nav-item">
                  <Link className="nav m-3 text-white " to="/contact">Contact</Link>
                   </li>
                 
                
                </ul>
               
              </div>
            </div>
          </nav>
                </section>


                <section>
                   <div>
                   <h1 className='text-white'>THE SOUL OF THE WORLD</h1>
                    <h3 className='text-white'>A SIMPLE SOLUTION</h3>
                   </div>
                    <div className='designs pb-1 container'>
                      <h3></h3>
                    </div>
                   <div className='store mt-4'>
                       <h4 className='text-white'>For businesses and organizations - you can build communities and engage audiences with one easy-to-use mobile app platform.</h4>
                   </div>
                 <div className='parts container'>
                 <div className='more mb-5 mt-5 '>
                     <a className=''>Know More</a>
                     
                    </div>
                    <div className='more mb-5 mt-5 '>
                   <a className=''>Contact Us</a>
                   </div>
                 </div>

               <div className='bots container'>

               <div>
                   <h3 className='p-2'>Why Choose BOTSPOT AI? We’re so glad you asked !</h3>
                 </div>
                 <div className='mores'>
                   <a className=''>GET STARTED TODAY <i class="fas fa-long-arrow-alt-down"></i></a>
                 </div>
                 <div className='mores'>
                   <a className=''>Our Services <i class="fas fa-long-arrow-alt-down"></i></a>
                 </div>

               </div>

                 
                 
                </section>
            </header>
        </div>
    );
};

export default Navigation;