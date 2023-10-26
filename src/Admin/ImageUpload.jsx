import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select an image file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post(`${process.env.REACT_APP_BASE_URL}/public/movieImageupload`, formData)
      .then(response => {
        // Handle successful image upload here
        console.log('Image uploaded successfully:', response.data);
      })
      .catch(error => {
        // Handle error during image upload
        console.error('Error uploading image:', error);
      });
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default ImageUpload;
