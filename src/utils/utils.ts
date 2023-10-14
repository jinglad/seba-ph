import { hospitals } from "../staticData/hospitals";

export const getHospitalById = (id: string) => {
  return hospitals.find((hospital) => hospital.id === id);
};
