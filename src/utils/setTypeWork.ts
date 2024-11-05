import { VolunteerType } from "../types/opportunitiesType";

export const setTypeWork = (typeWork: string): string => {
  const key = Object.keys(VolunteerType).find((type) => type === typeWork);
  return VolunteerType[key as keyof typeof VolunteerType];
};
