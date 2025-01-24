import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    title: '',
    boyName: '',
    girlName: '',
    boyDetails: '',
    girlDetails: '',
    haldiCeremony: '',
    couplePhoto: null,
    backgroundImage: null,
    textStyles: {
      title: { color: '#000000', fontSize: '24', textAlign: 'center', margin: '10', padding: '10' },
      boyName: { color: '#000000', fontSize: '20', textAlign: 'right', margin: '10', padding: '10' },
      girlName: { color: '#000000', fontSize: '20', textAlign: 'left', margin: '10', padding: '10' },
      boyDetails: { color: '#000000', fontSize: '16', textAlign: 'right', margin: '10', padding: '10' },
      girlDetails: { color: '#000000', fontSize: '16', textAlign: 'left', margin: '10', padding: '10' },
      haldiCeremony: { color: '#000000', fontSize: '16', textAlign: 'center', margin: '10', padding: '10' },
    },
    imageStyles: {
      width: '300',
      height: 'auto',
      rotation: '0',
      alignment: 'center',
    },
  });

  const handleTextStyleChange = (section, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      textStyles: {
        ...prevData.textStyles,
        [section]: {
          ...prevData.textStyles[section],
          [name]: value,
        },
      },
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageStyleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      imageStyles: {
        ...prevData.imageStyles,
        [name]: value,
      },
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      couplePhoto: e.target.files[0],
    }));
  };

  const handleBackgroundChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      backgroundImage: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:5000/save', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Invitation saved successfully');
    } catch (error) {
      alert('Error saving invitation');
    }
  };

  return (
    <div className="App">
      <h1>Marriage Invitation Dashboard</h1>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        <div>
          <label>Title Color:</label>
          <input type="color" name="color" value={formData.textStyles.title.color} onChange={(e) => handleTextStyleChange('title', e)} />
          <label>Title Font Size:</label>
          <input type="number" name="fontSize" value={formData.textStyles.title.fontSize} onChange={(e) => handleTextStyleChange('title', e)} />
          <label>Title Alignment:</label>
          <select name="textAlign" value={formData.textStyles.title.textAlign} onChange={(e) => handleTextStyleChange('title', e)}>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>

        {/* Boy Name */}
        <label>Boy Name:</label>
        <input type="text" name="boyName" value={formData.boyName} onChange={handleChange} required />
        <div>
          <label>Boy Name Color:</label>
          <input type="color" name="color" value={formData.textStyles.boyName.color} onChange={(e) => handleTextStyleChange('boyName', e)} />
          <label>Boy Name Font Size:</label>
          <input type="number" name="fontSize" value={formData.textStyles.boyName.fontSize} onChange={(e) => handleTextStyleChange('boyName', e)} />
          <label>Boy Name Alignment:</label>
          <select name="textAlign" value={formData.textStyles.boyName.textAlign} onChange={(e) => handleTextStyleChange('boyName', e)}>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>

        {/* Boy Details */}
        <label>Boy Details:</label>
        <textarea name="boyDetails" value={formData.boyDetails} onChange={handleChange} required />
        <div>
          <label>Boy Details Color:</label>
          <input type="color" name="color" value={formData.textStyles.boyDetails.color} onChange={(e) => handleTextStyleChange('boyDetails', e)} />
          <label>Boy Details Font Size:</label>
          <input type="number" name="fontSize" value={formData.textStyles.boyDetails.fontSize} onChange={(e) => handleTextStyleChange('boyDetails', e)} />
          <label>Boy Details Alignment:</label>
          <select name="textAlign" value={formData.textStyles.boyDetails.textAlign} onChange={(e) => handleTextStyleChange('boyDetails', e)}>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>

        {/* Girl Name */}
        <label>Girl Name:</label>
        <input type="text" name="girlName" value={formData.girlName} onChange={handleChange} required />
        <div>
          <label>Girl Name Color:</label>
          <input type="color" name="color" value={formData.textStyles.girlName.color} onChange={(e) => handleTextStyleChange('girlName', e)} />
          <label>Girl Name Font Size:</label>
          <input type="number" name="fontSize" value={formData.textStyles.girlName.fontSize} onChange={(e) => handleTextStyleChange('girlName', e)} />
          <label>Girl Name Alignment:</label>
          <select name="textAlign" value={formData.textStyles.girlName.textAlign} onChange={(e) => handleTextStyleChange('girlName', e)}>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>

        {/* Girl Details */}
        <label>Girl Details:</label>
        <textarea name="girlDetails" value={formData.girlDetails} onChange={handleChange} required />
        <div>
          <label>Girl Details Color:</label>
          <input type="color" name="color" value={formData.textStyles.girlDetails.color} onChange={(e) => handleTextStyleChange('girlDetails', e)} />
          <label>Girl Details Font Size:</label>
          <input type="number" name="fontSize" value={formData.textStyles.girlDetails.fontSize} onChange={(e) => handleTextStyleChange('girlDetails', e)} />
          <label>Girl Details Alignment:</label>
          <select name="textAlign" value={formData.textStyles.girlDetails.textAlign} onChange={(e) => handleTextStyleChange('girlDetails', e)}>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>

        {/* Haldi Ceremony */}
        <label>Haldi Ceremony Details:</label>
        <textarea name="haldiCeremony" value={formData.haldiCeremony} onChange={handleChange} required />
        <div>
          <label>Haldi Ceremony Color:</label>
          <input type="color" name="color" value={formData.textStyles.haldiCeremony.color} onChange={(e) => handleTextStyleChange('haldiCeremony', e)} />
          <label>Haldi Ceremony Font Size:</label>
          <input type="number" name="fontSize" value={formData.textStyles.haldiCeremony.fontSize} onChange={(e) => handleTextStyleChange('haldiCeremony', e)} />
          <label>Haldi Ceremony Alignment:</label>
          <select name="textAlign" value={formData.textStyles.haldiCeremony.textAlign} onChange={(e) => handleTextStyleChange('haldiCeremony', e)}>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>

        {/* Image Upload */}
        <label>Upload Couple Photo:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />

        {/* Background Image Upload */}
        <label>Upload Background Image:</label>
        <input type="file" accept="image/*" onChange={handleBackgroundChange} />

        {/* Image Styling */}
        <div>
          <label>Image Width:</label>
          <input type="number" name="width" value={formData.imageStyles.width} onChange={handleImageStyleChange} />
          <label>Image Height:</label>
          <input type="number" name="height" value={formData.imageStyles.height} onChange={handleImageStyleChange} />
          <label>Image Rotation:</label>
          <input type="number" name="rotation" value={formData.imageStyles.rotation} onChange={handleImageStyleChange} />
          <label>Image Alignment:</label>
          <select name="alignment" value={formData.imageStyles.alignment} onChange={handleImageStyleChange}>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>

        <button type="submit">Save Invitation</button>
      </form>

      {/* Preview */}
      <div className="preview" style={{ backgroundImage: formData.backgroundImage ? `url(${URL.createObjectURL(formData.backgroundImage)})` : 'none', backgroundSize: 'cover', padding: '20px', borderRadius: '10px' }}>
        <h2>Preview</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ textAlign: 'left', flex: 1 }}>
            <h3 style={{
              color: formData.textStyles.girlName.color,
              fontSize: formData.textStyles.girlName.fontSize + 'px',
              textAlign: formData.textStyles.girlName.textAlign,
              margin: formData.textStyles.girlName.margin + 'px',
              padding: formData.textStyles.girlName.padding + 'px',
            }}>
              {formData.girlName}
            </h3>
            <p style={{
              color: formData.textStyles.girlDetails.color,
              fontSize: formData.textStyles.girlDetails.fontSize + 'px',
              textAlign: formData.textStyles.girlDetails.textAlign,
              margin: formData.textStyles.girlDetails.margin + 'px',
              padding: formData.textStyles.girlDetails.padding + 'px',
            }}>
              {formData.girlDetails}
            </p>
          </div>
          <div style={{ textAlign: 'right', flex: 1 }}>
            <h3 style={{
              color: formData.textStyles.boyName.color,
              fontSize: formData.textStyles.boyName.fontSize + 'px',
              textAlign: formData.textStyles.boyName.textAlign,
              margin: formData.textStyles.boyName.margin + 'px',
              padding: formData.textStyles.boyName.padding + 'px',
            }}>
              {formData.boyName}
            </h3>
            <p style={{
              color: formData.textStyles.boyDetails.color,
              fontSize: formData.textStyles.boyDetails.fontSize + 'px',
              textAlign: formData.textStyles.boyDetails.textAlign,
              margin: formData.textStyles.boyDetails.margin + 'px',
              padding: formData.textStyles.boyDetails.padding + 'px',
            }}>
              {formData.boyDetails}
            </p>
          </div>
        </div>
      
      
        <p style={{
          color: formData.textStyles.haldiCeremony.color,
          fontSize: formData.textStyles.haldiCeremony.fontSize + 'px',
          textAlign: formData.textStyles.haldiCeremony.textAlign,
          margin: formData.textStyles.haldiCeremony.margin + 'px',
          padding: formData.textStyles.haldiCeremony.padding + 'px',
        }}>
          {formData.haldiCeremony}
        </p>
      </div>
    </div>
  );
}

export default App;