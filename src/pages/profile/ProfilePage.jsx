//import FormInput from './formInput';
//import React, { useState } from 'react';
//import {toast} from 'react-toastify' ;
import './stylesheet.css';
import { useNavigate } from "react-router-dom";

export function ProfilePage()
{
  return (
    <div className='profile'>
      <div className='bio'>
      <img src="https://cc-prod.scene7.com/is/image/CCProdAuthor/FF-SEO-text-to-image-marquee-mobile-2x?$pjpeg$&jpegSize=100&wid=600"/>
      <h1>John Doe</h1>
      <p class="title">CEO & Founder, Example</p>
      <p>Harvard University</p>
      
      </div>
    </div>
  );
}