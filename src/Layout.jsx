import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Link to="home">Home</Link> | {" "}
      <Link to="insert">Insert</Link> |{" "}
      <Link to="display">Display</Link> |{" "}
      <Link to="update">Update</Link> |{" "}
      <Link to="search">Search</Link> |{" "}
      <Link to="contact">Contactus</Link> 

      <hr size="3" color="blue" />

      <Outlet/>

      <hr size="3" color="blue" />

      www.mycompany.com all rights reserved
    </>
  );
};

export default Layout;