import React from "react";
import { mount } from "enzyme";

import { PearsonUsers } from "./PearsonUsers";

describe("PearsonUsers", () => {
  it("renders a h1", () => {
    const props = {
      users: [],
      getUsers: jest.fn(),
      removeDuplicates: jest.fn()
    };
    const component = mount(<PearsonUsers {...props} />);

    expect(component.find("h1.page-title").text()).toEqual(
      "Pearson User Management"
    );
  });
});
