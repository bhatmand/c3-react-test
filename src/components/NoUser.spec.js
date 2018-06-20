import React from "react";
import { mount } from "enzyme";

import NoUser from "./NoUser";

describe("NoUser", () => {
  it("renders no user available message", () => {
    const component = mount(<NoUser />);

    expect(
      component.find("div.user-card-container h2.user-blank").text()
    ).toEqual("No user available");
  });
});
