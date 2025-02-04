
import React, { useState } from 'react';
import axios from 'axios';
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  const [background, setBackground] = useState(null);
  const [foreground, setForeground] = useState(null);
  const [foregroundStyles, setForegroundStyles] = useState({
    width: 200,
    height: 200,
    zoom: 1,
    margin: 0,
    align: "center",
    rotate: 0,
  });

  const [backgroundStyles, setBackgroundStyles] = useState({
    height: "100vh",
    position: "center",
  });

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      type === "background" ? setBackground(url) : setForeground(url);
    }
  };

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
      title: {
        color: "#000000",
        fontSize: "24",
        margin: { top: "10", bottom: "10", left: "10", right: "10" },
        rotation: "0",
        fontFamily: "Arial, sans-serif", // Add fontFamily
        alignment: "center",
      },
      boyName: {
        color: "#000000",
        fontSize: "24",
        margin: { top: "10", bottom: "10", left: "10", right: "10" },
        rotation: "0",
        fontFamily: "Arial, sans-serif", // Add fontFamily
        alignment: "center",
      },
      girlName: {
        color: "#000000",
        fontSize: "24",
        margin: { top: "10", bottom: "10", left: "10", right: "10" },
        rotation: "0",
        fontFamily: "Arial, sans-serif", // Add fontFamily
        alignment: "center",
      },
      boyDetails: {
        color: "#000000",
        fontSize: "24",
        margin: { top: "10", bottom: "10", left: "10", right: "10" },
        rotation: "0",
        fontFamily: "Arial, sans-serif", // Add fontFamily
        alignment: "center",
      },
      girlDetails: {
        color: "#000000",
        fontSize: "24",
        margin: { top: "10", bottom: "10", left: "10", right: "10" },
        rotation: "0",
        fontFamily: "Arial, sans-serif", // Add fontFamily
        alignment: "center",
      },
      haldiCeremony: {
        color: "#000000",
        fontSize: "24",
        margin: { top: "10", bottom: "10", left: "10", right: "10" },
        rotation: "0",
        fontFamily: "Arial, sans-serif", // Add fontFamily
        alignment: "center",
      },
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
    if (name.includes("margin")) {
      const side = name.split("-")[1]; // Extract the margin side
      setFormData((prevData) => ({
        ...prevData,
        textStyles: {
          ...prevData.textStyles,
          [section]: {
            ...prevData.textStyles[section],
            margin: {
              ...prevData.textStyles[section].margin,
              [side]: value,
            },
          },
        },
      }));
    } else {
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
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/save-style", formData);
      alert("Text styling saved!");
    } catch (error) {
      console.error(error);
      alert("Error saving data.");
    }
  };

  return (
    <>
      <div className="App">
        <h1 className='py-5'>Marriage Invitation Dashboard</h1>

        <div className="row">
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-12 col-lg-4 mb-3">
                  {/* Title Input */}
                  <label className="form-label">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-lg-8">
                  {/* Title Style Options */}
                  <div className="d-flex  align-items-center">
                    <div className="me-3">
                      <label className="form-label"> Color:</label>
                      <input
                        type="color"
                        className="form-control form-control-color"
                        name="color"
                        value={formData.textStyles.title.color}
                        onChange={(e) => handleTextStyleChange("title", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Font Size:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="fontSize"
                        value={formData.textStyles.title.fontSize}
                        onChange={(e) => handleTextStyleChange("title", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Rotation:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="rotation"
                        value={formData.textStyles.title.rotation}
                        onChange={(e) => handleTextStyleChange("title", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Font:</label>
                      <select
                        className="form-select"
                        name="fontFamily"
                        value={formData.textStyles.title.fontFamily}
                        onChange={(e) => handleTextStyleChange("title", e)}
                      >
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Times New Roman, serif">Times New Roman</option>
                        <option value="Courier New, monospace">Courier New</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Verdana, sans-serif">Verdana</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Alignment:</label>
                      <select
                        className="form-select"
                        name="alignment"
                        value={formData.textStyles.title.alignment}
                        onChange={(e) => handleTextStyleChange("title", e)}
                      >
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                {/* Individual Margin Controls */}
                {["top", "bottom", "left", "right"].map((side) => (
                  <div className="col-6 col-lg-3" key={side}>
                    <label className="form-label">
                      Margin {side.charAt(0).toUpperCase() + side.slice(1)}:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name={`margin-${side}`}
                      value={formData.textStyles.title.margin[side]}
                      onChange={(e) => handleTextStyleChange("title", e)}
                    />
                  </div>
                ))}
              </div>

              {/* Boy Name */}
              <div className="row mb-3">
                <div className="col-12 col-lg-4 mb-3">
                  {/* Boy Name Input */}
                  <label className="form-label">Boy Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="boyName"
                    value={formData.boyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-lg-8">
                  {/* Boy Name Style Options */}
                  <div className="d-flex  align-items-center">
                    <div className="me-3">
                      <label className="form-label"> Color:</label>
                      <input
                        type="color"
                        className="form-control form-control-color"
                        name="color"
                        value={formData.textStyles.boyName.color}
                        onChange={(e) => handleTextStyleChange("boyName", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Font Size:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="fontSize"
                        value={formData.textStyles.boyName.fontSize}
                        onChange={(e) => handleTextStyleChange("boyName", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Rotation:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="rotation"
                        value={formData.textStyles.boyName.rotation}
                        onChange={(e) => handleTextStyleChange("boyName", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Font:</label>
                      <select
                        className="form-select"
                        name="fontFamily"
                        value={formData.textStyles.boyName.fontFamily}
                        onChange={(e) => handleTextStyleChange("boyName", e)}
                      >
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Times New Roman, serif">Times New Roman</option>
                        <option value="Courier New, monospace">Courier New</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Verdana, sans-serif">Verdana</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Alignment:</label>
                      <select
                        className="form-select"
                        name="alignment"
                        value={formData.textStyles.boyName.alignment}
                        onChange={(e) => handleTextStyleChange("boyName", e)}
                      >
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                {/* Individual Margin Controls */}
                {["top", "bottom", "left", "right"].map((side) => (
                  <div className="col-6 col-lg-3" key={side}>
                    <label className="form-label">
                      Margin {side.charAt(0).toUpperCase() + side.slice(1)}:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name={`margin-${side}`}
                      value={formData.textStyles.boyName.margin[side]}
                      onChange={(e) => handleTextStyleChange("boyName", e)}
                    />
                  </div>
                ))}
              </div>


              {/* Boy Details */}
              <div className="row mb-3">
                <div className="col-12 col-lg-4 mb-3">
                  {/* Boy Details Input */}
                  <label className="form-label">Boy Details:</label>
                  <textarea
                    className="form-control"
                    name="boyDetails"
                    value={formData.boyDetails}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-lg-8">
                  {/* Boy Details Style Options */}
                  <div className="d-flex  align-items-center">
                    <div className="me-3">
                      <label className="form-label"> Color:</label>
                      <input
                        type="color"
                        className="form-control form-control-color"
                        name="color"
                        value={formData.textStyles.boyDetails.color}
                        onChange={(e) => handleTextStyleChange("boyDetails", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Font Size:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="fontSize"
                        value={formData.textStyles.boyDetails.fontSize}
                        onChange={(e) => handleTextStyleChange("boyDetails", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Rotation:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="rotation"
                        value={formData.textStyles.boyDetails.rotation}
                        onChange={(e) => handleTextStyleChange("boyDetails", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Font:</label>
                      <select
                        className="form-select"
                        name="fontFamily"
                        value={formData.textStyles.boyDetails.fontFamily}
                        onChange={(e) => handleTextStyleChange("boyDetails", e)}
                      >
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Times New Roman, serif">Times New Roman</option>
                        <option value="Courier New, monospace">Courier New</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Verdana, sans-serif">Verdana</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Alignment:</label>
                      <select
                        className="form-select"
                        name="alignment"
                        value={formData.textStyles.boyDetails.alignment}
                        onChange={(e) => handleTextStyleChange("boyDetails", e)}
                      >
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                {/* Individual Margin Controls */}
                {["top", "bottom", "left", "right"].map((side) => (
                  <div className="col-6 col-lg-3" key={side}>
                    <label className="form-label">
                      Margin {side.charAt(0).toUpperCase() + side.slice(1)}:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name={`margin-${side}`}
                      value={formData.textStyles.boyDetails.margin[side]}
                      onChange={(e) => handleTextStyleChange("boyDetails", e)}
                    />
                  </div>
                ))}
              </div>

              {/* Girl Name */}
              <div className="row mb-3">
                <div className="col-12 col-lg-4 mb-3">
                  {/* Girl Name Input */}
                  <label className="form-label">Girl Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="girlName"
                    value={formData.girlName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-lg-8">
                  {/* Girl Name Style Options */}
                  <div className="d-flex  align-items-center">
                    <div className="me-3">
                      <label className="form-label"> Color:</label>
                      <input
                        type="color"
                        className="form-control form-control-color"
                        name="color"
                        value={formData.textStyles.girlName.color}
                        onChange={(e) => handleTextStyleChange("girlName", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Girl Name Font Size:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="fontSize"
                        value={formData.textStyles.girlName.fontSize}
                        onChange={(e) => handleTextStyleChange("girlName", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Rotation:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="rotation"
                        value={formData.textStyles.girlName.rotation}
                        onChange={(e) => handleTextStyleChange("girlName", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Font :</label>
                      <select
                        className="form-select"
                        name="fontFamily"
                        value={formData.textStyles.girlName.fontFamily}
                        onChange={(e) => handleTextStyleChange("girlName", e)}
                      >
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Times New Roman, serif">Times New Roman</option>
                        <option value="Courier New, monospace">Courier New</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Verdana, sans-serif">Verdana</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Girl Name Alignment:</label>
                      <select
                        className="form-select"
                        name="textAlign"
                        value={formData.textStyles.girlName.textAlign}
                        onChange={(e) => handleTextStyleChange("girlName", e)}
                      >
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                {/* Individual Margin Controls */}
                {["top", "bottom", "left", "right"].map((side) => (
                  <div className="col-6 col-lg-3" key={side}>
                    <label className="form-label">
                      Margin {side.charAt(0).toUpperCase() + side.slice(1)}:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name={`margin-${side}`}
                      value={formData.textStyles.girlName.margin[side]}
                      onChange={(e) => handleTextStyleChange("girlName", e)}
                    />
                  </div>
                ))}
              </div>

              {/* Girl Details */}
              <div className="row mb-3">
                <div className="col-12 col-lg-4 mb-3">
                  {/* Girl Details Textarea */}
                  <label className="form-label">Girl Details:</label>
                  <textarea
                    className="form-control"
                    name="girlDetails"
                    value={formData.girlDetails}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-lg-8">
                  {/* Girl Details Style Options */}
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <label className="form-label"> Color:</label>
                      <input
                        type="color"
                        className="form-control form-control-color"
                        name="color"
                        value={formData.textStyles.girlDetails.color}
                        onChange={(e) => handleTextStyleChange("girlDetails", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Girl Details Font Size:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="fontSize"
                        value={formData.textStyles.girlDetails.fontSize}
                        onChange={(e) => handleTextStyleChange("girlDetails", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Rotation:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="rotation"
                        value={formData.textStyles.girlDetails.rotation}
                        onChange={(e) => handleTextStyleChange("girlDetails", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Font:</label>
                      <select
                        className="form-select"
                        name="fontFamily"
                        value={formData.textStyles.girlDetails.fontFamily}
                        onChange={(e) => handleTextStyleChange("girlDetails", e)}
                      >
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Times New Roman, serif">Times New Roman</option>
                        <option value="Courier New, monospace">Courier New</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Verdana, sans-serif">Verdana</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Girl Details Alignment:</label>
                      <select
                        className="form-select"
                        name="textAlign"
                        value={formData.textStyles.girlDetails.textAlign}
                        onChange={(e) => handleTextStyleChange("girlDetails", e)}
                      >
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                {/* Individual Margin Controls */}
                {["top", "bottom", "left", "right"].map((side) => (
                  <div className="col-6 col-lg-3" key={side}>
                    <label className="form-label">
                      Margin {side.charAt(0).toUpperCase() + side.slice(1)}:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name={`margin-${side}`}
                      value={formData.textStyles.girlDetails.margin[side]}
                      onChange={(e) => handleTextStyleChange("girlDetails", e)}
                    />
                  </div>
                ))}
              </div>

              {/* Haldi Ceremony Details */}
              <div className="row mb-3">
                <div className="col-12 col-lg-4 mb-3">
                  {/* Haldi Ceremony Textarea */}
                  <label className="form-label">Haldi Ceremony Details:</label>
                  <textarea
                    className="form-control"
                    name="haldiCeremony"
                    value={formData.haldiCeremony}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-lg-8">
                  {/* Haldi Ceremony Style Options */}
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <label className="form-label">Haldi Ceremony Color:</label>
                      <input
                        type="color"
                        className="form-control form-control-color"
                        name="color"
                        value={formData.textStyles.haldiCeremony.color}
                        onChange={(e) => handleTextStyleChange("haldiCeremony", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Haldi Ceremony Font Size:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="fontSize"
                        value={formData.textStyles.haldiCeremony.fontSize}
                        onChange={(e) => handleTextStyleChange("haldiCeremony", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Rotation:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="rotation"
                        value={formData.textStyles.haldiCeremony.rotation}
                        onChange={(e) => handleTextStyleChange("haldiCeremony", e)}
                      />
                    </div>
                    <div className="me-3">
                      <label className="form-label">Font :</label>
                      <select
                        className="form-select"
                        name="fontFamily"
                        value={formData.textStyles.haldiCeremony.fontFamily}
                        onChange={(e) => handleTextStyleChange("haldiCeremony", e)}
                      >
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Times New Roman, serif">Times New Roman</option>
                        <option value="Courier New, monospace">Courier New</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Verdana, sans-serif">Verdana</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Haldi Ceremony Alignment:</label>
                      <select
                        className="form-select"
                        name="textAlign"
                        value={formData.textStyles.haldiCeremony.textAlign}
                        onChange={(e) => handleTextStyleChange("haldiCeremony", e)}
                      >
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                {/* Individual Margin Controls */}
                {["top", "bottom", "left", "right"].map((side) => (
                  <div className="col-6 col-lg-3" key={side}>
                    <label className="form-label">
                      Margin {side.charAt(0).toUpperCase() + side.slice(1)}:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name={`margin-${side}`}
                      value={formData.textStyles.haldiCeremony.margin[side]}
                      onChange={(e) => handleTextStyleChange("haldiCeremony", e)}
                    />
                  </div>
                ))}
              </div>


              <div className="controls">
                <h2>Background Image</h2>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, "background")} />
                <label>Height:</label>
                <input
                  type="range"
                  min="300"
                  max="900"
                  value={parseInt(backgroundStyles.height)}
                  onChange={(e) => setBackgroundStyles({ ...backgroundStyles, height: `${e.target.value}px` })}
                />
                <label>Position:</label>
                <select
                  onChange={(e) => setBackgroundStyles({ ...backgroundStyles, position: e.target.value })}
                >
                  <option value="center">Center</option>
                  <option value="top">Top</option>
                  <option value="bottom">Bottom</option>
                </select>

                <h2>Foreground Image</h2>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, "foreground")} />
                <label>Width:</label>
                <input
                  type="range"
                  min="100"
                  max="400"
                  value={foregroundStyles.width}
                  onChange={(e) => setForegroundStyles({ ...foregroundStyles, width: e.target.value })}
                />
                <label>Height:</label>
                <input
                  type="range"
                  min="100"
                  max="400"
                  value={foregroundStyles.height}
                  onChange={(e) => setForegroundStyles({ ...foregroundStyles, height: e.target.value })}
                />
                <label>Zoom:</label>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={foregroundStyles.zoom}
                  onChange={(e) => setForegroundStyles({ ...foregroundStyles, zoom: e.target.value })}
                />
                <label>Margin:</label>
                <input
                  type="range"
                  min="-50"
                  max="50"
                  value={foregroundStyles.margin}
                  onChange={(e) => setForegroundStyles({ ...foregroundStyles, margin: e.target.value })}
                />
                <label>Alignment:</label>
                <select
                  onChange={(e) => setForegroundStyles({ ...foregroundStyles, align: e.target.value })}
                >
                  <option value="center">Center</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>
                <label>Rotate:</label>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  value={foregroundStyles.rotate}
                  onChange={(e) => setForegroundStyles({ ...foregroundStyles, rotate: e.target.value })}
                />
              </div>
              {/* Submit Button */}
              <button type="submit">Save Invitation</button>
            </form>
          </div>


          <div className="col-6" style={{ position: "sticky", right: "0px", top: "0px" }}>

            {/* Preview */}
            <div className="preview" style={{
              backgroundImage: background ? `url(${background})` : "none",
              height: backgroundStyles.height,
              backgroundPosition: backgroundStyles.position,
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
              <h2
                style={{
                  color: formData.textStyles.title.color,
                  fontSize: formData.textStyles.title.fontSize + "px",
                  transform: `rotate(${formData.textStyles.title.rotation}deg)`,
                  fontFamily: formData.textStyles.title.fontFamily, // Add fontFamily
                  textAlign: formData.textStyles.title.alignment,
                  marginTop: formData.textStyles.title.margin.top + "px",
                  marginBottom: formData.textStyles.title.margin.bottom + "px",
                  marginLeft: formData.textStyles.title.margin.left + "px",
                  marginRight: formData.textStyles.title.margin.right + "px",
                }}
              >
                {formData.title}
              </h2>

              <div className="couple-details" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h3
                    style={{
                      color: formData.textStyles.boyName.color,
                      fontSize: formData.textStyles.boyName.fontSize + "px",
                      transform: `rotate(${formData.textStyles.boyName.rotation}deg)`,
                      fontFamily: formData.textStyles.boyName.fontFamily, // Add fontFamily
                      textAlign: formData.textStyles.boyName.alignment,
                      marginTop: formData.textStyles.boyName.margin.top + "px",
                      marginBottom: formData.textStyles.boyName.margin.bottom + "px",
                      marginLeft: formData.textStyles.boyName.margin.left + "px",
                      marginRight: formData.textStyles.boyName.margin.right + "px",
                    }}
                  >
                    {formData.boyName}
                  </h3>
                  <p
                    style={{
                      color: formData.textStyles.boyDetails.color,
                      fontSize: formData.textStyles.boyDetails.fontSize + "px",
                      transform: `rotate(${formData.textStyles.boyDetails.rotation}deg)`,
                      fontFamily: formData.textStyles.boyDetails.fontFamily, // Add fontFamily
                      textAlign: formData.textStyles.boyDetails.alignment,
                      marginTop: formData.textStyles.boyDetails.margin.top + "px",
                      marginBottom: formData.textStyles.boyDetails.margin.bottom + "px",
                      marginLeft: formData.textStyles.boyDetails.margin.left + "px",
                      marginRight: formData.textStyles.boyDetails.margin.right + "px",
                    }}
                  >
                    {formData.boyDetails}
                  </p>
                </div>
                <div>
                  <h3
                    style={{
                      color: formData.textStyles.girlName.color,
                      fontSize: formData.textStyles.girlName.fontSize + "px",
                      transform: `rotate(${formData.textStyles.girlName.rotation}deg)`,
                      fontFamily: formData.textStyles.girlName.fontFamily, // Add fontFamily
                      textAlign: formData.textStyles.girlName.alignment,
                      marginTop: formData.textStyles.girlName.margin.top + "px",
                      marginBottom: formData.textStyles.girlName.margin.bottom + "px",
                      marginLeft: formData.textStyles.girlName.margin.left + "px",
                      marginRight: formData.textStyles.girlName.margin.right + "px",
                    }}
                  >
                    {formData.girlName}
                  </h3>
                  <p
                    style={{
                      color: formData.textStyles.girlDetails.color,
                      fontSize: formData.textStyles.girlDetails.fontSize + "px",
                      transform: `rotate(${formData.textStyles.girlDetails.rotation}deg)`,
                      fontFamily: formData.textStyles.girlDetails.fontFamily, // Add fontFamily
                      textAlign: formData.textStyles.girlDetails.alignment,
                      marginTop: formData.textStyles.girlDetails.margin.top + "px",
                      marginBottom: formData.textStyles.girlDetails.margin.bottom + "px",
                      marginLeft: formData.textStyles.girlDetails.margin.left + "px",
                      marginRight: formData.textStyles.girlDetails.margin.right + "px",
                    }}
                  >
                    {formData.girlDetails}
                  </p>
                </div>
              </div>

              {/* Haldi Ceremony */}
              <div style={{ textAlign: 'center' }}>
                <h3
                  style={{
                    color: formData.textStyles.haldiCeremony.color,
                    fontSize: formData.textStyles.haldiCeremony.fontSize + "px",
                    transform: `rotate(${formData.textStyles.haldiCeremony.rotation}deg)`,
                      fontFamily: formData.textStyles.haldiCeremony.fontFamily, // Add fontFamily
                    textAlign: formData.textStyles.haldiCeremony.alignment,
                    marginTop: formData.textStyles.haldiCeremony.margin.top + "px",
                    marginBottom: formData.textStyles.haldiCeremony.margin.bottom + "px",
                    marginLeft: formData.textStyles.haldiCeremony.margin.left + "px",
                    marginRight: formData.textStyles.haldiCeremony.margin.right + "px",
                  }}
                >
                  {formData.haldiCeremony}
                </h3>
              </div>

              {foreground && (
                <img
                  src={foreground}
                  alt="Foreground"
                  className="foreground"
                  style={{
                    width: `${foregroundStyles.width}px`,
                    height: `${foregroundStyles.height}px`,
                    transform: `scale(${foregroundStyles.zoom}) rotate(${foregroundStyles.rotate}deg)`,
                    margin: `${foregroundStyles.margin}px`,
                    alignSelf: foregroundStyles.align === "center" ? "center" : foregroundStyles.align,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
