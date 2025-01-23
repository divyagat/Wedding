import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    ganeshaText: "|| श्री गणेशाय नमः ||",
    invitationTitle: "|| शुभ विवाह ||",
    brideName: "",
    groomName: "",
    brideParents: "",
    groomParents: "",
    weddingDate: "",
    weddingTime: "",
    weddingVenue: "",
    invitationBy: "",
    couplePhoto: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({ ...prevData, couplePhoto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const submitData = async () => {
    try {
      await axios.post("http://localhost:5000/add-patrika", formData);
      alert("Data added successfully!");
    } catch (error) {
      console.error(error);
      alert("Error adding data!");
    }
  };

  return (
    <div>
      <h1>Dashboard - Add Lagna Patrika Data</h1>
      <form>
        <input
          type="text"
          name="ganeshaText"
          placeholder="Ganesha Text"
          value={formData.ganeshaText}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="invitationTitle"
          placeholder="Invitation Title"
          value={formData.invitationTitle}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="brideName"
          placeholder="Bride's Name"
          value={formData.brideName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="groomName"
          placeholder="Groom's Name"
          value={formData.groomName}
          onChange={handleInputChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button type="button" onClick={submitData}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
