import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./Tabs.module.css";
import { HStack, Box, Button } from "@chakra-ui/react";

import { slugify } from "../../utils/slugify";

const Tabs = ({ children, initialTab }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const router = useRouter();

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(slugify(newActiveTab));
  };

  useEffect(() => {
    if (initialTab.tab) {
      setActiveTab(initialTab.tab);
      console.log(initialTab);
    }
  }, []);

  useEffect(() => {
    router.push(`${router.pathname}?tab=${slugify(activeTab)}`, undefined, {
      shallow: true,
    });
    console.log(activeTab);
  }, [activeTab]);

  return (
    <Box mr={{ base: 0, md: 200 }} ml={{ md: 200 }}>
      <HStack spacing="16px" p="16px">
        {children.map((tab) => {
          const label = tab.props.label;
          return (
            <Box
              w="100%"
              h="150px"
              align="center"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              _hover={{ bg: "teal.400" }}
              onClick={(e) => handleClick(e, label)}
              className={slugify(label) == activeTab ? styles.current : ""}
              key={label}
            >
              <a href="#">{label}</a>
            </Box>
          );
        })}
      </HStack>
      {children.map((one) => {
        if (slugify(one.props.label) == activeTab)
          return (
            <div key={one.props.label} className={styles.content}>
              {one.props.children}
            </div>
          );
      })}
    </Box>
  );
};

export { Tabs };
