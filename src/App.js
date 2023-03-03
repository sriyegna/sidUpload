import logo from "./assets/logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

import MuiCard from "./components/MuiCard"
function App() {
  const [state, setState] = useState({selectedFile: null})
   
  // On file select (from the pop up)
  const onFileChange = event => {
   
    // Update the state
    setState({ selectedFile: event.target.files[0] });
   
  };
   
  // On file upload (click the upload button)
  const onFileUpload = () => {
   
    // Create an object of formData
    const formData = new FormData();
   
    // Update the formData object
    formData.append(
      "media",
      state.selectedFile
    );
    formData.append(
      "key",
      "0000337837cfb1195d28ca278bc0a793"
    );
      
    // Request made to the backend api
    // Send formData object
    axios.post("https://thumbsnap.com/api/upload", formData);
  };

  return (
    <div>
    <input type="file" onChange={(e) => onFileChange(e)} />
    <button onClick={(e) => onFileUpload(e)}>
      Upload!
    </button>
</div>
  );
}

export default App;
