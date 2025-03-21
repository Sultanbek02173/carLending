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

export type SettingData = {
    about: string,
    tarif: string,
    review: string,
    contact: string,
    title: string,
    services: string,
    description: string,
    name: string,
    number: string,
    email: string,
    send: string,
    info: string,
    location: string,
    pick: string,
    enter: string,
    tariff: string,
    pick_up_date: string,
    phone: string,
    order: string,
    our_services: string,
    sviper: string,
    drivers: string,
    business: string,
    event: string,
    video: string,
    support: string,
    text: string,
    watapp: string,
    telegram: string,
    insta: string,
    phone_number_2: string,
    banner_link: string,
}