export interface ICreateOpportunity {
  title: string;
  organizationName: string;
  website?: string;
  email: string;
  description: string;
  date: string;
  typeWork: VolunteerType | string;
  image?: File | string;
  location: string;
}

export interface IUpdateOpportunity {
  title?: string;
  organizationName?: string;
  website?: string;
  email?: string;
  description?: string;
  date?: string;
  typeWork?: VolunteerType;
  image?: File | string;
  location?: string;
}

export interface IOpportunity {
  id: string;
  userId: string;
  title: string;
  organizationName: string;
  website?: string;
  email: string;
  description: string;
  date: Date;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
  imageUrl?: string;
  typeWork: string;
}

export enum VolunteerType {
  SOCIAL_ASSISTANCE = "SOCIAL_ASSISTANCE",
  ENVIRONMENTAL_ACTIVITIES = "ENVIRONMENTAL_ACTIVITIES",
  EDUCATION_MENTORING = "EDUCATION_MENTORING",
  MEDICAL_SERVICES = "MEDICAL_SERVICES",
  SUPPORT_FOR_ELDERLY = "SUPPORT_FOR_ELDERLY",
  ANIMAL_WELFARE = "ANIMAL_WELFARE",
  CULTURAL_INITIATIVES = "CULTURAL_INITIATIVES",
  HUMANITARIAN_MISSIONS = "HUMANITARIAN_MISSIONS",
  SPORTS_INITIATIVES = "SPORTS_INITIATIVES",
  CRISIS_RESPONSE_VOLUNTEERING = "CRISIS_RESPONSE_VOLUNTEERING",
}

export interface IOpportunitiseState {
  items: IOpportunity[];
  isOppLoading: boolean;
  isOppError: boolean;
}
