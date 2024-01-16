import React, { useEffect } from "react";
import Blog from "../components/Admin/Blog";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import ErrorPage from "../components/Layout/ErrorPage";
// import { isAdmin } from "../shared/GlobalFunction";

const BlogPage = () => {


  return (
    <div>
      <Blog></Blog>
    </div>
  )
};

export default BlogPage;
