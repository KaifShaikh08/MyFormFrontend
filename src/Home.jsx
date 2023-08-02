import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context, api } from "./main";
import axios from "axios";
import { toast } from "react-hot-toast";

const Home = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const logoutHandler = async (e) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${api}/logout`,

        {
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(true);

      console.log(error);
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Button
            colorScheme="purple"
            right={"4"}
            onClick={logoutHandler}
            disabled={loading}
          >
            <Link to={"/"}>Log Out</Link>
          </Button>
        </Flex>
      ) : (
        <Flex justifyContent={"center"} alignItems={"center"} mt={"100"}>
          <Button colorScheme="purple" right={"4"}>
            <Link to={"/login"}>Log In</Link>
          </Button>
        </Flex>
      )}
    </>
  );
};
export default Home;
