import React from "react";
import renderer from "react-test-renderer";
import Myprofile from "./__mock__/myprofile";

it('This is a test to check the My Profile page', () => {
  const tree = renderer.create(
    <Myprofile />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
