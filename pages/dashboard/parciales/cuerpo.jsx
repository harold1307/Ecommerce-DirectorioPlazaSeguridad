import { Radio, Space, Tabs } from 'antd';
import React, { useState } from 'react';
const { TabPane } = Tabs;

const Cuerpo = () => {
  const [tabPosition, setTabPosition] = useState('left');

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  return (
    <>
     
      <Tabs tabPosition= "left">
        <TabPane tab="Tab 1" key="1">
          productos
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab 3
        </TabPane>
      </Tabs>
    </>
  );
};

export default Cuerpo;