import PropTypes from "prop-types";
import React from "react";
import { mount } from "enzyme";
import configureMockStore from "redux-mock-store";

import Users from "./Users";

describe("Users", () => {
  it("does not render user card when no user info available", () => {
    const props = {
      users: []
    };
    const component = mount(<Users {...props} />);

    expect(
      component.find("div.user-card-container div.user-card").length
    ).toEqual(0);
  });

  it("renders no user available message when no user info available", () => {
    const props = {
      users: []
    };
    const component = mount(<Users {...props} />);

    expect(
      component.find("div.user-card-container h2.user-blank").length
    ).toEqual(1);
  });

  it("renders user card(s) when user info is available", () => {
    const props = {
      users: [
        {
          avatar: "avatar/image/source",
          first_name: "user first name",
          id: 1,
          last_name: "user last name"
        }
      ]
    };
    const component = mount(<Users {...props} />, {
      context: { store: configureMockStore()({}) },
      childContextTypes: {
        store: PropTypes.object.isRequired
      }
    });

    expect(
      component.find("div.user-card-container div.user-card").length
    ).toEqual(1);
  });
});
