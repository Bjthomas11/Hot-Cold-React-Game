import React from "react";
import { shallow, mount } from "enzyme";
import GuessCount from "../guess-count";

describe("<GuessCount />", () => {
  it("Renders without breaking", () => {
    shallow(<GuessCount />);
  });

  it("Renders the correct guess count", () => {
    // made up harcoded value
    const value = 1;
    const wrapper = shallow(<GuessCount guessCount={value} />);
    expect(wrapper.text()).toEqual(`You've made ${value} guess!`);
  });
});
