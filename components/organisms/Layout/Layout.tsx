import Link from "next/link";
import React, { ReactElement } from "react";
import { Container, Header } from "./styles";

interface LayoutProps {
  children?: ReactElement;
  className?: string;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Link href="/" passHref={true}>
        <Header>Dashboard</Header>
      </Link>
      {children}
    </Container>
  );
};

export default Layout;
