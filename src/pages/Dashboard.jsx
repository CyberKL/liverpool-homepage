import React, { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import SmallNav from "../components/common/SmallNav";
import Footer from "../components/common/Footer";
import { deleteUser, fetchUsers } from "../api/api";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const [scrolled, setScrolled] = useState(false);
  const [users, setUsers] = useState([]);

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getUsers = async () => {
    const users = await fetchUsers("user");
    if (users) {
      setUsers(users);
    } else {
      console.error("No users");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (userID) => {
    const response = await deleteUser(userID);
    if (response) {
      alert("User deleted");
      getUsers();
    } else {
      alert("An error occured");
    }
  };

  return (
    <div>
      <header className="sticky top-0 z-20">
        <div className="relative">
          {!scrolled && <div className="bg-red-700 h-20"></div>}
          <div className="absolute top-[60%] w-full px-20 hidden xl:block">
            <Navbar scrollValue={100} />
          </div>
          <div className="absolute top-[60%] w-full sm:px-20 px-4 block xl:hidden">
            <SmallNav />
          </div>
        </div>
      </header>
      <main>
        <div className="dark:bg-gray-900 lg:px-40 lg:flex-none flex justify-center py-40">
          <div className="max-h-[500px] overflow-y-auto lg:w-full max-w-full">
            <table className="rounded-md border-collapse min-w-full lg:w-full">
              <tr className="border-b border-black dark:border-white dark:text-white">
                <th className="py-4 px-12 text-left">#</th>
                <th className="py-4 px-12 text-left">Email</th>
                <th className="py-4 px-12">Action</th>
              </tr>
              {users
                ? users.map((user, index) => (
                    <tr key={index} className="border-b border-gray-300 dark:border-gray-600 dark:text-white">
                      <td className="py-4 px-12">{index + 1}</td>
                      <td className="py-4 px-12">{user.email}</td>
                      <td className="py-4 lg:px-12 px-3">
                        <button
                          className="bg-red-600 text-white w-full rounded-md"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </table>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
