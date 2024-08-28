export const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Error fetching: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

export const authentication = (data = {}) => {
  try {
    const response = fetchData("http://localhost:3000/users", data);
    return response;
  } catch (error) {
    console.error("Error during authentication:", error);
    return null;
  }
};
