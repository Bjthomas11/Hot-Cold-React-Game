import React from "react";
import { shallow } from "enzyme";
import { TopNav } from "./top-nav";
import { RESTART_NEWGAME, AURALUPDATE } from "../actions";

describe("<TopNav />", () => {
  it("Renders without breaking", () => {
    shallow(<TopNav />);
  });

  it("Should dispatch restartGame when new game is clicked", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find(".new");
    link.simulate("click");
    expect(dispatch).toHaveBeenCalled();
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toEqual(RESTART_NEWGAME);
    expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(action.correctAnswer).toBeLessThanOrEqual(100);
  });

  it("Should dispatch AuralUpdate when new game is clicked", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find(".status-link");
    link.simulate("click");
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0][0].type).toEqual(AURALUPDATE);
  });
});
