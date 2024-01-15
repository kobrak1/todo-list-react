import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

const MainPage = () => {
  const { theme } = useTheme();
  useEffect(() => {
    document.body.style.backgroundColor = !theme ? "#ffffff" : "#333333";
  }, [theme]);
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </>
  );
};

export default MainPage;
