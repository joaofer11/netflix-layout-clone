import React, { useEffect, useState } from 'react';

import netflixLoadingIcon from './assets/netflix_loading_icon.gif';

import './styles/App.css';

import Tmdb from './components/Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

//APP
const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  
  useEffect(() => {
    const loadAll = async () => {
      const movieList = await Tmdb.getHomeList();
      setMovieList(movieList);
      
      
      const originals = movieList.filter(item => item.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const movieChosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(movieChosen.id, 'tv');
      
      console.log(chosenInfo)
      setFeaturedData(chosenInfo);
    }
    
    loadAll();
  }, []);
  
  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) return setBlackHeader(true);
      
      setBlackHeader(false);
    }
    
    window.addEventListener('scroll', scrollListener);
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
  
  return (
    <div className="page">
      
      <Header black={blackHeader} />
      
      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }
      
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      
      <footer>
        <span>Aplicação feita para experimentos de estudos.</span>
        <span>Todos os direitos reservados para <em>Netflix</em>.</span>
        <span>Dados pegos do site <em>Themoviedb.org</em>.</span>
      </footer>
      
      {movieList.length <= 0 &&
        <div className="loading">
          <img src={netflixLoadingIcon} alt="netflix-loading-bar" />
        </div>
      }
    </div>
  );
};

export default App;
