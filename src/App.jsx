import AppRoutes from "./routes/Routes";
import Layout from "./Layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
