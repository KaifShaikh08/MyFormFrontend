import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Context, api } from "./main";
import { toast } from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${api}/register`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setIsAuthenticated(true);
    } catch (error) {
      toast.error("some error");
      setIsAuthenticated(false);
      console.log(error);
    }
  };

  if (isAuthenticated) return <Navigate to={"/home"} />;

  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form onSubmit={submitHandler}>
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
        >
          <Heading>Create Your Account</Heading>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            type="name"
            required
            focusBorderColor="purple.500"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            type="email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            type="password"
            required
            focusBorderColor="purple.500"
          />
          <Button colorScheme="purple" type="submit">
            Sign Up
          </Button>
          <Text textAlign={"right"}>
            Already have an account?
            {"   "}
            <Button variant={"link"} colorScheme={"purple"}>
              <Link to={"/login"}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Register;
