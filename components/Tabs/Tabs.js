import { useState, useEffect, Children } from "react";
import { useRouter } from "next/router";
import styles from "./Tabs.module.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { slugify } from "../../utils/slugify";

const Tabs = () => {
  return (
    <div>
      <Tabs defaultIndex={1}>
        <TabPanels>
          <TabPanel>
            <Image
              boxSize="200px"
              fit="cover"
              src="https://resizing.flixster.com/wTgvsiM8vNLhCcCH-6ovV8n5z5U=/300x300/v1.bjsyMDkxMzI5O2o7MTgyMDQ7MTIwMDsxMjAwOzkwMA"
            />
          </TabPanel>
          <TabPanel>
            <Image
              boxSize="200px"
              fit="cover"
              src="https://vignette.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest?cb=20170716092103"
            />
          </TabPanel>
        </TabPanels>
        <TabList>
          <Tab>Naruto</Tab>
          <Tab>Sasuke</Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export default Tabs;
