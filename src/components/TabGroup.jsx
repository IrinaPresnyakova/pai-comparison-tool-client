import { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


class TabGroup extends Component {
  render() {
    return (
      <Tabs>
      <TabList>
        <Tab>Redacted text</Tab>
        <Tab>Synthetic PII</Tab>
        <Tab>Masked PII</Tab>
      </TabList>
  
      <TabPanel>
        <h2>My name is [NAME]</h2>
      </TabPanel>
      <TabPanel>
        <h2>My name is [Mark]</h2>
      </TabPanel>
      <TabPanel>
        <h2>My name is *****</h2>
      </TabPanel>
    </Tabs>
    )
  }
}

export default TabGroup