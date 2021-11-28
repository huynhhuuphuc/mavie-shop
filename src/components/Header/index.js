import React, { useState } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { FaRegMoon } from "react-icons/fa";
// import { BsLightbulb } from "react-icons/bs";
// import { useColorMode } from "@chakra-ui/color-mode";
import ModalSearch from "../Modal Search";
import "./styles.scss";

const arrLink = [
  {
    id: 1,
    link: "JACKET",
  },
  {
    id: 2,
    link: "BLAZER",
  },
  {
    id: 3,
    link: "ACCESSORIES",
  },
  {
    id: 3,
    link: "DRESS",
  },
  {
    id: 4,
    link: "BOTTOM",
  },
  {
    id: 5,
    link: "TOP",
  },
  {
    id: 6,
    link: "SET",
  },
  {
    id: 7,
    link: "HOT DEAL",
  },
];

const Header = (props) => {
  const [listLink, setListLink] = useState(arrLink);
  // const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();
  return (
    <header className="header">
      <Box pos={"fixed"} zIndex={1} w={"100%"} bg={"#494a48"} p={15}>
        <Flex
          maxW={1170}
          justifyContent="space-between"
          alignItems="center"
          m="auto"
        >
          <Link href="/">
            <Heading
              href="/"
              as="h3"
              fontWeight="700"
              m={0}
              color="white"
              cursor="pointer"
            >
              MAYBEROOM
            </Heading>
          </Link>
          <Box color="white" display="flex">
            {listLink.map((item, index) => (
              <ul style={{ display: "flex", margin: 0 }}>
                <li>
                  <Link
                    key={index}
                    href="/search"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {item.link}
                  </Link>
                </li>
              </ul>
            ))}
            <ul style={{ display: "flex" }}>
              <li>
                <Box cursor="pointer" onClick={onOpen}>
                  <BsSearch />
                </Box>
              </li>
              <li className="cart-item">
                <AiOutlineShoppingCart fontSize={"2rem"} />
                <span>3</span>
              </li>
              {/* <li onClick={toggleColorMode}>
                <Box cursor="pointer">
                  {colorMode == "light" ? <BsLightbulb /> : <FaRegMoon />}
                </Box>
              </li> */}
            </ul>
          </Box>
        </Flex>
      </Box>
      {isOpen && (
        <ModalSearch isOpen={isOpen} onClose={onClose} finalRef={finalRef} />
      )}
    </header>
  );
};

export default Header;
