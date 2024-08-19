export const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};
