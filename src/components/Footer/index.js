import React from "react";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import "./styles.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-1">
          <Box
            bg={"#494a48"}
            pt={30}
            pb={30}
            borderBottom="1px solid #rgba(255,255,255,0.1)"
          >
            <Flex
              maxW={1170}
              justifyContent="space-between"
              alignItems="center"
              m="auto"
            >
              <Heading
                as="h3"
                fontWeight="700"
                m={0}
                color="white"
                cursor="pointer"
              >
                MAYBEROOM
              </Heading>
            </Flex>
          </Box>
        </div>
        <Box bg={"#494a48"} pt={30} pb={30}>
          <Box maxW={1170} m="auto" color="white">
            <ul>
              <li>
                <Link>JACKET</Link>
              </li>
              <li>
                <Link>BLAZER</Link>
              </li>
              <li>
                <Link>ACCESSORIES</Link>
              </li>
              <li>
                <Link>DRESS</Link>
              </li>
              <li>
                <Link>BOTTOM</Link>
              </li>
              <li>
                <Link>TOP</Link>
              </li>
              <li>
                <Link>SET</Link>
              </li>
            </ul>
            <span className="footer-2-text">Made with ❤️ by Itoa.vn</span>
          </Box>
        </Box>
      </div>
    </footer>
  );
};

export default Footer;
