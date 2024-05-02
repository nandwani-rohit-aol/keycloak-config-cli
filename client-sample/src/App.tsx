import { useEffect } from 'react'
import './App.css'
import { keycloak } from './authenticate'
function App() {
  useEffect(() => {
    fetch("http://127.0.0.1:3110/", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${keycloak.token}`
      }
    }).then(res => res.json()).then(body => console.log(JSON.stringify(body, null, 2)))

  }, [])
  return (
    <>
      <label htmlFor='role' style={{ marginRight: "20px" }}>Who's there ?</label>
      <select name="role" id="role" style={{ marginBottom: "20px" }}>
        {(keycloak.idTokenParsed?.role as string[]).filter(role => role.substring(0, 4) === "mvp_").map(role => <option value={role} >{role}</option>)}
      </select>
      <div>Access to What ?</div>

      <ul>
        <li>Create Course</li>
        <li>Create Old Course</li>
        <li>Search Course</li>
        <li>View Course</li>
        <li>Edit Course</li>
        <li>Copy Course</li>
        <li>Cancel Course</li>
        <li>Undo Cancel Course</li>
        <li>Share Course</li>
        <li>Assisted Register Course with Credit Card</li>
        <li>Assisted Register Course with Payment Link</li>
        <li>Assisted Register Course with Offline Cash/Check</li>
        <li>View Course Participant List</li>
        <li>Upload Course Expense Receipt</li>
        <li>View Course Participant Registration Details</li>
        <li>View Course Payment</li>
        <li>Edit Course Payment</li>
        <li>Edit Course Registration</li>
        <li>Print Course Registration Form</li>
        <li>Track Course Attendance Status</li>
        <li>Find Course Transfer</li>
        <li>Request Course Transfer</li>
        <li>Approve/Reject Course Transfer</li>
        <li>Transfer Course Participant</li>
        <li>Request Course Refund</li>
        <li>Approve/Reject Course Refund</li>
        <li>Issue Course Refund</li>
        <li>Export Course Participant List to CSV</li>
        <li>Export Course Participant List to Excel</li>
        <li>Manage Course Reminder Email</li>
        <li>Search Course Transaction</li>
        <li>Create Course Discount Code</li>
        <li>View Course Discount Code</li>
        <li>Submit Course Accounting Form</li>
        <li>View Course Accounting Form</li>
        <li>Print Course Accounting Form</li>
        <li>Approve/Reject Course Accounting Form</li>
      </ul>

    </>
  )
}

export default App
