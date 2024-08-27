export const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Error fetching: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};
