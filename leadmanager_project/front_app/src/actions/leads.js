import axios from "axios";
import { createMessage } from "./message";

import {
  GET_LEADS,
  DELETE_LEADS,
  ADD_LEADS,
  GET_ERRORS,
} from "./types";

//GET LEADS
export const getLeads = () => dispatch => {
  axios
    .get("/api/leads/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//Delete Leads
export const deleteLeads = id => dispatch => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteLead: "Lead deleted" }));
      dispatch({
        type: DELETE_LEADS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//Add Leads
export const addLead = lead => dispatch => {
  axios
    .post(`/api/leads/`, lead)
    .then(res => {
      dispatch(createMessage({ addLead: "Lead added" }));
      dispatch({
        type: ADD_LEADS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
