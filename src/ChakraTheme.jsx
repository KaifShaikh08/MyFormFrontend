import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons"; // Import the Sun and Moon icons

const ChakraTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Button
        pos={"fixed"}
        top={"3"}
        right={"3"}
        onClick={toggleColorMode}
        leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      ></Button>
    </div>
  );
};

export default ChakraTheme;
