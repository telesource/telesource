import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, useMediaQuery, useTheme, Box, List, ListItem, ListItemText, Collapse, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/NavbarStyles.module.css'; // Import as a module


export default function Navbar() {
  const [serviceAnchorEl, setServiceAnchorEl] = useState(null);
  const [productAnchorEl, setProductAnchorEl] = useState(null);
  const [businessAnchorEl, setBusinessAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));


  const handleServiceMenuClick = (event) => {
    setServiceAnchorEl(event.currentTarget);
  };

  const handleProductMenuClick = (event) => {
    setProductAnchorEl(event.currentTarget);
  };

  const handleBusinessMenuClick = (event) => {
    setBusinessAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setServiceAnchorEl(null);
    setProductAnchorEl(null);
    setBusinessAnchorEl(null);
    setMobileMenuOpen(false);
  };

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleServicesClick = () => {
    setServicesOpen(!servicesOpen);
  };

  const handleProductsClick = () => {
    setProductsOpen(!productsOpen);
  };

  const handleBusinessClick = () => {
    setBusinessOpen(!businessOpen);
  };

  const mobileMenuItems = (
    <List>
      <Link href="/" passHref><ListItem button><ListItemText primary="Home" /></ListItem></Link>
      <Link href="/about" passHref><ListItem button><ListItemText primary="About" /></ListItem></Link>
      <ListItem button onClick={handleServicesClick}>
        <ListItemText primary="Services" />
        {servicesOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link href="/tele-calling-solutions" passHref><ListItem button><ListItemText primary="Tele-Calling Solutions" /></ListItem></Link>
          <Link href="/digital-media-solutions" passHref><ListItem button><ListItemText primary="Digital Media Solutions" /></ListItem></Link>
          <Link href="/conversational-gen-ai" passHref><ListItem button><ListItemText primary="Conversational Gen-AI" /></ListItem></Link>
        </List>
      </Collapse>
      <ListItem button onClick={handleProductsClick}>
        <ListItemText primary="Products" />
        {productsOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={productsOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link href="/i-verifier" passHref><ListItem button><ListItemText primary="I-Verifier" /></ListItem></Link>
          <Link href="/data-miner" passHref><ListItem button><ListItemText primary="Data Miner" /></ListItem></Link>
          <Link href="/e-commerce-plugin" passHref><ListItem button><ListItemText primary="E-Commerce Plugin" /></ListItem></Link>
          <Link href="/whatsapp-solutions" passHref><ListItem button><ListItemText primary="WhatsApp Solutions" /></ListItem></Link>
          <Link href="/chatbot" passHref><ListItem button><ListItemText primary="Chat Bot" /></ListItem></Link>
        </List>
      </Collapse>
      <ListItem button onClick={handleBusinessClick}>
        <ListItemText primary="Business" />
        {businessOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={businessOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link href="/bfsi-and-nbfc" passHref><ListItem button><ListItemText primary="BFSI & NBFC" /></ListItem></Link>
          <Link href="/renewal-power" passHref><ListItem button><ListItemText primary="Renewal Power" /></ListItem></Link>
          <Link href="/healthcare" passHref><ListItem button><ListItemText primary="Healthcare" /></ListItem></Link>
          <Link href="/media" passHref><ListItem button><ListItemText primary="Media" /></ListItem></Link>
          <Link href="/insurance" passHref><ListItem button><ListItemText primary="Insurance" /></ListItem></Link>
          <Link href="/psu" passHref><ListItem button><ListItemText primary="PSU" /></ListItem></Link>
          <Link href="/retail-and-e-commerce" passHref><ListItem button><ListItemText primary="Retail & E-Commerce" /></ListItem></Link>
          <Link href="/technology" passHref><ListItem button><ListItemText primary="Technology" /></ListItem></Link>
          <Link href="/telecom" passHref><ListItem button><ListItemText primary="Telecom" /></ListItem></Link>
          <Link href="/travel-and-hospitality" passHref><ListItem button><ListItemText primary="Travel & Hospitality" /></ListItem></Link>
          <Link href="/real-estate-and-infrastructure" passHref><ListItem button><ListItemText primary="Real Estate & Infrastructure" /></ListItem></Link>
          <Link href="/automotive" passHref><ListItem button><ListItemText primary="Automotive" /></ListItem></Link>
        </List>
      </Collapse>
      <Link href="/customer-stories" passHref><ListItem button><ListItemText primary="Customer Stories" /></ListItem></Link>
      <Link href="/contact-us" passHref><ListItem button><ListItemText primary="Contact Us" /></ListItem></Link>
      <Link href="/contact-us" passHref><ListItem button><ListItemText primary="Book A Demo" /></ListItem></Link>
    </List>
  );

  const desktopMenuItems = (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <Link href="/" passHref><Button color="inherit" className={styles.linkButton}>Home</Button></Link>
      <Link href="/about" passHref><Button color="inherit" className={styles.linkButton}>About</Button></Link>
      <Button 
        color="inherit" className={styles.linkButton} 
        endIcon={<ArrowDropDownIcon />} 
        onClick={handleServiceMenuClick}
        >
        Services
      </Button>
      <Menu
        id="service-menu"
        anchorEl={serviceAnchorEl}
        keepMounted
        open={Boolean(serviceAnchorEl)}
        onClose={handleClose}
      >
        <Link href="/tele-calling-solutions" passHref><MenuItem  onClick={handleClose}>Tele-Calling Solutions</MenuItem></Link>
        <Link href="/digital-media-solutions" passHref><MenuItem onClick={handleClose}>Digital Media Solutions</MenuItem></Link>
        <Link href="/conversational-gen-ai" passHref><MenuItem onClick={handleClose}>Conversational Gen-AI</MenuItem></Link>
      </Menu>
      <Button color="inherit" className={styles.linkButton} endIcon={<ArrowDropDownIcon />} onClick={handleProductMenuClick}>
        Products
      </Button>
      <Menu
        id="product-menu"
        anchorEl={productAnchorEl}
        keepMounted
        open={Boolean(productAnchorEl)}
        onClose={handleClose}
      >
        <Link href="/i-verifier" passHref><MenuItem onClick={handleClose}>I-Verifier</MenuItem></Link>
        <Link href="/data-miner" passHref><MenuItem onClick={handleClose}>Data Miner</MenuItem></Link>
        <Link href="/e-commerce-plugin" passHref><MenuItem onClick={handleClose}>E-Commerce Plugin</MenuItem></Link>
        <Link href="/whatsapp-solutions" passHref><MenuItem onClick={handleClose}>WhatsApp Solutions</MenuItem></Link>
        <Link href="/chatbot" passHref><MenuItem onClick={handleClose}>Chat Bot</MenuItem></Link>
      </Menu>
      <Button color="inherit" className={styles.linkButton} endIcon={<ArrowDropDownIcon />} onClick={handleBusinessMenuClick}>
        Business
      </Button>
      <Menu
        id="business-menu"
        anchorEl={businessAnchorEl}
        keepMounted
        open={Boolean(businessAnchorEl)}
        onClose={handleClose}
      >
        <Link href="/bfsi-and-nbfc" passHref><MenuItem onClick={handleClose}>BFSI & NBFC</MenuItem></Link>
        <Link href="/renewal-power" passHref><MenuItem onClick={handleClose}>Renewal Power</MenuItem></Link>
        <Link href="/healthcare" passHref><MenuItem onClick={handleClose}>Healthcare</MenuItem></Link>
        <Link href="/media" passHref><MenuItem onClick={handleClose}>Media</MenuItem></Link>
        <Link href="/insurance" passHref><MenuItem onClick={handleClose}>Insurance</MenuItem></Link>
        <Link href="/psu" passHref><MenuItem onClick={handleClose}>PSU</MenuItem></Link>
        <Link href="/retail-and-e-commerce" passHref><MenuItem onClick={handleClose}>Retail & E-Commerce</MenuItem></Link>
        <Link href="/technology" passHref><MenuItem onClick={handleClose}>Technology</MenuItem></Link>
        <Link href="/telecom" passHref><MenuItem onClick={handleClose}>Telecom</MenuItem></Link>
        <Link href="/travel-and-hospitality" passHref><MenuItem onClick={handleClose}>Travel & Hospitality</MenuItem></Link>
        <Link href="/real-estate-and-infrastructure" passHref><MenuItem onClick={handleClose}>Real Estate & Infrastructure</MenuItem></Link>
        <Link href="/automotive" passHref><MenuItem onClick={handleClose}>Automotive</MenuItem></Link>
      </Menu>
      <Link href="/customer-stories" passHref><Button color="inherit" className={styles.linkButton}>Customer Stories</Button></Link>
      <Link href="/contact-us" passHref><Button color="inherit" className={styles.linkButton}>Contact Us</Button></Link>
      <Link href="/contact-us" passHref><Button color="inherit" className={styles.linkButtonBook} variant="outlined" sx={{ ml: 2 }}>Book A Demo</Button></Link>
    </Box>
  );

  return (
    <AppBar position="static" className={styles.navbarBackground}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          {/* Replace with your logo */}
          <Link href="/">
          <Image 
            src="/images/telesourcenowlogo-black.png" // Route of the image file
            alt="Description of the image"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Link>
        </Box>
        {isMobile ? (
          <IconButton edge="start" color="inherit" className={styles.linkButton} aria-label="menu" onClick={handleMobileMenuOpen}>
            <MenuIcon />
          </IconButton>
        ) : desktopMenuItems}
        <Drawer anchor="left" open={mobileMenuOpen} onClose={handleClose}>
          {mobileMenuItems}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
