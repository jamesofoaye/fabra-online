import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = ({adBucket, adImageUrl}) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <form className="upload-form">
      <label className="form-label">
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar adImageUrl={adImageUrl} adBucket={adBucket} file={file} setFile={setFile} /> }
      </div>
    </form>
  );
};

export default UploadForm;
