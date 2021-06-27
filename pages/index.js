import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import { Tabs } from "../components/Tabs";
import { HStack, Box, Button, Text } from "@chakra-ui/react";
import ProductsWash from "../components/ProductsWash";

export default function Home({ query }) {
  return (
    <div>
      <Head title="Home" />
      <Nav />
      <div className="hero">
        <h4 className="title">Which service(s) do you need?</h4>
      </div>
      <Tabs initialTab={query}>
        <div label="Wash & Fold">
          <Box>
            <ProductsWash />
          </Box>
        </div>
        <div label="Dry Cleaning">
          <h2>Tab 2</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div label="Tailoring">
          <h2>Tab 3</h2>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </div>
      </Tabs>
      <style jsx>{`
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          padding-bottom: 12px;
          line-height: 1.15;
          font-size: 30px;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

Home.getInitialProps = ({ query }) => {
  return { query };
};
