export interface IHospital {
  id: string;
  name: string;
  location: string;
  phone: string;
  city: string;
  place: string;
  thumbnail: string;
  tests: ITest[];
  services: string[];
  hours: string;
  about: string;
  supportEmail: string;
}

export interface ITest {
  name: string;
  price: number;
}
