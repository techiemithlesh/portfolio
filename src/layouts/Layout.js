import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import { Helmet } from "react-helmet";


const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Helmet>
        <meta charSet='utf-8'/>
        <meta name='description' content={description}/>
        <meta name='keywords' content={keywords} />
        <meta name='author' content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

Layout.defaultProps = {
  title: "Mithlesh Patel",
  description: "A freelancer web developer having expertise in Laravel Mern stack",
  keywords: "Web development, Freelancer, PHP LARAVEL MERN NODEJS EXPRESS JS",
  author: "Mithlesh Patel"
}

export default Layout;
