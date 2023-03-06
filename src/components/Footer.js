import React from 'react'

const Footer = (props) => {
  return (
    <div className='pt-2 pb-2' style ={{color:props.mode === 'dark'?'white':'black'}}>
        <div className='container text-center text md left '>
            <h2>© 2023 Browserling Inc. All rights reserved.</h2>
        </div>
    </div>
  )
}

export default Footer
