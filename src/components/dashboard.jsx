import { useState, useEffect } from "react"; // Importing useState and useEffect hooks
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for navigation
import axiosService from "../utils/usersApi"; // Importing axiosService for API requests
import Button from "react-bootstrap/Button"; // Importing Button component from react-bootstrap
import Card from "react-bootstrap/Card"; // Importing Card component from react-bootstrap
import Container from "react-bootstrap/Container"; // Importing Container component from react-bootstrap
import { toast } from "react-toastify"; // Importing toast function from react-toastify for displaying notifications
function dashboard() {
  let [users, setusers] = useState([]); // State for storing users data
  let navigate = useNavigate(); // Navigation function from react-router-dom
  let [isHover1, setIsHover1] = useState(false); // State for button hover effect

  // Function to fetch users data from the API
  let getData = async () => {
    try {
      let res = await axiosService.get("/bookDatabase");

      if (res.status === 200) {
        setusers(res.data); // Update the users state with the fetched data
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Function to handle deletion of a user
  let handeldelete = async (id) => {
    try {
      let res = await axiosService.delete(`/bookDatabase/${id}`);

      if (res.status === 200) {
        toast.success("data removal success"); // Display success notification
        // If deletion is successful, fetch the updated data
        getData();
      }
    } catch (error) {
      console.log(error);
      toast.error("data removal failed"); // Display error notification
    }
  };
  // Fetch initial data when the component mounts
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container
      fluid={true}
      style={{
        backgroundImage:
          'url("https://www.cookiebot.com/en/wp-content/uploads/sites/7/2022/05/Website-tracking-benefits.png")',
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      {/* Buttons for adding a new users */}
      <div className="d-flex justify-content-around p-3">
        <Button
          style={{ width: "7rem" }}
          className={`mt-3 ${isHover1 ? "dancing" : ""}`}
          onMouseEnter={() => setIsHover1(true)}
          onMouseLeave={() => setIsHover1(false)}
          variant="primary"
          onClick={() => navigate(`/add-users`)}
          id="add"
        >
          Add
        </Button>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {users.map((e, i) => (
          <Card
            className="card2"
            style={{
              width: "18rem",
              margin: "10px",
              maxHeight: "750px",
              overflow: "hidden",
              marginTop: "9%",
            }}
            key={i}
          >
            {/* Display users details */}
            <Card.Body>
              <Card.Title> Name:{e.name}</Card.Title>
              <Card.Text>UserName:{e.username}</Card.Text>
              <Card.Text>Email:{e.email}</Card.Text>
              <Card.Text>Address: {e.address}</Card.Text>
              <Card.Text>Phone:{e.phone}</Card.Text>
              <Card.Text>Website:{e.website}</Card.Text>

              <Card.Text>Company: {e.company}</Card.Text>
            </Card.Body>
            {/* Buttons for editing and deleting the users */}
            <div className="d-flex justify-content-around p-3">
              <Button
                style={{
                  width: "7rem",
                  backgroundColor: "#32CD32",
                  borderColor: "#32CD32",
                }}
                variant="primary"
                onClick={() => navigate(`/edit-users/${e.id}`)}
              >
                Edit
              </Button>
              &nbsp;
              <Button
                style={{
                  width: "7rem",
                  backgroundColor: "red",
                  borderColor: "salmon",
                }}
                variant="primary"
                onClick={() => handeldelete(e.id)}
              >
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default dashboard;
