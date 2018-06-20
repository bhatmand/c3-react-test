import React from "react";

import Typography from "@material-ui/core/Typography";

/**
 * NoUser - Simple component to render static no-user-message
 */
const NoUser = () => (
  <div className="user-card-container">
    <Typography
      variant="headline"
      component="h2"
      align="center"
      className="user-blank"
    >
      No user available
    </Typography>
  </div>
);

export default NoUser;