import React from "react";
import { Box, Text, useDisclosure, Collapse } from "@chakra-ui/react";
import { useEffect } from "react";
import { motion } from "framer-motion";
const MotionBox = motion(Box);

const Footer = () => {
  return (
    <MotionBox as="footer" width="full" p={4} bg="gray.200" textAlign="center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Text>&copy; {new Date().getFullYear()} My Company</Text>
    </MotionBox>
  );
};

export default Footer;
