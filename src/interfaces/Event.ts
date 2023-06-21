export default interface Event {
  eventId: string;
  createdAt: Date;
  discardedAt?: Date;
  name: string;
  date: Date;
  zipCode: number;
  federalUnit: string;
  city: string;
  street: string;
  neighborhood: string;
  number: number;
  complement?: string;
  locationName: string;
  pictureUrl: string;
}
