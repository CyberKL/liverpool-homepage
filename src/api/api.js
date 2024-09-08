// Some functionalities here should be handled by the backend

export const apiRequest = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error fetching: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error making request: ", error);
    throw error;
  }
};

export const fetchUsers = async (role = "") => {
  try {
    const users = await apiRequest("http://localhost:3000/users");
    if (role) {
      return users.filter((user) => user.role.toLowerCase() === role);
    }
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
};

export const authentication = async (credentials) => {
  try {
    const users = await fetchUsers();
    const { email, password } = credentials;

    if (users) {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      return user ? user : null;
    } else {
      console.error("An error occurred while logging in");
    }
  } catch (error) {
    console.error("Error during authentication: ", error);
    return null;
  }
};

export const createUser = async (data = {}) => {
  try {
    const response = await apiRequest("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};

export const updateUser = async (data = {}) => {
  try {
    const token = localStorage.getItem("authToken")
    const userID = JSON.parse(token).id;
    
    // Token should be in the headers
    const response = await apiRequest(`http://localhost:3000/users/${userID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.error("Error during updating:", error);
    return null;
  }
};

export const deleteUser = async (userID) => {
  try {
    const token = localStorage.getItem("authToken")
    const role = JSON.parse(token).role;
    if (role === "admin") {
      // Token should be in the headers
      const response = await apiRequest(
        `http://localhost:3000/users/${userID}`,
        {
          method: "DELETE",
        }
      );
      return response;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error during deleting user: ", error);
    return null;
  }
};
