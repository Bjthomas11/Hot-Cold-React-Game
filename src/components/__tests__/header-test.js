import React from "react";
import { shallow, mount } from "enzyme";
import Header from "../header";

describe("<Header />", () => {
  it("Renders without breaking", () => {
    shallow(<Header />);
  });
});
