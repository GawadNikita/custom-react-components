export interface ModalInterface {
  visible: boolean;
  children: JSX.Element[];
  className?: string;
  onClose: any;
}

export interface ModalTitleInterface {
  title: string;
  showCloseButton?: boolean;
}

export interface ModalBodyInterface {
  content: JSX.Element | string;
}