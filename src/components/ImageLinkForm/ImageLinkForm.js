import React from 'react';
import "./ImageLinkForm.css";

const ImageLinkForm = ({onInputChange,onSubmit}) => {
    return (
        <div>

        <p className='f3 tc' style={{color:"#fff"}}>
            {"Face Recognition By Artificial Brain in your pictures  .Give it a try"}
        </p>
       <div className='w-70 center'>
        <div className='tc pa4 br3 shadow-5 w-70 stars'>
            <input className='f4 pa2 w-60 ' type="text" onChange={onInputChange} />
            <button className=' grow f4 link ph3 pv2 dib dark bg-light' onClick={onSubmit}>Detect</button>
        </div>
        </div>
        
        
            
        </div>
    )
}

export default ImageLinkForm
