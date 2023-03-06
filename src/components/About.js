import React, { useState } from 'react'

export default function About(props) {

  return (
     <div className='container' style ={{color:props.mode === 'dark'?'white':'black'}}>
      <h2 style ={{color:props.mode === 'dark'?'white': '#042745'}}>About Us</h2>
      <p>Welcome to TextUtils, a free online text manipulation tool that allows you to quickly and easily format and transform text in a variety of ways.</p>
  
      <p>Our mission is to provide a simple yet powerful tool that helps people save time and increase productivity when working with text. Whether you need to convert text to uppercase or lowercase, remove extra spaces or line breaks, or perform more advanced operations such as URL encoding or decoding, TextUtils has got you covered.</p>
      
      <p>TextUtils was built using a combination of HTML, CSS, and JavaScript on the frontend. We also make use of popular libraries and frameworks such as Bootstrap and ReactJs to create a seamless and user-friendly experience for our users.</p>

      <p>At TextUtils, we are committed to providing a fast, reliable, and secure service to our users. We take user privacy and data security seriously, and we regularly update our systems and protocols to ensure that user data is kept safe and secure.</p>

      <p>We hope that you find TextUtils useful and that it helps make your work with text easier and more efficient. If you have any feedback, suggestions, or issues to report, please don't hesitate to get in touch with us via our contact form or email us directly at support@textutils.com.</p>

      <p>Thank you for choosing TextUtils!</p>
    </div>
  )
}
