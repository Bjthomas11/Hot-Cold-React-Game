import React from "react";
import { shallow, mount } from "enzyme";
import Feedback from "../feedback";

describe("<Feedback />", () => {
  it("Renders without breaking", () => {
    shallow(<Feedback />);
  });

  it("Renders feedback to user", () => {
    let TEST_FEEDBACK = "You are listening to this game";

    let wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />);
    expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
  });
});
