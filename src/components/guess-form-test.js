import React from "react";
import { shallow, mount } from "enzyme";
import { GuessForm } from "./guess-form";
import { userMakesGuess } from "../actions";

describe("<GuessForm />", () => {
  it("Renders without breaking", () => {
    shallow(<GuessForm />);
  });

  it("Should dispatch onMakeGuess when the form is submitted", () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const value = "10";
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate("submit");
    expect(dispatch).toHaveBeenCalledWith(userMakesGuess(value));
  });

  it("Should reset the input when the form is submitted", () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="number"]');
    input.instance().value = 1;
    wrapper.simulate("submit");
    expect(input.instance().value).toEqual("");
  });
});
