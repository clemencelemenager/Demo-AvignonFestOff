import React from 'react';

// Import style of the component
import './banner.scss';

// Import picture for the background
import background from 'src/assets/images/banner-picture.jpg';

const Banner = () => {
  // const styleCss = {
  //   backgroundImage: `url( ${background} )`,
  // };

  // console.log('Excellent');

  return (
    <div className="banner">
      <div className="banner-container">
        <h1 className="banner-title">
          Le programme du festival Off à portée de main !
        </h1>
        <p className="banner-description">
          Festivaliers, consultez librement le programme.
        </p>
        <p className="banner-description">
          Amis artistes, inscrivez-vous et mettez en avant vos représentations.
        </p>
      </div>
    </div>
  );
};

export default Banner;
