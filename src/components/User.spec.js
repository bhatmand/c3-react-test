import React from "react";
import { mount } from "enzyme";

import { User } from "./User";

describe("User", () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      deleteUser: jest.fn(),
      avatar: "avatar/image/source",
      first_name: "user first name",
      id: 1,
      last_name: "user last name"
    };

    component = mount(<User {...props} />);
  });

  it("renders an avatar", () => {
    expect(
      component.find("div.user-card div.user-avatar").props().style
        .backgroundImage
    ).toEqual('url("avatar/image/source")');
  });

  it("renders user's name", () => {
    expect(
      component.find("div.user-card div.user-content h2.user-title").text()
    ).toEqual("user first name user last name");
  });

  it("renders delete button", () => {
    expect(
      component.find("div.user-card div.user-action button.delete-user").text()
    ).toEqual("Delete");
  });

  it("calls deleteUser", () => {
    component
      .find("div.user-card div.user-action button.delete-user")
      .at(0)
      .simulate("click");
    expect(props.deleteUser).toHaveBeenCalled();
  });
});
