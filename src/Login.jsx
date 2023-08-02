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
import { Context, api } from "./main";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${api}/login`,
        {
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
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      setLoading(true);

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
          <Heading>Welcome Back</Heading>
          <Input
            placeholder="Enter Your Email"
            type="email"
            required
            focusBorderColor="purple.500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Enter Your Password"
            type="password"
            required
            focusBorderColor="purple.500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button disabled={loading} colorScheme="purple" type="submit">
            Login
          </Button>
          <Text textAlign={"right"}>
            New User?
            {"  "}
            <Button variant={"link"} colorScheme={"purple"}>
              <Link to={"/"}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
