export interface Student {
    country: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    birthPlace: string;
    phone: string;
    email: string;
    parentName: string;
    parentContact: string;
  }
  
  export interface Program {
    id: string;
    city: string;
    country: string;
    university: string;
    field: string;
    subField: string;
    level: 'Licence'| 'Master' | 'Doctorat'
    duration: string;
    ranking: number;
    description: string;
    careers: string[];
    tuitionFee: number;
    additionalServices: AdditionalServices;
    accommodationFee: number;
    availability: boolean;
    totalFees?: {
        tuition: number;
        accommodation: number;
        insurance: number;
        serviceFees: number;
        total: number;
      }
  }
  
  export interface Accommodation {
    id: string;
    type: 'singleRoom' | 'doubleRoom' | 'sharedApartment' | 'studioApartment';
    basePrice: number;
    maxRoommates: number;
  }

  
  export interface AdditionalServices {
    hasPassport: boolean;
    needPassportAssistance: boolean;
    hasTranslatedDiplomas: boolean;
    needTranslationService: boolean;
    hasRussianContact: boolean;
    needAirportPickup: boolean;
    needYearlyAssistance: boolean;
  }
  
  export interface ServiceFees {
    passportAssistance: number;
    diplomaTranslation: number;
    airportPickup: number;
    yearlyAssistance: number;
    studentInsurance: number;
  }
  
  export interface Registration {
    student: Student;
    program: Program;
    accommodation: Accommodation;
    roommateCount: number;
    additionalServices: AdditionalServices;
    monthlyAccommodationFee?: number;
    accommodationDetails: {
        monthlyFee: number;
        yearlyFee: number;
      };
    totalFees: {
      tuition: number;
      accommodation: number;
      insurance: number;
      services: number;
      total: number;
    };
  }