export interface Client {
  firstName: string;
  lastName: string;
  birthDay: string;
  birthMonth: string;
  birthDate: string;
  registrationDate: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  updated: string;
  MFD: string;

  gSPHos?: string;
  gSPHod?: string;
  gCYLod?: string;
  gCYLos?: string;
  gAXISod?: string;
  gAXISos?: string;
  gADDod?: string;
  gADDos?: string;
  gPD?: string;
  cBC?: string;
  notes?: string;
}

export interface ClientFilters {
  firstName?: string;
  lastName?: string;
  birthYear?: number;
  birthMonth?: number;
  birthDay?: number;
}
