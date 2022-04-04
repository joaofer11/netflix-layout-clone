import React from 'react';

import './styles.css';

const FeaturedMovie = ({ item }) => {
  const backdropImage = `https://image.tmdb.org/t/p/original${item.backdrop_path}`;
  const firstDate = new Date(item.first_air_date);
  const genres = item.genres.map(({ name }) => name);
  
  let description = (item.overview.length > 200) 
    ? item.overview.substring(0, 200) + '...'
    : item.overview;
  
  
  return (
    <section className="featured" style={{
     backgroundImage: `url('${backdropImage}')`,
    }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">{item.number_of_seasons} {item.number_of_seasons !== 1 ? 'temporadas' : 'temporada'}</div>
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <button className="featured--watchbutton"><a href={`/watch/${item.id}`}>► Assistir</a></button>
            <button className="featured--mylistbutton"><a href={`/list/add/${item.id}`}>+ Minha Lista</a></button>
          </div>
          <div className="featured--genres">
            <strong>Gêneros:</strong> {genres.join(', ')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
