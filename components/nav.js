import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Nav = () => (
  <Flex>
    <Box bg="teal.500" w="100%" p={3} color="white">
      <Link href="/">
        <a>
          <img
            src="../static/commerce.png"
            alt="home"
            className="logo"
            height="40"
            width="40"
          />
        </a>
      </Link>
    </Box>
  </Flex>
);

export default Nav;
