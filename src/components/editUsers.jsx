import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosService from "../utils/usersApi";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify"; // Import toast from react-toastify

function editUsers() {
  // Extracting id from the URL params
  let { id } = useParams();
  // useNavigate hook for programmatic navigation
  let navigate = useNavigate();
  // State to store user data
  let [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
    phone: "",
    website: "",
    company: "",
  });

  // Fetch user data from the API when component mounts or when id changes
  useEffect(() => {
    let fetchData = async () => {
      try {
        // Fetch user data using id
        let res = await axiosService.get(`/bookDatabase/${id}`);
        // Set user data in state
        setUserData(res.data);
      } catch (error) {
        // Log error and display toast for error
        console.error("Error fetching user data:", error);
        toast.error("Failed to fetch user data");
      }
    };

    fetchData(); // Call fetchData function
  }, [id]); // useEffect depends on id

  // Handler function to update user data when input values change
  let handleChange = (e) => {
    let { name, value } = e.target;
    // Update corresponding field in userData state
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  // Handler function to update user data on submit
  let updateUser = async () => {
    try {
      // Send PUT request to update user data
      await axiosService.put(`/bookDatabase/${id}`, userData);
      // Navigate to dashboard on successful update
      navigate("/dashboard");
      // Display success toast
      toast.success("User updated successfully");
    } catch (error) {
      // Log error and display error toast
      console.error("Error updating user:", error);
      toast.error("Failed to update user");
    }
  };

  // JSX code for rendering form and UI

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
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "whitesmoke" }}>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Name"
                value={userData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "whitesmoke" }}>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter Username"
                value={userData.username}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "whitesmoke" }}>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                value={userData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "whitesmoke" }}>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Enter Your Address"
                value={userData.address}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "whitesmoke" }}>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Enter Phone"
                value={userData.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "whitesmoke" }}>Website</Form.Label>
              <Form.Control
                type="text"
                name="website"
                placeholder="Enter Website"
                value={userData.website}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "whitesmoke" }}>
                Company Name
              </Form.Label>
              <Form.Control
                type="text"
                name="company"
                placeholder="Enter Company Name"
                value={userData.company}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Button to trigger update */}
            <Button variant="primary" onClick={updateUser}>
              Update
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default editUsers;
