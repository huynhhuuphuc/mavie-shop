import React, { useState } from "react";
import {
  Container,
  Text,
  Box,
  Grid,
  Flex,
  Link,
  Heading,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import "./styles.scss";

const arr = [
  {
    id: 1,
    img: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F606c5bee900f0d771cbec55c-phonto%204.jpg&w=1920&q=75",
    title: "PREMIUM",
  },
  {
    id: 2,
    img: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F6187a434e862666addba1792-AF360099-26AE-4000-8807-9C6B3308E869.jpg&w=1920&q=75",
    title: "JACKET",
  },
  {
    id: 3,
    img: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F6187a4b5e862666addba18ca-253342971_1177558152772528_8814378883088991280_n.jpg&w=1920&q=75",
    title: "BLAZER",
  },
  {
    id: 4,
    img: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F606c5e2f5b96e576f638b75d-a9c7ef8ecfa53dfb64b4.jpg&w=1920&q=75",
    title: "ACCESSORIES",
  },
];

const arr2 = [
  {
    id: 1,
    img: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F6006fe3e2f930a4d8890a09d-Reddie%20Bottom.jpg&w=1920&q=75",
    img2: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F603f432a129b1904bb2afd3e-0C82CA7C-B916-430A-8CA3-FA66FFC81AB6.jpg&w=1920&q=75",
    title: "Reddie Set",
    price: "690,000 ₫",
  },
  {
    id: 2,
    img: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F6006fe3e2f930a4d8890a09d-Reddie%20Bottom.jpg&w=1920&q=75",
    img2: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F603f432a129b1904bb2afd3e-0C82CA7C-B916-430A-8CA3-FA66FFC81AB6.jpg&w=1920&q=75",
    title: "Reddie Set",
    price: "690,000 ₫",
  },
  {
    id: 3,
    img: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F6006fe3e2f930a4d8890a09d-Reddie%20Bottom.jpg&w=1920&q=75",
    img2: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F603f432a129b1904bb2afd3e-0C82CA7C-B916-430A-8CA3-FA66FFC81AB6.jpg&w=1920&q=75",
    title: "Reddie Set",
    price: "690,000 ₫",
  },
];

const Directory = (props) => {
  const [listItem, setListItem] = useState(arr);
  const [listItem2, setListItem2] = useState(arr2);
  const onChange = (selector, img2) => {
    const imgSelector = document.getElementById(selector);
    imgSelector.src = img2;
  };
  const onChange2 = (selector, img) => {
    const imgSelector = document.getElementById(selector);
    imgSelector.src = img;
  };
  return (
    <div className="Directory">
      <div className="wrap">
        <Container maxW="container.xl">
          <Box pt={"5px"}>
            <Grid templateColumns="repeat(2, 1fr)" gap={2}>
              {listItem.map((item, index) => (
                <Link href="/search" key={index} pos={"relative"}>
                  <div className="Directory-container"></div>
                  <img src={item.img} alt="PREMIUM" />
                  <Flex
                    m="auto"
                    pos={"absolute"}
                    top={"50%"}
                    left={"50%"}
                    transform="translate(-50%,-50%)"
                    flexDirection={"column"}
                  >
                    <Heading
                      as="h2"
                      lineHeight="1.2"
                      fontSize={"1.4rem"}
                      fontWeight="700"
                      m={0}
                      color="white"
                      cursor="pointer"
                    >
                      {item.title}
                    </Heading>
                    <Link
                      fontSize={"1.2rem"}
                      color="white"
                      display="block"
                      textAlign="center"
                      mt={4}
                    >
                      Xem ngay
                    </Link>
                  </Flex>
                </Link>
              ))}
            </Grid>
          </Box>
          <Box textAlign="center" pt={"51px"}>
            <Link
              fontWeight="700"
              color="#000"
              fontSize="40px"
              lineHeight="1"
              textAlign="center"
              style={{
                borderBottom: "2px solid #000",
                textDecoration: "none",
              }}
            >
              HOT DEAL
            </Link>
          </Box>
          <Box pt={"6rem"}>
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
              {listItem2.map((item, index) => (
                <Box>
                  <Link
                    href="/search"
                    onMouseEnter={() => onChange(`img-${index}`, item.img2)}
                    onMouseLeave={() => onChange2(`img-${index}`, item.img)}
                  >
                    <img id={`img-${index}`} src={item.img} alt="hot deal" />
                  </Link>
                  <Box textAlign="center" mt={17.34}>
                    <Link
                      fontWeight="400"
                      color="#000"
                      fontSize="16px"
                      lineHeight="20px"
                      _hover={{
                        color: "#0a58ca",
                        borderBottom: "1px solid #0a58ca",
                      }}
                    >
                      {item.title}
                    </Link>
                    <Text
                      fontWeight="400"
                      color="
                    #B22222"
                      fontSize="16px"
                      lineHeight="20px"
                    >
                      {item.price}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Directory;
