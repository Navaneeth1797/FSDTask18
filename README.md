# React + Vite

# A simple CRUD app by using Axios

1. `usersApi.js`:
   - It exports an Axios instance configured with the base URL and headers required for API requests.
   - This instance is used to make HTTP requests to the mock API.

 2.  `App.js`:
   - The main component that defines the routing for the application.
   - It uses React Router (`react-router-dom`) to define routes for different pages.
   - Routes are defined for the dashboard, adding users, editing users, and handling unknown routes.


3. `dashboard.js`:
   - Displays a list of users fetched from the API.
   - Provides options to edit or delete each user.
   - Includes logic for fetching user data and handling user deletion.

4. `addUsers.js`:
   - Allows users to add new users by filling out a form.
   - Submits the form data to the API to create a new user.
   - Displays success or error notifications using `react-toastify`.
  
5. ` editUsers.js`:
   - Provides a form for editing user data.
   - Fetches the existing user data by ID and populates the form fields.
   - Submits the updated data to the API for saving changes.
