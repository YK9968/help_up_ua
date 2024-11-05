export interface ICreateOpportunity {
  title: string;
  organizationName: string;
  website?: string;
  email: string;
  description: string;
  date?: string;
  typeWork: VolunteerType;
  imageUrl?: string;
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
  imageUrl?: string;
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
  SOCIAL_ASSISTANCE = "Social Assistance",
  ENVIRONMENTAL_ACTIVITIES = "Environmental Activities",
  EDUCATION_MENTORING = "Education Mentoring",
  MEDICAL_SERVICES = "Medical Services",
  SUPPORT_FOR_ELDERLY = "Support for Elderly",
  ANIMAL_WELFARE = "Animal Welfare",
  CULTURAL_INITIATIVES = "Cultural Initiatives",
  HUMANITARIAN_MISSIONS = "Humanitarian Missions",
  SPORTS_INITIATIVES = "Sports Initiatives",
  CRISIS_RESPONSE_VOLUNTEERING = "Crisis Response Volunteering",
}
