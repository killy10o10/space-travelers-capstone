import React from "react";
import renderer from "react-test-renderer";
import Missions from "./__mock__/missions";

describe('A tests for my missions component', () => {
  it('Check whether mission component renders', () => {
    const mission = {
      id: 1,
      name: 'Thaicom',
      description: 'Thaicom is the name of a series of  communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
      reserved: false,
    };
    const missionTree = renderer.create(
      <Missions
        key={mission.id}
        description={mission.description}
        name={mission.name}
        reserved={mission.reserved}
      />,
    ).toJSON();

    expect(missionTree).toMatchSnapshot();
  });
});
