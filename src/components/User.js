import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import "typeface-roboto";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { deleteUser } from "../actions";

/**
 * User - Simple component to render various properties of the user, like avatar, fist_name and last_name;
 *        also supports user-action for deleting selected-user from state
 */
export class User extends React.Component {
  static propTypes = {
    deleteUser: PropTypes.func.isRequired,
    avatar: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    last_name: PropTypes.string.isRequired
  };

  deleteUser = event => {
    const { id, deleteUser } = this.props;

    deleteUser(id);
  };

  render() {
    const user = this.props;

    return (
      <Card className="user-card">
        <CardMedia className="user-avatar" image={user.avatar} />

        <CardContent className="user-content">
          <Typography
            variant="headline"
            component="h2"
            align="center"
            className="user-title"
          >
            {user.first_name} {user.last_name}
          </Typography>
        </CardContent>

        <CardActions className="user-action">
          <Button
            size="medium"
            className="delete-user"
            onClick={this.deleteUser}
            variant="text"
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default connect(
  null,

  dispatch => ({
    deleteUser: (id) => dispatch(deleteUser(id))
  })
)(User);
