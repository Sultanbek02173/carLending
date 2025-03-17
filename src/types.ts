export type videoSwiperProps = {
    id: number,
    link: string,
    title: string,
    description: string
}

export type Carts = {
    id: number,
    title: string,
    description: string
}

export type BannerData = {
    title: string,
    description: string,
    image: string,
}

export type feedbackState = {
  title: string;
  description: string;
  tariff: string;
  date: string;
  phone_number: string;
};

export type contactState = {
  name: string;
  phone_number: string;
  email: string;
};

export type ourServiceData = {
  id?: number;
  title: string;
  description: string;
};

export type TransferData = {
    title: string,
    description: string,
    image: string,
}

export type TariffsData = {
    title: string,
    image: string,
    type: string,
}

export type SwiperData = {
    title: string,
    description: string,
    links: string,
}