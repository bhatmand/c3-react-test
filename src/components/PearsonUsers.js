import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { getUsers, removeDuplicates } from "../actions";
import Users from "./Users.js";

/**
 * PearsonUsers - Complex component to render heading and list of users
 */
export class PearsonUsers extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        last_name: PropTypes.string.isRequired
      })
    ).isRequired,
    getUsers: PropTypes.func.isRequired,
    removeDuplicates: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.getUsers();
  }

  componentDidUpdate() {
    this.props.removeDuplicates();
  }

  render() {
    const { users } = this.props;

    return (
      <Paper className="pearson-users" elevation={1}>
        <Typography variant="headline" component="h1" className="page-title">
          Pearson User Management
        </Typography>
        <Users users={users} />
      </Paper>
    );
  }
}

export default connect(
  state => ({
    users: state.Users.users
  }),

  dispatch => ({
    getUsers: () => dispatch(getUsers()),
    removeDuplicates: () => dispatch(removeDuplicates())
  })
)(PearsonUsers);
