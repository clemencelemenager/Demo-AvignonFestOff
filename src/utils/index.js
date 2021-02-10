/* eslint-disable max-len */
/**
 * Function to transform date from yyyy-mm-dd to dd/mm/yyyy
 * @param {string} date
 * @return {string} newDate
 */
export const formatDate = (date) => {
  const sliceDate = date.slice(0, 10);
  const p = sliceDate.split(/\D/g);
  const newDate = [p[2], p[1], p[0]].join('/');
  return newDate;
};

/**
 * Function to transform date from yyyy-mm-dd to "dd month yyyy"
 * @param {string} date
 * @return {string} newDate
 */
export const formatDateText = (date) => {
  const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  const sliceDate = date.slice(0, 10);
  const p = sliceDate.split(/\D/g);
  const newDate = `${p[2]} ${monthNames[Number(p[1]) - 1]} ${p[0]}`;
  return newDate;
};

/**
 * Function to get one event with his id
 * @param {number} id
 * @param {array} events
 * @return {object} event which correspond to the id we got in params
 */
export const findEventById = (id, events) => {
  const currentEvent = events.find((event) => id === event.id);
  return currentEvent;
};

/**
 * Function to filters events with date
 *
 */
export const findEventByDate = (date, events) => {
  console.log(events);
  console.log(formatDate(date));
  const newDate = new Date(date);
  events.forEach((event) => {
    event.dates.forEach((date) => {
      console.log(formatDate(date.startDate));
    });
  });

  console.log(newDate);
  const filteredEvent = events.filter((event) => formatDate(date) === formatDate(event.dates.startDate));
  console.log(filteredEvent);
  return filteredEvent;
};

export const findEventWithFilters = (genre, events) => {
  console.log(events);
  console.log(genre);
  const newEvents = events.filter((event) => event.type.name === genre);
  return newEvents;
};
