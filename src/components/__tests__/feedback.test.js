import React from "react";
import { shallow, mount } from "enzyme";
import Feedback from "../feedback";

describe("<Feedback />", () => {
  it("Renders without breaking", () => {
    shallow(<Feedback />);
  });
});
