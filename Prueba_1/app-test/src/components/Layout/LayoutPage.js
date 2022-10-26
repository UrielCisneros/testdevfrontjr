import React, { Fragment, useEffect } from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

//Components
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import { getUsersAction } from "features/users/users.actions";

export default function LayoutPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  return (
    <Fragment>
      <Navbar />
      <Container maxWidth="lg" sx={{ minHeight: "100vh", py: 2 }}>
        <Outlet />
      </Container>
      <Footer />
    </Fragment>
  );
}
