/* eslint-disable eqeqeq */
import { connect } from 'react-redux';

import AddEvent from 'src/pages/AddEvent';

import {
  saveField,
  uploadFile,
  saveDates,
  saveDayOff,
  addNewEvent,
  updateSelectedDates,
  updateSelectedDayOffs,
} from 'src/actions/addEvent';
import {
  fetchTypes,
  fetchPlaces,
} from 'src/actions/filters';

const mapStateToProps = (state) => ({
  types: state.filters.types,
  places: state.filters.places,
  user: state.auth.id,
  type: state.addEvent.type,
  place: state.addEvent.place,
  title: state.addEvent.title,
  authorName: state.addEvent.authorName,
  troopName: state.addEvent.troopName,
  duration: state.addEvent.duration,
  time: state.addEvent.time,
  image: state.addEvent.image,
  dates: state.addEvent.dates,
  startDate: state.addEvent.startDate,
  endDate: state.addEvent.endDate,
  dayOffs: state.addEvent.dayOffs,
  date: state.addEvent.date, // date of day off
  eventDescription: state.addEvent.eventDescription,
  troopDescription: state.addEvent.troopDescription,
  fullPrice: state.addEvent.fullPrice,
  subscriberPrice: state.addEvent.subscriberPrice,
  reducedPrice: state.addEvent.reducedPrice,
  childrenPrice: state.addEvent.childrenPrice,
  reservationContact: state.addEvent.reservationContact,
  isSaved: state.addEvent.isSaved,
  errors: state.addEvent.errors,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTypes: () => {
    dispatch(fetchTypes());
  },
  fetchPlaces: () => {
    dispatch(fetchPlaces());
  },
  handleField: (value, name) => {
    dispatch(saveField(value, name));
  },
  handleUploadFile: (uploadedFile) => {
    // console.log(uploadedFile);
    dispatch(uploadFile(uploadedFile));
  },
  handleSubmitDates: (newDates) => {
    dispatch(saveDates(newDates));
  },
  handleSubmitDayOff: (newDayOff) => {
    dispatch(saveDayOff(newDayOff));
  },
  handleSubmitForm: (e) => {
    e.preventDefault();
    /** Dispatch to middleware for axios request */
    dispatch(addNewEvent());
  },
  updateSelectedDates: (dates) => {
    dispatch(updateSelectedDates(dates));
  },
  updateSelectedDayOffs: (dayOffs) => {
    dispatch(updateSelectedDayOffs(dayOffs));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
