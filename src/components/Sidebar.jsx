import React from 'react';
import '../App.css'

import { Collapse } from 'antd';

const { Panel } = Collapse;

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Collapse defaultActiveKey={['1']} ghost>
        <Panel header="Sidebar" key="1">
          <p>Content 1</p>
          <p>Content 2</p>
          <p>Content 3</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Sidebar;
