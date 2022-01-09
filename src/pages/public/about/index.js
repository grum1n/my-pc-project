import React from 'react';
import Hero from '../../../components/Hero';
import Image from '../../../components/Image';
import './about.css';
import PictureA from '../../../images/sandelys.jpg';
import PictureB from '../../../images/pc.jpg';
import PictureC from '../../../images/ardomiauto2.jpg';
import PictureD from '../../../images/carpWeb.jpg';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

const About = () => {
  return (
    <>
    <Header />
        <Hero heading='Apie mus' tetst='alio'/>
            <div className='container about-grid'>
                <div className='col-1'>
                    <Image url={PictureA} title='Sandėlys' cName='img-sandelys'/>
                </div>
                <div className='col-2'>
                    <h3>Mūsų profilis</h3>
                    <p className='about-bold-text'>Švari gamta</p>
                    <p>Panaudojamos, kokybiškos detalės, kurių nereikia gaminti.  Tausojama gamta.</p>
                    <p>Didelis asortimentas</p>
                </div>
                <div className='col-3'>
                    <h3>Mūsų projekto pradžia</h3>
                    <p>Projektas pradėtas kurti per Present Connection Academijos kursą. </p>
                    <div className='pc-images-box'>
                        <Image url={PictureB} title='Present Connection' cName='img-pc'/>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='grid-images-box'>
                        <Image url={PictureC} title='rinka' cName='img-rinka'/>
                    </div>
                    <h3>Rinka</h3>
                    <p>Naudotų automobilių detalių prekyba internete yra auganti rinka.</p>
                </div>
                <div className='col-5'>
                    <div className='grid-images-box'>
                        <Image url={PictureD} title='rinka' cName='img-carpWeb'/>
                    </div>
                    <h3>Tikslas</h3>
                    <p>Sukurti patogią naudotų automobilių detalių sandėliavimo platformą</p>
                </div>
            </div>
        <section className='stats-container'>
            <ul className='container flex-around'>
                <li>
                    <h2>13000+</h2>
                    <h5>Naudota paieška</h5>
                </li>
                <li>
                    <h2>64+</h2>
                    <h5>Laužynai</h5>
                </li>
                <li>
                    <h2>550/d.</h2>
                    <h5>Įkeliama detalių</h5>
                </li>
                <li>
                    <h2>148.000</h2>
                    <h5>Sandėlyje datalių</h5>
                </li>
            </ul>
        </section>
        <Footer />
    </>
  );
};

export default About;
