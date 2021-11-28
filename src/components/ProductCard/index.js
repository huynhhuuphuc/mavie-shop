import React, { useState } from "react";
import {
  Container,
  Text,
  Box,
  chakra,
  Button,
  Flex,
  Link,
  Heading,
  Grid,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import "./styles.scss";

const ProductCard = (props) => {
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
    <div className="productCard">
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
          <Link href="/search">Sản phẩm</Link>
          &nbsp;/&nbsp;<Link>Premium</Link>&nbsp;/&nbsp;<Link>Ellie No.1</Link>
        </Container>
      </Box>
      <Container maxW="container.xl" padding="40px 16px 16px 16px">
        <Box pt={"5px"}>
          <Flex>
            <Box w={{ base: "100%", sm: "50%" }} padding="0 12px">
              <img
                src="https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F606c5bee900f0d771cbec55c-phonto%204.jpg&w=1920&q=75"
                alt="image"
              />
              <Box m={"20px auto"}>
                <Flex>
                  <Link w={"48px"} href="#" marginRight="10px">
                    <img
                      src="https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F606c5bee900f0d771cbec55c-phonto%204.jpg&w=1920&q=75"
                      alt="image"
                    />
                  </Link>
                  <Link w={"48px"} href="#" marginRight="10px">
                    <img
                      src="https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F606c5bee900f0d771cbec55c-phonto%204.jpg&w=1920&q=75"
                      alt="image"
                    />
                  </Link>
                </Flex>
              </Box>
            </Box>
            <Box w={{ base: "100%", sm: "50%" }} padding="0 12px">
              <Box>
                <Heading
                  as="h1"
                  fontSize="28px"
                  color="rgb(0, 0, 0)"
                  lineHeight="1"
                  textTransform="none"
                >
                  Ellie No.1
                </Heading>
                <Box marginBottom="15px">
                  <chakra.span
                    fontWeight="500"
                    color="rgb(0, 0, 0)"
                    fontSize="14px"
                  >
                    Giá:
                  </chakra.span>
                  <chakra.span
                    fontSize="28px"
                    paddingLeft="15px"
                    display="inline-block"
                    color="#b22222"
                    fontWeight="bold"
                  >
                    690,000 ₫
                  </chakra.span>
                </Box>
                <Box fontSize="16px" fontWeight="600" marginBottom="15px">
                  Trạng thái :
                  <chakra.span
                    color="#b22222"
                    display="inline-block"
                    marginLeft="5px"
                    cursor="default"
                    fontSize="16px"
                  >
                    Còn hàng
                  </chakra.span>
                </Box>
                <Box>
                  <Text
                    fontSize="14px"
                    color="rgb(102, 102, 102)"
                    marginBottom="30px"
                    marginTop="10px"
                  ></Text>
                </Box>
              </Box>
              <Box
                borderTop="1px solid #E2E8F0"
                borderBottom="1px solid #E2E8F0"
                p={"30px 0"}
              >
                <Flex>
                  <Box w={{ base: "100%", sm: "50%" }}>
                    <Box mb={"16px"}>
                      <chakra.span
                        fontSize="14px"
                        color="#000"
                        lineHeight="20px"
                        mb={"7px"}
                        display="block"
                        fontWeight="400"
                      >
                        Size
                      </chakra.span>
                      <Box mb={"0.5rem"}>
                        <Flex>
                          <Button
                            fontSize="12px"
                            lineHeight="33px"
                            minW="33px"
                            height="33px"
                            textAlign="center"
                            border="1px solid #E2E8F0"
                            bg="#fff"
                            fontWeight="400"
                            mr={"5px"}
                          >
                            S
                          </Button>
                          <Button
                            fontSize="12px"
                            lineHeight="33px"
                            minW="33px"
                            height="33px"
                            textAlign="center"
                            border="1px solid #E2E8F0"
                            bg="#fff"
                            mr={"5px"}
                            fontWeight="400"
                          >
                            M
                          </Button>
                          <Button
                            fontSize="12px"
                            lineHeight="33px"
                            minW="33px"
                            height="33px"
                            textAlign="center"
                            border="1px solid #E2E8F0"
                            bg="#fff"
                            mr={"5px"}
                            fontWeight="400"
                          >
                            L
                          </Button>
                        </Flex>
                      </Box>
                    </Box>
                    <Box mb={"16px"}>
                      <chakra.span
                        fontSize="14px"
                        color="#000"
                        lineHeight="20px"
                        fontWeight="400"
                        mb={"7px"}
                        display="block"
                      >
                        Màu sắc
                      </chakra.span>
                      <Box>
                        <Flex>
                          <Button
                            fontSize="12px"
                            lineHeight="33px"
                            minW="33px"
                            height="33px"
                            textAlign="center"
                            border="1px solid #E2E8F0"
                            bg="#fff"
                            fontWeight="400"
                            mr={"5px"}
                          >
                            Đen
                          </Button>
                          <Button
                            fontSize="12px"
                            lineHeight="33px"
                            minW="33px"
                            height="33px"
                            textAlign="center"
                            border="1px solid #E2E8F0"
                            bg="#fff"
                            mr={"5px"}
                            fontWeight="400"
                          >
                            Trắng
                          </Button>
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Box mb={"16px"}>
                      <Flex>
                        <Button
                          onClick={() => desc()}
                          fontSize="18px"
                          color="rgb(144, 144, 144)"
                          lineHeight="48px"
                          minW="48px"
                          height="48px"
                          textAlign="center"
                          border="1px solid #E2E8F0"
                          bg="#fff"
                          fontWeight="400"
                          mr={"5px"}
                        >
                          -
                        </Button>
                        <Button
                          fontSize="18px"
                          color="rgb(144, 144, 144)"
                          lineHeight="48px"
                          minW="48px"
                          height="48px"
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
                          fontSize="18px"
                          color="rgb(144, 144, 144)"
                          lineHeight="48px"
                          minW="48px"
                          height="48px"
                          textAlign="center"
                          border="1px solid #E2E8F0"
                          bg="#fff"
                          mr={"5px"}
                          fontWeight="400"
                        >
                          +
                        </Button>
                      </Flex>
                    </Box>
                    <Box>
                      <Link href="/cart" style={{ textDecoration: "none" }}>
                        <Button
                          bg={"#86590D"}
                          p={"0 30px"}
                          height="45px"
                          borderRadius="50px"
                          fontSize="13px"
                          lineHeight="20px"
                          color="#fff"
                          _hover={{
                            bg: "#fff",
                            border: "1px solid #86590D",
                            color: "#86590D",
                          }}
                        >
                          THÊM VÀO GIỎ
                        </Button>
                      </Link>
                    </Box>
                    <Box mt={"15px"}>
                      <chakra.span
                        fontSize="14px"
                        lineHeight="20px"
                        color="#000"
                      >
                        Vui lòng chọn thuộc tính
                      </chakra.span>
                    </Box>
                  </Box>
                </Flex>
              </Box>
              <Box borderBottom="1px solid #E2E8F0" p={"26px 0"}>
                <Box>
                  <chakra.span
                    color="#545454"
                    fontSize="14px"
                    lineHeight="20px"
                    fontWeight="700"
                  >
                    Mã sản phẩm :{" "}
                  </chakra.span>
                  <chakra.span
                    marginLeft="135px"
                    fontSize="15px"
                    color="#545454"
                    lineHeight="20px"
                    fontWeight="400"
                  >
                    ellie-no-1
                  </chakra.span>
                </Box>
              </Box>
              <Box borderBottom="1px solid #E2E8F0">
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontSize="14px"
                          color="#000"
                        >
                          Hướng dẫn chọn Size
                        </Box>
                        <AccordionIcon fontSize="20px" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize="14px" color="#000">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
              <Box borderBottom="1px solid #E2E8F0">
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontSize="14px"
                          color="#000"
                        >
                          Quy định đổi trả / hoàn tiền
                        </Box>
                        <AccordionIcon fontSize="20px" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize="14px" color="#000">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box pt={"49px"}>
          <Box padding="0 12px">
            <Flex borderBottom="2px solid #E2E8F0">
              <Button
                color="#2B6CB0"
                borderRadius="0"
                bg="#fff"
                fontSize="16px"
                lineHeight="20px"
                padding="8px 16px"
                height="none"
                borderBottomWidth="2px"
                borderColor="currentcolor"
              >
                Mô tả
              </Button>
            </Flex>
            <Box padding="0 8px">
              <Text>
                culpa ipsum consectetur occaecat dolor est minim fugiat sint
                aliquip fugiat veniam dolore incididunt est qui enim minim ad
                adipisicing aliqua in qui culpa veniam duis minim nostrud
                eiusmod dolore mollit in culpa culpa enim voluptate aliqua enim
                cillum quis Lorem mollit duis est officia cillum consectetur
                adipisicing id sunt veniam minim amet velit do cupidatat ea
                occaecat culpa incididunt in est elit pariatur magna veniam enim
                occaecat do velit sunt est voluptate eiusmod laboris laboris
                ipsum consectetur laborum elit sit nisi deserunt pariatur
                deserunt in eu deserunt ex incididunt deserunt in ut nulla aute
                ad laboris duis id excepteur minim esse aliquip velit ullamco
                exercitation cupidatat velit esse eiusmod non ullamco fugiat eu
                laborum ut reprehenderit qui proident id occaecat esse minim
                consequat anim sit aliquip ullamco pariatur magna tempor qui
                officia ut laboris eiusmod laboris ex ullamco elit dolor ullamco
                sunt velit aliqua culpa culpa do ullamco nulla in ullamco in
                sint irure officia et dolor in dolor laborum consequat sint
                culpa exercitation dolore ullamco magna deserunt excepteur
                cillum reprehenderit tempor mollit ad in tempor occaecat laborum
                veniam pariatur officia occaecat ut nulla Lorem pariatur enim
                incididunt labore veniam ad fugiat magna irure consequat labore
                voluptate ullamco pariatur magna tempor qui officia ut laboris
                eiusmod laboris ex ullamco elit dolor ullamco sunt velit aliqua
                culpa culpa do ullamco nulla in ullamco in sint irure officia et
                dolor in dolor laborum consequat sint culpa exercitation dolore
                ullamco magna deserunt excepteur cillum reprehenderit tempor
                mollit ad in tempor occaecat laborum veniam pariatur
              </Text>
            </Box>
          </Box>
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
            SẢN PHẨM LIÊN QUAN
          </Link>
        </Box>
        <Box pt={"6rem"}>
          <Grid templateColumns="repeat(3, 1fr)" gap={2}>
            <Box>
              <Link>
                <img
                  src="https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F606c5bee900f0d771cbec55c-phonto%204.jpg&w=1920&q=75"
                  alt="images"
                />
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
                  Reddie Set
                </Link>
                <Text
                  fontWeight="400"
                  color="
                    #B22222"
                  fontSize="16px"
                  lineHeight="20px"
                >
                  690,000 đ
                </Text>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ProductCard;
