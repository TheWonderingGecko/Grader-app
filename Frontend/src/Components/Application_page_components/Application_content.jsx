import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../CSS/applicationPage.css'

const Application_content = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [studentID, setStudentID] = useState('')
  const [umkcEmail, setUMKCEmail] = useState('')
  const [degree, setDegree] = useState('')
  const [gpa, setGpa] = useState('')
  const [major, setMajor] = useState('')
  const [level, setLevel] = useState('')
  const [term, setTerm] = useState('')
  const [gta, setGta] = useState('')

  return (
    <div className="applicationPage-content">
      <div className="form-container">
        <form>
          <h2 className="Title">Application form</h2>
          <label>
            <h3>First Name:</h3>
          </label>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            // className={emptyFields.includes('title') ? 'error' : ''}
            required
          />

          <label>
            <h3>Last Name:</h3>
          </label>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            // className={emptyFields.includes('title') ? 'error' : ''}
            required
          />

          <label>
            <h3>Student ID:</h3>
          </label>
          <input
            type="text"
            onChange={(e) => setStudentID(e.target.value)}
            value={studentID}
            // className={emptyFields.includes('title') ? 'error' : ''}
            required
          />

          <label>
            <h3>UMKC Email:</h3>
          </label>
          <input
            type="email"
            onChange={(e) => setUMKCEmail(e.target.value)}
            value={umkcEmail}
            // className={emptyFields.includes('title') ? 'error' : ''}
            required
          />

          <label>
            <h3>Undergraduate degree (if applicable):</h3>
          </label>
          <input
            type="text"
            onChange={(e) => setDegree(e.target.value)}
            value={degree}
            // className={emptyFields.includes('title') ? 'error' : ''}
            required
          />

          <label>
            <h3>UMKC Cumulative GPA:</h3>
          </label>
          <input
            type="text"
            onChange={(e) => setGpa(e.target.value)}
            value={gpa}
            // className={emptyFields.includes('title') ? 'error' : ''}
            required
          />

          <label htmlFor="major">
            <h3>Current Major:</h3>
          </label>
          <select id="major" required>
            <option value="">--Select an option--</option>
            <option value="CS">CS</option>
            <option value="ECE">ECE</option>
            <option value="IT">IT</option>
          </select>

          <fieldset required>
            <legend>
              <h3>Current Level</h3>
            </legend>
            <label htmlFor="BS">
              <input
                type="radio"
                id="BS"
                name="Current_level"
                value="BS"
                required
              />
              BS
            </label>

            <label htmlFor="MS">
              <input
                type="radio"
                id="MS"
                name="Current_level"
                value="MS"
                required
              />
              MS
            </label>

            <label htmlFor="PHD">
              <input
                type="radio"
                id="PHD"
                name="Current_level"
                value="PHD"
                required
              />
              PhD
            </label>
          </fieldset>

          <fieldset required>
            <legend>
              <h3>What term are you applying for?</h3>
            </legend>
            <label htmlFor="Summer">
              <input
                type="radio"
                id="Summer"
                name="Term"
                value="Summer"
                required
              />
              Summer
            </label>

            <label htmlFor="Fall">
              <input type="radio" id="Fall" name="Term" value="Fall" required />
              Fall
            </label>

            <label htmlFor="Spring">
              <input
                type="radio"
                id="Spring"
                name="Term"
                value="Spring"
                required
              />
              Spring
            </label>
          </fieldset>

          <fieldset>
            <legend>
              <h3>
                Are you GTA certified or have a previous degree from US
                institute (this waves the GTA certification)?
              </h3>
            </legend>
            <label htmlFor="YES">
              <input
                type="radio"
                id="YES"
                name="GTA_CERT"
                value="YES"
                required
              />
              YES
            </label>

            <label htmlFor="NO">
              <input type="radio" id="NO" name="GTA_CERT" value="NO" required />
              NO
            </label>
          </fieldset>
          <button className="btn btn-submit"> Submit</button>
          <Link to="/">
            <strong className="home_link_app">Return to Homepage</strong>
          </Link>
        </form>
      </div>
    </div>
  )
}
export default Application_content
