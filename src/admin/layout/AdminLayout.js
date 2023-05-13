import React, { Children } from 'react';
import { AuthProvider } from '../../context/AuthContext';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { Helmet } from 'react-helmet';

function AdminLayout({
  children,
  title,
  description,
  keywords,
  author
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <meta charSet='utf-8'/>
        <meta name='description' content={description}/>
        <meta name='keywords' content={keywords} />
        <meta name='author' content={author} />
        <title>{title}</title>
      </Helmet>
      <AuthProvider>
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <main className="flex-grow">{children}</main>
        </div>
        <Footer />
      </AuthProvider>
    </div>
  );
}

AdminLayout.defaultProps = {
  title: "Mithlesh Patel Portfolio",
  description: "A Full-stack web developer",
  keywords: "Freelancer, Web-developer, Full-Stack developer",
  author: "Mithlesh Patel"
}

export default AdminLayout;
