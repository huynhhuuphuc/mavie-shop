import React, { useState } from "react";
import {
  Container,
  Box,
  chakra,
  Button,
  Flex,
  Link,
  Heading,
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./styles.scss";

const arrItem = [
  {
    img: "https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F606c5bee900f0d771cbec55c-phonto%204.jpg&w=1920&q=75",
    title: "ELLIE NO.1",
    price: "690,000 đ",
    size: "M",
  },
];

const Checkout = ({}) => {
  const [counter, setCounter] = useState(1);
  const increment = () => {
    setCounter((preState) => preState + 1);
  };
  const desc = () => {
    if (counter > 1) {
      setCounter((preState) => preState - 1);
    }
  };
  return (
    <div className="Checkout">
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
          <Link href="/search">Giỏ hàng</Link>
        </Container>
      </Box>

      <Box>
        <Box textAlign="center" m={"48px 0"}>
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
            GIỎ HÀNG
          </Link>
        </Box>
      </Box>

      <Container maxW="container.xl" padding="40px 16px 16px 16px">
        <Flex>
          <Box w={{ base: "100%", sm: "66.666%" }} padding="0 12px">
            {arrItem.map((item, index) => (
              <Flex justifyContent="space-between" mb={"10px"}>
                <Box>
                  <Flex>
                    <Box>
                      <Flex justifyContent="space-around">
                        <Box maxW={"100px"}>
                          <img src={item.img} alt="image" />
                        </Box>
                        <Box ml={"39px"}>
                          <Heading as={"h2"} fontSize="14px" lineHeight="20px">
                            {item.title}
                          </Heading>
                          <chakra.span
                            display="block"
                            as={"h2"}
                            fontSize="14px"
                            lineHeight="20px"
                          >
                            {item.price}
                          </chakra.span>
                          <chakra.span
                            display="block"
                            mt={"30px"}
                            as={"h2"}
                            fontSize="14px"
                            lineHeight="20px"
                          >
                            {item.size}
                          </chakra.span>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <Box mb={"16px"}>
                  <Flex>
                    <Button
                      onClick={() => desc()}
                      padding="0"
                      fontSize="14px"
                      color="rgb(144, 144, 144)"
                      lineHeight="24px"
                      minW="24px"
                      height="24px"
                      textAlign="center"
                      border="1px solid #E2E8F0"
                      fontWeight="400"
                      mr={"5px"}
                    >
                      -
                    </Button>
                    <Button
                      padding="0"
                      fontSize="14px"
                      color="rgb(144, 144, 144)"
                      lineHeight="24px"
                      minW="24px"
                      height="24px"
                      textAlign="center"
                      border="1px solid #E2E8F0"
                      bg="#fff"
                      mr={"5px"}
                      fontWeight="400"
                      cursor="default"
                      _hover={{
                        bg: "#fff",
                      }}
                      _focus={{
                        boxShadow: "0",
                      }}
                      _active={{
                        background: "none",
                      }}
                    >
                      {counter}
                    </Button>
                    <Button
                      onClick={() => increment()}
                      fontSize="14px"
                      padding="0"
                      color="rgb(144, 144, 144)"
                      lineHeight="24px"
                      minW="24px"
                      height="24px"
                      textAlign="center"
                      border="1px solid #E2E8F0"
                      mr={"5px"}
                      fontWeight="400"
                    >
                      +
                    </Button>
                  </Flex>
                  <chakra.span
                    display="block"
                    fontSize="14px"
                    lineHeight="20px"
                    color="#000"
                    fontWeight="500"
                  >
                    {item.price}
                  </chakra.span>
                  <Button
                    mt={"6px"}
                    lineHeight="24px"
                    minW="24px"
                    height="24px"
                  >
                    <RiDeleteBin6Line fontWeight="400" fontSize="12px" />
                  </Button>
                </Box>
              </Flex>
            ))}
          </Box>
          <Box w={{ base: "100%", sm: "33.333%" }} padding="0 12px">
            <Box border="1px solid #e2e8f0">
              <Flex
                justifyContent="space-between"
                alignItems="center"
                padding="10px 25px"
              >
                <chakra.span fontSize="14px" lineHeight="20px" color="#000">
                  Tổng tiền
                </chakra.span>
                <chakra.span fontSize="14px" lineHeight="20px" color="#000">
                  690,000 đ
                </chakra.span>
              </Flex>
              <Flex
                borderTop="1px solid #e2e8f0"
                alignItems="center"
                justifyContent="center"
                p={"8px 0"}
              >
                <Link href="/payment" style={{ textDecoration: "none" }}>
                  <Button
                    padding="0 30px"
                    h={"45px"}
                    bg={"#86590D"}
                    fontSize="14px"
                    lineHeight="45px"
                    fontWeight="500"
                    color="#fff"
                    borderRadius="50px"
                    _hover={{
                      bg: "#fff",
                      border: "1px solid #86590D",
                      color: "#86590D",
                    }}
                  >
                    Đặt hàng
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default Checkout;
