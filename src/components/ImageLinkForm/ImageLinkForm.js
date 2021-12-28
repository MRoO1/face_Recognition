import React from 'react';
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
    return (
        <div>

        <p className='f3 tc' style={{color:"#fff"}}>
            {"Face Recognition By Artificial Brain in your pictures  .Give it a try"}
        </p>
       
        <div className='tc pa4 br3 shadow-5 w-60 stars center'>
            <input className='f4 pa2 w-60 ' type="text" />
            <button className='w-10 grow f4 link ph3 pv2 dib dark bg-light' >Detect</button>
        </div>

        
        
            
        </div>
    )
}

export default ImageLinkForm
