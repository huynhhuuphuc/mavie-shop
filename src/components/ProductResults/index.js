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
import { IoMdArrowBack } from "react-icons/io";
import "./styles.scss";

const arrLink = [
  {
    link: "Set",
  },
  {
    link: "Top",
  },
  {
    link: "Bottom",
  },
  {
    link: "Dress",
  },
  {
    link: "Accessories",
  },
  {
    link: "Blazer",
  },
  {
    link: "Jacket",
  },
];

const arrimg = [
  {
    id: 1,
    img: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F6168380a89b1c14d0e25c1a4-C534200C-665E-419B-856F-82738CA5AE92.jpg&w=1920&q=75",
    title: "Beatrix Blazer",
    price: "425,000 đ",
  },
  {
    id: 2,
    img: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F6168380a89b1c14d0e25c1a4-C534200C-665E-419B-856F-82738CA5AE92.jpg&w=1920&q=75",
    title: "Beatrix Blazer",
    price: "425,000 đ",
  },
  {
    id: 3,
    img: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F6168380a89b1c14d0e25c1a4-C534200C-665E-419B-856F-82738CA5AE92.jpg&w=1920&q=75",
    title: "Beatrix Blazer",
    price: "425,000 đ",
  },
  {
    id: 4,
    img: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F6168380a89b1c14d0e25c1a4-C534200C-665E-419B-856F-82738CA5AE92.jpg&w=1920&q=75",
    title: "Beatrix Blazer",
    price: "425,000 đ",
  },
  {
    id: 5,
    img: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F6168380a89b1c14d0e25c1a4-C534200C-665E-419B-856F-82738CA5AE92.jpg&w=1920&q=75",
    title: "Beatrix Blazer",
    price: "425,000 đ",
  },
  {
    id: 6,
    img: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F6168380a89b1c14d0e25c1a4-C534200C-665E-419B-856F-82738CA5AE92.jpg&w=1920&q=75",
    title: "Beatrix Blazer",
    price: "425,000 đ",
  },
];

const ProductResults = ({}) => {
  return (
    <div className="productResults">
      <div className="wrap">
        <Box zIndex={1} w={"100%"} bg={"#efefef"} p={0}>
          <Container
            maxW={1170}
            paddingTop="8px"
            paddingBottom="8px"
            display="flex"
            color="#999"
            fontSize="12px"
          >
            <Link href="/" marginLeft="13px" marginRight="21px" fontSize="18px">
              <IoMdArrowBack />
            </Link>
            <Link href="/">Trang chủ</Link>&nbsp;/&nbsp;
            <Link href="/search">Danh mục</Link>
          </Container>
        </Box>
        <Container paddingTop="40px" maxW="container.xl" minHeight="70vh">
          <Flex>
            <Box
              w={{ base: 0, sm: "25%" }}
              visibility={{ base: "hidden", sm: "visible" }}
            >
              <Heading as="h2" fontSize="18px" marginBottom="10px">
                Danh mục sản phẩm
              </Heading>
              {arrLink.map((item, index) => (
                <>
                  <Link
                    key={index}
                    display="block"
                    color="#434343"
                    fontSize="13px"
                    marginTop="15px"
                    textDecoration="none"
                    _hover={{ color: "#86590d" }}
                  >
                    {item.link}
                  </Link>
                </>
              ))}
            </Box>
            <Box w={{ base: "100%", sm: "75%" }}>
              <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                {arrimg.map((item, index) => (
                  <Box>
                    <Link href="/detail">
                      <img src={item.img} alt="hot deal" />
                    </Link>
                    <Box textAlign="center" mt={17.34}>
                      <Link
                        href="/detail"
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
              <Box mt={"10px"} mb={"10px"}>
                <Flex
                  w={"200px"}
                  h={"200px"}
                  border="1px solid"
                  borderColor="gray.200"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="14px"
                  cursor="pointer"
                  fontWeight="400"
                >
                  Xem thêm
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default ProductResults;
