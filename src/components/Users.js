import PropTypes from "prop-types";
import React from "react";

import Paper from "@material-ui/core/Paper";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import User from "./User.js";
import NoUser from "./NoUser.js";

/**
 * Users - Complex component to check and render no-user-messaging or list-of-users, based on current state
 */
export default class Users extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        last_name: PropTypes.string.isRequired
      })
    ).isRequired
  };

  render() {
    const { users } = this.props;

    return (
      <Paper elevation={1}>
        {(users.length === 0 && <NoUser />) || (
          <TransitionGroup className="user-card-container">
            {users.map((user, index) => (
              <CSSTransition key={user.id} timeout={250} classNames="fade">
                <User {...user}>{user.first_name}</User>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </Paper>
    );
  }
}
