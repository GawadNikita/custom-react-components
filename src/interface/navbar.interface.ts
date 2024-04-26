/**
 ** Define the interface related to navbar here ** 
 */

export interface NavbarInterface {
  theme: string;
  children?: any; // type to be corrected here
}

export interface NavLinksInterface {
  title: string;
  url: string;
  disable?: boolean;
}