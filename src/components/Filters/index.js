/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

// Import icon
import { Sliders, Search, RefreshCw } from 'react-feather';

import './filters.scss';

const Filters = ({
  filtersOpen,
  toggleFilters,
  types,
  places,
  changeField,
  currentDate,
  filtersAll,
  place,
  genre,
  name,
  price,
  isFilter,
  windowWidth,
  globalCount,
  reinitFilters,
  fetchEvents,
  filtersFalse,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    filtersAll();
  };

  const clickOnReinit = () => {
    fetchEvents();
    reinitFilters();
  };

  const pageVariants = {
    initial: {
      x: '+100%',
    },
    in: {
      x: 0,
    },
    exit: {
      x: '+100%',
    },
  };

  if (windowWidth === 992) {
    filtersFalse();
  }

  return (
    <div className="filters">
      <form className="filters-form" onSubmit={handleSubmit}>
        <div className="filters-date">
          <label htmlFor="start">Date du spectacle :</label>
          <input
            type="date"
            className="filters-datepicker"
            name="currentDate"
            min="2021-07-01"
            max="2021-07-31"
            value={currentDate}
            onChange={(event) => changeField(event.target.value, 'currentDate')}
          />
          <Sliders size="25" className="filters-date-icon" color="#F6B261" onClick={toggleFilters} />
        </div>
        <AnimatePresence>
          {filtersOpen && (
            <motion.div
              className="filters-advance"
              initial="initial"
              animate="in"
              exit="exit"
              variants={pageVariants}
              transition={{ ease: "easeOut", duration: 0.8 }}
            >
              <div className="filters-genre">
                <label htmlFor="genre">Genre</label>
                <select name="genre" className="filters-genre-select select" value={genre} onChange={(event) => changeField(event.target.value, 'genre')}>
                  <option value="">Genre de la pièce</option>
                  {types.map((type) => (
                    <option key={type.name} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </div>
              <div className="filters-place">
                <label htmlFor="place">Lieu</label>
                <select name="place" className="filters-place-select select" value={place} onChange={(event) => changeField(event.target.value , 'place')}>
                  <option value="">Lieu du spectacle</option>
                  {places.map((currentPlace) => (
                    <option key={currentPlace.name} value={currentPlace.id}>{currentPlace.name}</option>
                  ))}
                </select>
              </div>
              <div className="filters-name">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Nom du spectacle"
                  className="filters-input"
                  name="name"
                  onChange={(event) => changeField(event.target.value, 'name')}
                />
              </div>
              <div className="filters-price">
                <label htmlFor="price">Prix</label>

                <input
                  type="number"
                  placeholder="Prix maximum"
                  className="filters-input"
                  name="price"
                  max="100"
                  value={price}
                  onChange={(event) => changeField(event.target.value, 'price')}
                />
              </div>
              <button type="submit" className="filters-submit">Rechercher</button>
            </motion.div>
          )}
        </AnimatePresence>
        {
          /** if mobile/tablet screen and one date selected, display submit search button */
          (currentDate && windowWidth < 992) && (<button type="submit" className="filters-submit-mobile">Rechercher</button>)
        }
        {windowWidth > 992 && (
          <div
            className="filters-advance"
          >
            <div className="filters-genre">
              <label htmlFor="genre">Genre</label>
              <select name="genre" className="filters-genre-select select" value={genre} onChange={(event) => changeField(event.target.value, 'genre')}>
                <option value="">Genre de la pièce</option>
                {types.map((type) => (
                  <option key={type.name} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
            <div className="filters-place">
              <label htmlFor="place">Lieu</label>
              <select name="place" className="filters-place-select select" value={place} onChange={(event) => changeField(event.target.value , 'place')}>
                <option value="">Lieu du spectacle</option>
                {places.map((currentPlace) => (
                  <option key={currentPlace.name} value={currentPlace.id}>{currentPlace.name}</option>
                ))}
              </select>
            </div>
            <div className="filters-name">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                value={name}
                placeholder="Nom du spectacle"
                className="filters-input"
                name="name"
                onChange={(event) => changeField(event.target.value, 'name')}
              />
            </div>
            <div className="filters-price">
              <label htmlFor="price">Prix</label>

              <input
                type="number"
                placeholder="Prix maximum"
                className="filters-input"
                name="price"
                max="100"
                value={price}
                onChange={(event) => changeField(event.target.value, 'price')}
              />
            </div>
            <button type="submit" className="filters-search"><Search /></button>
          </div>
        )}
      </form>
      {isFilter && (
        <div className="filters-filtered">
          <div className="filters-result">
            {globalCount > 0 && (
              <p>Il y a {globalCount} résultat(s) à votre recherche</p>
            )}
            {globalCount === 0 && (
              <p>Il n'y a malheureusement pas de spectacles correspondant à vos recherches</p>
            )}
          </div>
          <div className="filters-init" onClick={clickOnReinit}>
            <RefreshCw size="15" />
            <p>Réinitialiser les filtres</p>
          </div>
        </div>
      )}
    </div>
  );
};

Filters.propTypes = {
  filtersOpen: PropTypes.bool.isRequired,
  toggleFilters: PropTypes.func.isRequired,
  types: PropTypes.array.isRequired,
  places: PropTypes.array.isRequired,
  changeField: PropTypes.func.isRequired,
  currentDate: PropTypes.string.isRequired,
  filtersAll: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isFilter: PropTypes.bool.isRequired,
  windowWidth: PropTypes.number.isRequired,
  globalCount: PropTypes.number.isRequired,
  reinitFilters: PropTypes.func.isRequired,
  fetchEvents: PropTypes.func.isRequired,
  filtersFalse: PropTypes.func.isRequired,
};

export default Filters;
