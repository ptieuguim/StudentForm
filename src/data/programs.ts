import { Program, ServiceFees } from '../types';

export const countries = ['France', 'Russie', 'Canada', 'Belgique'] as const;

export const levels = ['License', 'Master', 'Doctorat'] as const;

export const fields = {
  'Médecine': ['Médecine Générale', 'Chirurgie', 'Pédiatrie'],
  'Ingénierie': ['Informatique', 'Mécanique', 'Électrique', 'Civil'],
  'Pharmacie': ['Pharmacie Industrielle', 'Pharmacie Clinique'],
  'Commerce': ['Finance', 'Marketing', 'Management']
} as const;

export const serviceFees: ServiceFees = {
  passportAssistance: 300,
  diplomaTranslation: 200,
  airportPickup: 150,
  yearlyAssistance: 1200,
  studentInsurance: 500
};

export const programs: Program[] = [
  {
    id: '1',
    city: 'Paris',
    country: 'France',
    university: 'Sorbonne University',
    field: 'Commerce',
    subField: 'Finance',
    level: 'Licence',
    duration: '3 ans',
    ranking: 83,
    description: 'Formation d\'excellence en finance internationale. Le programme comprend des stages en entreprise et des échanges internationaux.',
    careers: ['Analyste financier', 'Gestionnaire de portefeuille', 'Consultant'],
    tuitionFee: 9500,
    accommodationFee: 800,
    availability: true,
    additionalServices: {
      hasPassport: false,
      needPassportAssistance: false,
      hasTranslatedDiplomas: false,
      needTranslationService: false,
      hasRussianContact: false,
      needAirportPickup: false,
      needYearlyAssistance: true
    },
    totalFees: {
        tuition: 9500,
        serviceFees: serviceFees.yearlyAssistance, // Seul service activé par défaut
        accommodation: 800 * 10, // 800€/mois × 10 mois
        insurance: serviceFees.studentInsurance,
        total: 9500 + (800 * 10) + serviceFees.studentInsurance + serviceFees.yearlyAssistance
      }
  },
  {
    id: '2',
    city: 'Lyon',
    country: 'France',
    university: 'École Centrale de Lyon',
    field: 'Ingénierie',
    subField: 'Mécanique',
    level: 'Master',
    duration: '5 ans',
    ranking: 45,
    description: 'Programme leader en ingénierie mécanique avec spécialisation en conception et innovation industrielle.',
    careers: ['Ingénieur R&D', 'Chef de projet', 'Consultant technique'],
    tuitionFee: 8500,
    accommodationFee: 600,
    availability: true,
    additionalServices: {
      hasPassport: false,
      needPassportAssistance: false,
      hasTranslatedDiplomas: false,
      needTranslationService: false,
      hasRussianContact: false,
      needAirportPickup: false,
      needYearlyAssistance: true
    },
    totalFees: {
        tuition: 8500,
        serviceFees: serviceFees.yearlyAssistance,
        accommodation: 600 * 10,
        insurance: serviceFees.studentInsurance,
        total: 8500 + (600 * 10) + serviceFees.studentInsurance + serviceFees.yearlyAssistance
      }
  },
  {
    id: '3',
    city: 'Moscou',
    country: 'Russie',
    university: 'Université d\'État de Moscou',
    field: 'Médecine',
    subField: 'Médecine Générale',
    level: 'Doctorat',
    duration: '8 ans',
    ranking: 78,
    description: 'Formation médicale complète avec stage clinique et recherche approfondie. Programme en langue russe avec année préparatoire linguistique incluse.',
    careers: ['Médecin généraliste', 'Chercheur médical'],
    tuitionFee: 6000,
    accommodationFee: 400,
    availability: true,
    additionalServices: {
      hasPassport: false,
      needPassportAssistance: false,
      hasTranslatedDiplomas: false,
      needTranslationService: false,
      hasRussianContact: false,
      needAirportPickup: false,
      needYearlyAssistance: true
    },
    totalFees: {
        tuition: 6000,
        serviceFees: serviceFees.yearlyAssistance,
        accommodation: 400 * 10,
        insurance: serviceFees.studentInsurance,
        total: 6000 + (400 * 10) + serviceFees.studentInsurance + serviceFees.yearlyAssistance
      }
  }
];