import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";

import {  useState } from "react";
import { Navigate } from "react-router-dom";
import { Login } from "./Login";




export const Signup = () => {
  const initUser = { email: "", password: "", name: "" };
  const [user, setUser] = useState(initUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

   localStorage.setItem("login-data",JSON.stringify(user))
   Navigate("/login")
    };

  

  return (
    <>
   
      <Flex
        pt={"-200px"}
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        m="auto"
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading color={"#002E6E"} fontSize={"4xl"}>
              Create your account
            </Heading>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    focusBorderColor="#002E6E"
                    borderColor={"#002E6E"}
                    placeholder="Enter Name"
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    focusBorderColor={"#002E6E"}
                    placeholder="Enter @gmail.com"
                    borderColor={"#002E6E"}
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    focusBorderColor={"#002E6E"}
                    placeholder="Enter password ***"
                    borderColor={"#002E6E"}
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <Stack spacing={4}>
                  <Button
                    type="submit"
                    bg={"blue.500"}
                    color={"white"}
                    _hover={{
                      bg: "blue.600",
                    }}
                  >
                    Sign Up
                  </Button>
                
                
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
  
    </>
  );
};

