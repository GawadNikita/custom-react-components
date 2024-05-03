/**
 ** Define the interface related to navbar here ** 
 */

export interface NavbarInterface {
  theme: string;
  linksToRight?: boolean;
  children?: NavLinksInterface; // type to be corrected here
}

export interface NavLinksInterface {
  title: string;
  url: string;
  disable?: boolean;
  children?: any;
}

export interface NavbarDropdown {
  title: string;
  children?: any;
}