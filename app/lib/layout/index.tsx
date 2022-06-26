import { Box, Stack } from "@chakra-ui/react";

import Footer from "./Footer";
import Nav from "./Nav";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      transition="0.5s ease-out"
      bg="gray.900"
      color="gray.200"
      minH="100vh"
      py={3}
    >
      <Nav />
      <Stack w={900} mx="auto" my={10} spacing="2rem" align="start">
        <Box as="main" w={900} mx="auto">
          {children}
        </Box>
        <Footer />
      </Stack>
    </Box>
  );
};

export default Layout;
