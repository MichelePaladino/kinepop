import React from "react";
import { connect } from "react-redux";

import { TextField } from 'rmwc/TextField';

import { startOnTitleChange } from "../store/actions/filtersActions"


const MovieSearch = (props) => {
    return (
        <TextField fullwidth placeholder="Search for a movie!" value={props.filters.title} onChange={props.startOnTitleChange}/>
    )
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    startOnTitleChange: (e) => dispatch(startOnTitleChange(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);