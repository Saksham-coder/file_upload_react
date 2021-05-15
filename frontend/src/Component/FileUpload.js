import { useState } from "react";
import "./../App.css";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    event.target.files[0] && setIsFilePicked(true);
  };

  const handleSubmission = () => {
    if (!isFilePicked) return;
    const formData = new FormData();

    formData.append("File", selectedFile);
    // ALSO ADD RANDOM VALUE IF YOU WANT LIKE STRING , OBJECT OR ARRAY
    formData.append("carDetail", {
      car: "honda",
      engine: "1498 cc",
      fuel_Type: "Petrol & Diesel",
    });

    // API CALL
    fetch("http://localhost:3001/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="App">
      <input type="file" name="file" onChange={changeHandler} />
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{" "}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <div>
          <p>Select a file</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
