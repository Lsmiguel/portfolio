import { ProjectCard } from '../../components/Card/Project/ProjectCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Homepage = () => {
  const settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 800,
  };

  return (
    <>
      <div className="relative">
        <img src={banner} alt="" className="w-full h-screen object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
          <h1 className="text-black text-9xl text-center font-bold">Olá!</h1>
          <h1 className="text-black text-5xl font-bold text-center">
            Bem-vindo ao meu portfólio.
          </h1>
          <div className="flex justify-center items-center mt-10">
            <button className="bg-transparent hover:bg-p22 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
              Descobre mais sobre mim.
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-black">
        <h1 className=" mt-10 text-5xl font-bold">Projetos Recentes</h1>
        <button className="mt-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Ver todos os projetos
        </button>
      </div>
      {/* Criar Componente Único */}
      <div
        className="mt-14"
        style={{ overflowX: 'hidden', overflowY: 'hidden' }}
      >
        <div className="slider-container" style={{ paddingTop: '40px' }}>
          <Slider {...settings}>
            <div>
              <ProjectCard
                imageUrl={got}
                title="Westeros Insights"
                description="Aplicação sobre a série Game of Thrones"
                icons={[
                  { src: sw, alt: 'Swift' },
                  { src: firebase, alt: 'Firebase' },
                ]}
                readMoreLink=""
              />
            </div>
            <div>
              <ProjectCard
                icons={[
                  { src: react, alt: 'React' },
                  { src: ts, alt: 'TypeScript' },
                  { src: node, alt: 'Node.js' },
                  { src: mongodb, alt: 'MongoDB' },
                  { src: mui, alt: 'Material-UI' },
                ]}
                imageUrl={logo}
                title="HandCrafted"
                description="Website de venda de produtos artesanais"
                readMoreLink=""
              />
            </div>
            <div>
              <ProjectCard
                icons={[
                  { src: php, alt: 'PHP' },
                  { src: react, alt: 'React' },
                  { src: ts, alt: 'Typescript' },
                  { src: mysql, alt: 'Mysql' },
                  { src: mui, alt: 'Material UI' },
                ]}
                imageUrl={anz}
                title="Anzeige"
                description="Marketplace de artigos em segunda mão"
                readMoreLink=""
              />
            </div>
            <div>
              <ProjectCard
                icons={[
                  { src: react, alt: 'React' },
                  { src: ts, alt: 'Typescript' },
                ]}
                imageUrl={qt}
                title="Quote Generator"
                description="Website para gerar citações aleatórias"
                readMoreLink=""
              />
            </div>
            <div>
              <ProjectCard
                icons={[
                  { src: xml, alt: 'XML' },
                  { src: mongodb, alt: 'MongoDB' },
                ]}
                imageUrl={PEID}
                title="Sistema de Gestão"
                description="Sistema de gestão de uma associação animal"
                readMoreLink=""
              />
            </div>
            <div>
              <ProjectCard
                icons={[
                  { src: react, alt: 'React' },
                  { src: ts, alt: 'TypeScript' },
                  { src: tw, alt: 'Tailwind' },
                ]}
                imageUrl={banner}
                title="Portfolio"
                description="Portfólio pessoal"
                readMoreLink=""
              />
            </div>
          </Slider>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

import Slider from 'react-slick';
import banner from '../../assets/banner/1061221.png';
import PEID from '../../assets/slider/PEID.png';
import logo from '../../assets/slider/handcrafted.png';
import anz from '../../assets/slider/anzeige.png';
import qt from '../../assets/banner/banner.jpg';
import sw from '../../assets/languages/swift.png';
import ts from '../../assets/languages/ts.png';
import js from '../../assets/languages/js.png';
import tw from '../../assets/languages/tailwind.png';
import react from '../../assets/languages/react.png';
import mui from '../../assets/languages/mui.png';
import php from '../../assets/languages/php.png';
import node from '../../assets/languages/nodejs.svg';
import firebase from '../../assets/languages/firebase.svg';
import mongodb from '../../assets/languages/mongodb.svg';
import mysql from '../../assets/languages/mysql.png';
import xml from '../../assets/languages/xml.png';
import got from '../../assets/slider/got.jpg';
