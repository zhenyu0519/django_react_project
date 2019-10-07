import axios from "axios";

import { GET_LEADS, DELETE_LEADS, ADD_LEADS } from "./types";

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
      dispatch({
        type: ADD_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
