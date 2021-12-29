import './App.css';
import React,{Component} from "react";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from "react-tsparticles";
import { particles_data } from './components/Particles_Data';
import Clarifai from "clarifai";




// const app = new Clarifai.App({
//  apiKey: 'c2988c7ccb1e444e85cb0191ae6eb977'
// });
const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "m39wqlzw3z40",
		"app_id": "2c72441d67f140719a3e12328956d5d7"
	},
  "inputs": [
    {
      "data": {
        "image": {
          "url": "https://samples.clarifai.com/metro-north.jpg"
        }
      }
    }
  ]
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key c2988c7ccb1e444e85cb0191ae6eb977'
  },
  body: raw
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id



class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
    }
  }
  // Input
  onInputChange =(e)=>{
      console.log(e.target.value);
  }

  // button
  onSubmit =()=>{
    console.log("clicked");
    // app.models
    // .predict(
    //   Clarifai.FACE_DETECT_MODEL,
    //   "https://samples.clarifai.com/metro-north.jpg")
    // .then(
    // function(response) {
    // // do something with response
    // console.log(response);
    // },
    // function(err) {// there was an error
    // }
    //   );
    fetch("https://api.clarifai.com/v2/models/f76196b43bbd45c99b4f3cd8e8b40a8a/outputs", requestOptions)
  .then(response => response.text())
  .then(result => console.log(JSON.parse(result, null, 2).outputs[0].data))
  .catch(error => console.log('error', error));

  }

  render(){
    return (
    <div >
    {/* <Particles 
              params={particlesOptions} />   */}
      <Particles className='particles'
      id="tsparticles" 
      options={particles_data}
    />
      <Navigation/>
       <Logo/>
       <Rank/>
       {/* (this) cus onInputChange is a part of the class */}
      <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onSubmit={this.onSubmit}/>
     {/* <Facerecognition/> */}
    </div>
  );
  }
}

export default App;
