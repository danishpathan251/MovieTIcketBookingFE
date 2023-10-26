import React, { useState, useEffect } from 'react';
import SecondComponent from './SecondComponent';
// import 'bootstrap/dist/css/bootstrap.min.css';

function FormComponent() {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    age: 18,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    // Load saved data from localStorage when the component loads
    const savedDataFromLocalStorage = JSON.parse(localStorage.getItem('formData'));
    if (savedDataFromLocalStorage) {
      setSavedData(savedDataFromLocalStorage);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Update the saved data state
    setSavedData([...savedData, formData]);

    // Clear the form after submission
    setFormData(initialFormData);
  };

  return (
    <>
    <div className="container mt-5">
      <h2>React Bootstrap Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="15"
            max="150"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div className="mt-3">
        <h3>Saved Data</h3>
        {/* <ul>
          {savedData.map((data, index) => (
            <li key={index}>
              Name: {data.name}, Email: {data.email}, Phone: {data.phone}, Age: {data.age}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
    <SecondComponent/>
    </>
  );
}

export default FormComponent;
