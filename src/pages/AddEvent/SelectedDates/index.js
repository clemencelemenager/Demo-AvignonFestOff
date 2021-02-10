/* eslint-disable eqeqeq */
import React from 'react';
import PropTypes from 'prop-types';
import { Trash2 } from 'react-feather';

import { formatDateText } from 'src/utils';

const SelectedDates = ({
  startDate,
  endDate,
  date,
  dateType,
  dates,
  dayOffs,
  user,
  idEvent,
  updateSelectedDates,
  updateSelectedDayOffs,
  deleteSelectedDates,
  deleteSelectedDayOffs,
}) => {
  /** Delete corresponding value in state "dates" */
  const handleSelectedDates = (e) => {
    dates.forEach((dateItem) => {
      if (dateItem.startDate == startDate) {
        if (dateItem.endDate == endDate) {
          if (dateItem.user == user) {
            const index = dates.indexOf(dateItem);
            dates.splice(index, index + 1);
          }
        }
      }
    });
    /** Update new values for "dates" in state */
    updateSelectedDates(dates);
    /** Display none on selected div */
    const selectedDatesContainer = e.target.closest('div');
    selectedDatesContainer.style.display = 'none';
  };

  /** Delete corresponding value in state "dayOffs" */
  const handleSelectedDayOffs = (e) => {
    dayOffs.forEach((dayOffsItem) => {
      if (dayOffsItem.date == date) {
        const index = dayOffs.indexOf(dayOffsItem);
        dayOffs.splice(index, index + 1);
      }
    });
    /** Update new values for "dayOffs" in state */
    updateSelectedDayOffs(dayOffs);
    /** Display none on selected div */
    const selectedDayOffContainer = e.target.closest('div');
    selectedDayOffContainer.style.display = 'none';
  };

  /** Delete corresponding dates in database and state */
  const handleDatesToDelete = (e) => {
    const idDatesToDelete = e.target.closest('div').id;

    dates.forEach((dateItem) => {
      /** if it is a date already saved, search by its id */
      if (idDatesToDelete && dateItem.id == idDatesToDelete) {
        const index = dates.indexOf(dateItem);
        dates.splice(index, index + 1);
        /** Delete in database with request put */
        deleteSelectedDates(idDatesToDelete);
      }
      /** if it is a new date, it has not id yet : search by its content */
      else if (!idDatesToDelete) {
        if (dateItem.startDate == startDate) {
          if (dateItem.endDate == endDate) {
            if (dateItem.user == user) {
              const index = dates.indexOf(dateItem);
              dates.splice(index, index + 1);
            }
          }
        }
      }
      /** Delete in state */
      updateSelectedDates(dates);
    });
    /** Display none on selected div */
    const selectedDatesContainer = e.target.closest('div');
    selectedDatesContainer.style.display = 'none';
  };

  /** Delete corresponding day offs in database and state */
  const handleDayOffsToDelete = (e) => {
    const idDayOffToDelete = e.target.closest('div').id;

    dayOffs.forEach((dayOffsItem) => {
      /** if it is a date already saved, search by its id */
      if (idDayOffToDelete && dayOffsItem.id == idDayOffToDelete) {
        const index = dayOffs.indexOf(dayOffsItem);
        dayOffs.splice(index, index + 1);
        /** Delete in database with request put */
        deleteSelectedDayOffs(idDayOffToDelete);
      }
      /** if it is a new date, it has not id yet : search by its content */
      else if (!idDayOffToDelete) {
        if (dayOffsItem.date == date) {
          const index = dayOffs.indexOf(dayOffsItem);
          dayOffs.splice(index, index + 1);
        }
      }
      /** Delete in state */
      updateSelectedDayOffs(dayOffs);
    });
    /** Display none on selected div */
    const selectedDayOffContainer = e.target.closest('div');
    selectedDayOffContainer.style.display = 'none';
  };

  return (
    <>
      { /** Display selected dates on addEvent Form */
        ((dateType === 'dates') && (
          <div
            className="selectedDates-item"
            id={`selectedDates_${startDate}_${endDate}`}
          >
            <Trash2
              size={19}
              onClick={(e) => {
                handleSelectedDates(e);
              }}
            />
            <p className="selectedDates-item-data">
              Du {formatDateText(startDate)} au {formatDateText(endDate)}
            </p>
          </div>
        ))
      }
      { /** Display selected dayOffs on addEvent Form */
        (dateType === 'dayOffs' && (
          <div
            className="selectedDates-item"
            id={`selectedDayOff-${date}`}
          >
            <Trash2
              size={19}
              onClick={(e) => {
                handleSelectedDayOffs(e);
              }}
            />
            <p className="selectedDates-item-data">
              Relâche le {formatDateText(date)}
            </p>
          </div>
        ))
      }
      { /** Display selected dates on editEvent Form
        Need to be deleted in database + in state */
        ((dateType === 'dates-saved-in-db') && (
          <div
            className="selectedDates-item"
            id={idEvent}
          >
            <Trash2
              size={16}
              onClick={(e) => {
                handleDatesToDelete(e);
              }}
            />
            Du {formatDateText(startDate)} au {formatDateText(endDate)}
          </div>
        ))
      }
      { /** Display selected dayOffs on editEvent Form
        Need to be deleted in database + in state */
        ((dateType === 'dayOffs-saved-in-db') && (
          <div
            className="selectedDates-item"
            id={idEvent}
          >
            <Trash2
              size={16}
              onClick={(e) => {
                handleDayOffsToDelete(e);
              }}
            />
            Relâche le {formatDateText(date)}
          </div>
        ))
      }
    </>

  );
};

SelectedDates.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  date: PropTypes.string,
  dateType: PropTypes.string.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  dates: PropTypes.array,
  updateSelectedDates: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  updateSelectedDayOffs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  dayOffs: PropTypes.array,
  deleteSelectedDates: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  deleteSelectedDayOffs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  idEvent: PropTypes.number,
};

SelectedDates.defaultProps = {
  startDate: '',
  endDate: '',
  date: '',
  dates: [],
  dayOffs: [],
  updateSelectedDates: '',
  updateSelectedDayOffs: '',
  deleteSelectedDates: '',
  deleteSelectedDayOffs: '',
  idEvent: null,
};

export default SelectedDates;
