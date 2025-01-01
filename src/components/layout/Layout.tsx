import { Flex } from "@mantine/core";
import { ReactNode } from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";
import BuyMeACoffeeWidget from "../BuyMeACoffeeWidget";
import ClientOnly from "../common/ClientOnly";


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ClientOnly>
      <Flex
        direction="column"
        align="flex-start"
        justify="space-between"
        m="auto"
        mih="100%"
        maw={960}
        py={40}
        px={20}
        gap={20}
      >
        <NavBar />
        {children}
        <Footer />
        <BuyMeACoffeeWidget />
        
      </Flex>
    </ClientOnly>
  );
};

export default Layout;
