import React from 'react'
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Project from '../components/Project';
import Projects from '../components/Projects';
import ContactUs from '../components/Contactus';

const Home = () => {
    return (
        <Layout>
        <Hero/>
        <Services/>
        <Projects/>
        <ContactUs/>
        </Layout>
    )
}

export default Home
