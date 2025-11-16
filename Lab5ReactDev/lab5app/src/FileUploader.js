import React, { useState } from "react";

function FileUploader() {
  const [imageVisible, setImageVisible] = useState(false);

  const showImage = () => {
    setImageVisible((prev) => !prev);
  };

  const uploadFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log("File selected:", event.target.files[0].name);
    }
  };

  return (
    <div
      style={{ border: "1px solid white", padding: "10px", marginTop: "20px" }}
    >
      <button onClick={showImage}>
        {imageVisible ? "Hide" : "Show"} Image (showImage)
      </button>
      <div style={{ margin: "10px 0" }}>
        <label>Upload File (uploadFile): </label>
        <input type="file" onChange={uploadFile} />
      </div>
      {imageVisible && (
        <img src="https://via.placeholder.com/150" alt="placeholder" />
      )}
    </div>
  );
}
export default FileUploader;
