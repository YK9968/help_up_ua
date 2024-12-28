import { IOpportunity } from "../types/opportunitiesType";

export const sortedOpportunities = (opportunities: IOpportunity[]) =>
  [...opportunities].sort((a, b) => {
    const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;

    return dateB - dateA;
  });
