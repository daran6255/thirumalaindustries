import React from "react";
import { Flex, Box } from "@chakra-ui/react";

const CenteredSpinner: React.FC = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="brand.main" // optional background
    >
      <Box
        className="loader"
        w="48px"
        h="48px"
        position="relative"
      />

      {/* keyframes + CSS for loader */}
      <style>
        {`
          .loader {
            width: 48px;
            height: 48px;
            position: relative;
            animation: rotate 4s linear infinite;
          }
          .loader::before,
          .loader::after {
            content: "";
            display: block;
            border: 24px solid;
            border-color: transparent transparent #77BEF0 #FFCB61;
            position: absolute;
            left: 0;
            top: 0;
            animation: mvx 1s infinite ease-in;
          }
          .loader::before {
            left: -1px;
            top: 1px;
            border-color: #FF894F #EA5B6F transparent transparent;
            animation-name: mvrx;
          }

          @keyframes rotate {
            100% { transform: rotate(360deg); }
          }
          @keyframes mvx {
            0%, 15% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-50%, 50%) rotate(180deg); }
            100% { transform: translate(0%, 0%) rotate(180deg); }
          }
          @keyframes mvrx {
            0%, 15% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(50%, -50%) rotate(180deg); }
            100% { transform: translate(0%, 0%) rotate(180deg); }
          }
        `}
      </style>
    </Flex>
  );
};

export default CenteredSpinner;
