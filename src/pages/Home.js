import React from "react";
import Footer from "../components/Footer";
import AvailableIntern from "../components/Home/AvailableIntern";
import Banner from "../components/Home/Banner";
import Blogs from "../components/Home/Blogs";
import EnquiryNow from "../components/Home/EnquiryNow";
import LiveProject from "../components/Home/LiveProject";
import Projects from "../components/Home/Projects";
import RecentProjectPost from "../components/Home/RecentProjectPost";

const Home = () => {
  return (
    <>
      <Banner />
      <LiveProject />
      <RecentProjectPost />
      <AvailableIntern />
      <Projects />
      <Blogs />
      <EnquiryNow />
      <Footer />
    </>
  );
};

export default Home;
