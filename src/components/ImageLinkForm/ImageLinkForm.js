import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className='mt5'>
      <p className='f3 tc' style={{color:"#fff"}}>
            {"Face Recognition By Artificial Brain in your pictures  .Give it a try"}
        </p>
      <div className='center mt5'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib dark bg-light'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;