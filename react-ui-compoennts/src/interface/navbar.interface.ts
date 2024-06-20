/**
 ** Define the interface related to navbar here ** 
 */

export interface NavbarInterface {
  theme: string;
  linksToRight?: boolean;
  children?: any;
}

export interface NavLinksInterface {
  title: string;
  url: string;
  disable?: boolean;
  children?: any;
}

export interface NavbarDropdownInterface {
  title: string;
  children?: any;
}

export interface NavbarLogoInterface {
  logoSrc: string;
  altText?: string;
  title?: string;
}

export interface NavInterface {
  children: JSX.Element[]
}