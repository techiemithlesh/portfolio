import React, { useEffect,useState } from 'react'
import './About.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import  { urlFor, client } from '../../clients';
// const abouts = [
//   {tittle: 'Web development', description: 'I am a goog web developer', imgUrl: images.about01},
//   {tittle: 'Digital Marketing', description: 'I am a goog web developer', imgUrl: images.about02 },
//   {tittle: 'Search Engine Optimization', description: 'I am a goog web developer', imgUrl: images.about03},
//   {tittle: 'Web Animations', description: 'I am a goog web developer', imgUrl: images.about04},
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

 useEffect(() => {
  const query = '*[_type == "abouts"]';

  client.fetch(query).then((data) => {
    setAbouts(data);
  });
}, []);

  return (
    <>
    <h2 className='head-text'>I know That <span>Good Web</span> <br/>Means <span>Good Business</span></h2>

    <div className='app__profiles'>
      {abouts.map((about, index) => {
        return (
        <motion.div
        whileInView={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type: 'tween'}}
        className="app__profile-item"
        key={about.tittle + index}
        >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
        </motion.div>
        )
      })}
    </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 
'about',
'app__whitebg');