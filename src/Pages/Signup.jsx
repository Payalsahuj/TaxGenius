import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading
} from "@chakra-ui/react";
// import axios from "axios";

import { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { handlepost } from "../Redux/logindata/action";





export const Signup = () => {
  const initUser = { email: "", password: "", username: "" };
  const [user, setUser] = useState(initUser);
  const navigate =useNavigate();
  const localdata=JSON.parse(localStorage.getItem("login-data")) || []
  
  const dispatch=useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    localdata.push(user)
    localStorage.setItem("login-data",JSON.stringify(localdata));
    dispatch(handlepost(user)).then(()=> navigate('/'))
  
   };



  return (
    <>
   
      <Flex
        pt={"150px"}
        // minH={"100vh"}
       
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
                    name="username"
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
                   LOGIN
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

