import React from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/success'); 
  };

  return (
    <div className="registration">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" required />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="gender-group">
            <label>
              <input type="radio" name="gender" value="Male" defaultChecked required /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" required /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="Other" required /> Other
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="education">Education</label>
          <select id="education" name="education">
            <option value="B.Tech/B.E.">B.Tech/B.E</option>
            <option value="M.Tech/M.E.">M.Tech/M.E</option>
            <option value="MCA">MCA</option>
            <option value="BCA">BCA</option>
            <option value="B.Pharma">B.Pharma</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
