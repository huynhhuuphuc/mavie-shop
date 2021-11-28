import React, { useState } from "react";
import {
  Container,
  Box,
  chakra,
  Input,
  Divider,
  Select,
  Button,
  Flex,
  Textarea,
  Grid,
  Text,
  Link,
  Heading,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./styles.scss";

const Order = ({}) => {
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
    <div className="Order">
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

      <Container maxW="1140px">
        <Box padding="34px 0">
          <Grid templateColumns="repeat(3, minmax(0px, 1fr))" gap={4}>
            <Flex padding="12px" border="1px solid #E2E8F0" borderRadius="8px">
              <Box w="100%">
                <Heading as="h2" fw="700" lineHeight="1.2" fontSize="20px">
                  Thông tin nhận hàng
                </Heading>
                <Divider
                  mt="12px"
                  h="1px"
                  opacity="0.6"
                  w="100%"
                  borderBottom="1px solid #000"
                />
                <Box mt={"12px"}>
                  <Text fontSize="14px" fw="400" lineHeight="1.5">
                    Họ tên
                    <chakra.span color="red"> *</chakra.span>
                  </Text>
                  <Input placeholder="Họ tên" fontSize="16px" height="40px" />
                </Box>
                <Box mt={"12px"}>
                  <Text fontSize="14px" fw="400" lineHeight="1.5">
                    Số điện thoại
                    <chakra.span color="red"> *</chakra.span>
                  </Text>
                  <Input
                    placeholder="Số điện thoại"
                    fontSize="16px"
                    height="40px"
                  />
                </Box>
                <Box mt={"12px"}>
                  <Text fontSize="14px" fw="400" lineHeight="1.5">
                    Địa chỉ
                    <chakra.span color="red"> *</chakra.span>
                  </Text>
                  <Box mt="12px">
                    <Select
                      placeholder="Tỉnh/Thành"
                      height="40px"
                      fontSize="16px"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Box>
                  <Box mt="12px">
                    <Select
                      placeholder="Quận/Huyện"
                      height="40px"
                      fontSize="16px"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Box>
                  <Box mt="12px">
                    <Select
                      placeholder="Phường/Xã"
                      height="40px"
                      fontSize="16px"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Box>
                  <Box mt="12px">
                    <Input
                      placeholder="Tên đường, số nhà, thôn,..."
                      fontSize="16px"
                      height="40px"
                    />
                  </Box>
                  <Box mt="12px">
                    <Text fontSize="14px" fw="400" lineHeight="1.5">
                      Ghi chú & Thông tin thêm
                      <chakra.span color="red"> *</chakra.span>
                    </Text>
                    <Text
                      fontSize="14px"
                      fw="400"
                      lineHeight="1.5"
                      color="#718096"
                      mb="12px"
                    >
                      Vui lòng cung cấp thêm thông tin khi không thể liên hệ bạn
                      bằng điện thoại. Ví dụ: Instagram, Facebook, Gmail,...
                    </Text>
                    <Textarea fontSize="16px" />
                  </Box>
                  <Text fontSize="14px" fw="400" lineHeight="1.5" mt="12px">
                    <chakra.span color="red">* </chakra.span>
                    Thông tin bắt buộc
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Flex padding="12px" border="1px solid #E2E8F0" borderRadius="8px">
              <Box w="100%">
                <Heading as="h2" fw="700" lineHeight="1.2" fontSize="20px">
                  Vận chuyển
                </Heading>
                <Divider
                  mt="12px"
                  h="1px"
                  opacity="0.6"
                  w="100%"
                  borderBottom="1px solid #000"
                />
                <Box mt={"16px"} mb={"24px"}>
                  <Text fontSize="14px">
                    🚚 Đồng giá ship 30.000đ toàn quốc.
                  </Text>
                </Box>
                <Heading as="h2" fw="700" lineHeight="1.2" fontSize="20px">
                  THANH TOÁN
                </Heading>
                <Box mt={"16px"}>
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
                            📦 Thanh toán khi nhận hàng (COD)
                          </Box>
                          <AccordionIcon fontSize="20px" />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4} fontSize="14px" color="#000">
                        Bạn chỉ phải thanh toán khi nhận hàng. Thời gian giao
                        hàng dự kiến từ 2-3 ngày.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
                <Box>
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
                            🏦 Chuyển khoản ngân hàng
                          </Box>
                          <AccordionIcon fontSize="20px" />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4} fontSize="14px" color="#000">
                        Techcombank
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
              </Box>
            </Flex>
            <Flex padding="12px" border="1px solid #E2E8F0" borderRadius="8px">
              <Box w="100%">
                <Heading as="h2" fw="700" lineHeight="1.2" fontSize="20px">
                  Đơn hàng (1 sản phẩm)
                </Heading>
                <Divider
                  mt="12px"
                  h="1px"
                  opacity="0.6"
                  w="100%"
                  borderBottom="1px solid #000"
                />
                <Box margin="16px 0">
                  <Box mb="12px" border="1px solid #e2e8f0" borderRadius="7px">
                    <Flex alignItems="center">
                      <Box paddingLeft="8px">
                        <img
                          src="https://mayberoom.vn/loader?url=%2Fupload%2Fimg%2Fsm%2F606c5bee900f0d771cbec55c-phonto%204.jpg&w=1920&q=75"
                          alt="image"
                          width="114.67"
                        />
                      </Box>
                      <Box p="8px 8px 8px 26px" flex="1">
                        <Box>
                          <chakra.span
                            display="block"
                            fontSize="14px"
                            fontWeight="500"
                          >
                            1 - Ellie No.1
                          </chakra.span>
                          <chakra.span
                            display="block"
                            fontSize="24px"
                            fontWeight="600"
                          >
                            690,000 ₫
                          </chakra.span>
                          <chakra.span
                            display="block"
                            opacity="0.8"
                            fontSize="14px"
                            fontWeight="400"
                            marginBottom="4px"
                          >
                            690,000 ₫
                          </chakra.span>
                        </Box>
                        <Box>
                          <chakra.span fontSize="14px" marginLeft="4px">
                            L
                          </chakra.span>
                        </Box>
                        <Box mb={"16px"}>
                          <Flex alignItems="center">
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
                            <Button
                              lineHeight="24px"
                              minW="20px"
                              height="24px"
                              bg="#ba7715"
                              _hover={{
                                bg: "#d69e2e",
                              }}
                            >
                              <RiDeleteBin6Line
                                fontWeight="400"
                                fontSize="12px"
                              />
                            </Button>
                          </Flex>
                        </Box>
                      </Box>
                    </Flex>
                  </Box>
                  <Flex justifyContent="space-between">
                    <chakra.span fontSize="14px">Tạm tính:</chakra.span>
                    <chakra.span fontSize="14px">690,000 ₫</chakra.span>
                  </Flex>
                  <Flex justifyContent="space-between" mb="20px">
                    <chakra.span fontSize="14px">Vận chuyển:</chakra.span>
                    <chakra.span fontSize="14px">🚚 690,000 ₫</chakra.span>
                  </Flex>
                  <Input
                    placeholder="Mã giảm giá"
                    fontSize="16px"
                    height="40px"
                  />
                  <Flex
                    mt="34px"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <chakra.span fontSize="14px">Tổng cộng:</chakra.span>
                    <chakra.span fontSize="14px" color="#b22222">
                      690,000 ₫
                    </chakra.span>
                  </Flex>
                  <Link
                    href="/cart"
                    mt="16px"
                    display="block"
                    fontSize="14px"
                    color="blue"
                    _focus={{
                      boxShadow: "0",
                    }}
                  >
                    Quay về giỏ hàng
                  </Link>
                  <Button
                    marginTop="16px"
                    h={"45px"}
                    w={"100%"}
                    bg={"#fff"}
                    fontSize="14px"
                    border="1px solid #b7791f"
                    lineHeight="45px"
                    fontWeight="500"
                    color="#b7791f"
                    borderRadius="4px"
                    _hover={{
                      bg: "#fffff0",
                      border: "1px solid #86590D",
                      color: "#b7791f",
                    }}
                  >
                    Đặt hàng
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Order;
