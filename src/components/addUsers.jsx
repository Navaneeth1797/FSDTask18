import React, { useState } from "react"; // Importing React and useState hook
import Button from "react-bootstrap/Button"; // Importing Button component from react-bootstrap
import Form from "react-bootstrap/Form"; // Importing Form component from react-bootstrap
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom
import axiosService from "../utils/usersApi"; // Importing axiosService for API requests
import { toast } from "react-toastify"; // Importing toast function from react-toastify for displaying notifications
function addUsers() {
  let navigate = useNavigate(); // Navigation function from react-router-dom
  let [name, setName] = useState(""); // State for storing name input value
  let [username, setUsername] = useState(""); // State for storing username input value
  let [email, setEmail] = useState(""); // State for storing email input value
  let [phone, setPhone] = useState(""); // State for storing phone input value
  let [website, setWebsite] = useState(""); // State for storing website input value
  let [company, setCompany] = useState(""); // State for storing company input value
  let [address, setAddress] = useState(""); // State for storing address input value

  // Submission logic
  let addUser = async () => {
    try {
      // Make a POST request to add a new users
      let res = await axiosService.post("/bookDatabase", {
        name,
        username,
        email,
        address,
        phone,
        website,
        company,
      });
      if (res.status === 201) {
        // If successful, navigate to the 'books-list' page
        navigate("/dashboard");
        toast.success("new user created"); // Display success notification
      }
    } catch (error) {
      console.log(error); // Log any errors to the console
      toast.danger("failed to create user"); // Display error notification
    }
  };

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div
          className="container-fluid"
          style={{
            backgroundImage:
              'url("https://www.cookiebot.com/en/wp-content/uploads/sites/7/2022/05/Website-tracking-compliance.png")',
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        >
          <Form>
            {/* Form fields for adding a new users */}
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "whitesmoke" }}>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "whitesmoke" }}>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "whitesmoke" }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "whitesmoke" }}>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "whitesmoke" }}>Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Website"
                onChange={(e) => setWebsite(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "whitesmoke" }}>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "whitesmoke" }}>
                Company Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Company Name"
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Group>
            {/* // Call addUser function on button click */}
            <Button variant="primary" onClick={() => addUser()}>
              Add
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default addUsers;
