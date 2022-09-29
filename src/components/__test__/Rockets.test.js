import React from "react";
import renderer from "react-test-renderer";
import Rocket from "./__mock__/rockect";

describe("A tests for my Rockets component", () => {
  it("Check whether Rockets component renders", () => {
    const rocket = {
      id: 1,
      image:
        "https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-rocket-online-marketing-xnimrodx-blue-xnimrodx.png",
      name: "falcon1",
      description: "This is a description about Falcon 1",
      reserved: false,
    };
    const rocketTree = renderer
      .create(
        <Rocket
          key={rocket.id}
          image={rocket.image}
          description={rocket.description}
          name={rocket.name}
          reserved={rocket.reserved}
        />,
      )
      .toJSON();

    expect(rocketTree).toMatchSnapshot();
  });
  it('We now check whether it renders the rockets correctly', () => {
    const rockets = [];
    const rocketTree = renderer.create(
      <Rocket rockets={rockets} />,
    ).toJSON();

    expect(rocketTree).toMatchSnapshot();
  });
});
