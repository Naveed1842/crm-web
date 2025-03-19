"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Replace useRouter with usePathname
import { AppBar, Tabs, Tab } from '@mui/material';

const NavBar = () => {
  const currentPath = usePathname(); // Get the current path

  return (
    <AppBar position="static">
      <Tabs value={currentPath} aria-label="navigation tabs">
        <Tab label="Home" value="/" component={Link} href="/" />
        <Tab label="People" value="/people" component={Link} href="/people" />
        <Tab label="Companies" value="/companies" component={Link} href="/companies" />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;