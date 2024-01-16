import React, { useState, useRef } from "react";

export default function App() {
  const [file1, setFile1] = useState(null);
  const fileInputRef = useRef(null);

  const handleDrop = (event) => {
    event.preventDefault();
    handleFile(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileInput = () => {
    const file = fileInputRef.current.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file) {
      setFile1(file);
    }
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Document</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Document 1</td>
            <td
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => fileInputRef.current.click()}
              style={{ border: "1px dashed #ccc", padding: "10px", cursor: "pointer" }}
            >
              {file1 ? (
                <div>
                  <strong>{file1.name}</strong> uploaded/dropped!
                </div>
              ) : (
                "Click or drop file here"
              )}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileInput}
              />
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}
