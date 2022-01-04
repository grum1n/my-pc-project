import React from 'react';
import Hero from '../../../components/Hero';
import './about.css';

const About = () => {
  return (
    <>
        <Hero heading='Apie mus' />
            <div className='container about-grid'>
                <div className='col-1'>img</div>
                <div className='col-2'>
                    <h3>Mūsų profilis</h3>
                    <p className='about-bold-text'>textt ajdfsjkd</p>
                    <p>text kanjancjksdn</p>
                    <p>text knsjvnfvjn</p>
                </div>
                <div className='col-3'>
                    <h3>Mūsų projekto pradžia</h3>
                    <p>Projektas pradėtas kurti per Present Connection Academijos kursą</p>
                    <div className='grid-images-box'>img</div>
                </div>
                <div className='col-4'>
                    <div className='grid-images-box'>img</div>
                    <h3>Rinka</h3>
                    <p>Naudotų automobilių detalių prekyba internete yra auganti rinka.</p>
                </div>
                <div className='col-5'>
                    <div className='design-color-box'></div>
                    <div className='grid-images-box'>img</div>
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
    </>
  );
};

export default About;
