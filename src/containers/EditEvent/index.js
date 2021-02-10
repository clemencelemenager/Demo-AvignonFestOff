/* eslint-disable eqeqeq */
import { connect } from 'react-redux';

import EditEvent from 'src/pages/EditEvent';

import { toggleLoader } from 'src/actions/settings';
import { fetchOneEvent } from 'src/actions/event';
import {
  updateField,
  updateEvent,
  deleteSelectedDates,
  deleteSelectedDayOffs,
  uploadNewFile,
  deleteEvent,
} from 'src/actions/editEvent';
import {
  updateSelectedDates,
  updateSelectedDayOffs,
  saveDates,
  saveDayOff,
} from 'src/actions/addEvent';
import {
  fetchTypes,
  fetchPlaces,
} from 'src/actions/filters';

const mapStateToProps = (state) => ({
  types: state.filters.types,
  places: state.filters.places,
  loader: state.settings.loader,
  user: state.auth.id,
  type: state.editEvent.type,
  place: state.editEvent.place,
  title: state.editEvent.title,
  authorName: state.editEvent.authorName,
  troopName: state.editEvent.troopName,
  duration: state.editEvent.duration,
  time: state.editEvent.time,
  image: state.editEvent.image,
  startDate: state.editEvent.startDate,
  endDate: state.editEvent.endDate,
  dates: state.editEvent.dates,
  date: state.editEvent.date, // date of day off
  dayOffs: state.editEvent.dayOffs,
  eventDescription: state.editEvent.eventDescription,
  troopDescription: state.editEvent.troopDescription,
  fullPrice: state.editEvent.fullPrice,
  subscriberPrice: state.editEvent.subscriberPrice,
  reducedPrice: state.editEvent.reducedPrice,
  childrenPrice: state.editEvent.childrenPrice,
  reservationContact: state.editEvent.reservationContact,
  isSaved: state.editEvent.isSaved,
  errors: state.editEvent.errors,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOneEvent: (id) => {
    dispatch(fetchOneEvent(id));
  },
  fetchTypes: () => {
    dispatch(fetchTypes());
  },
  fetchPlaces: () => {
    dispatch(fetchPlaces());
  },
  handleField: (value, name) => {
    dispatch(updateField(value, name));
  },
  handleUploadNewFile: (uploadedFile) => {
    // console.log(uploadedFile);
    /** Hide initial image if a new one is uploaded */
    document.querySelector('.edit-image-initial').style.display = 'none';
    dispatch(uploadNewFile(uploadedFile));
  },
  updateSelectedDates: (dates) => {
    dispatch(updateSelectedDates(dates));
  },
  updateSelectedDayOffs: (dayOffs) => {
    dispatch(updateSelectedDayOffs(dayOffs));
  },
  deleteSelectedDates: (idDatesToDelete) => {
    dispatch(deleteSelectedDates(idDatesToDelete));
  },
  deleteSelectedDayOffs: (idDayOffToDelete) => {
    dispatch(deleteSelectedDayOffs(idDayOffToDelete));
  },
  handleSubmitDates: (newDates) => {
    dispatch(saveDates(newDates));
  },
  handleSubmitDayOff: (newDayOff) => {
    dispatch(saveDayOff(newDayOff));
  },
  handleSubmitForm: (e) => {
    e.preventDefault();
    dispatch(updateEvent());
  },
  deleteEvent: (idEvent) => {
    dispatch(deleteEvent(idEvent));
  },
  toggleLoader: () => {
    dispatch(toggleLoader());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);
