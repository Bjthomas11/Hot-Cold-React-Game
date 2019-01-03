import React from "react";
import { shallow, mount } from "enzyme";
import InfoSection from "../info-section";

describe("<InfoSection />", () => {
  it("Renders without breaking", () => {
    shallow(<InfoSection />);
  });
});
