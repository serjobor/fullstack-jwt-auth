export interface IUser {
  name: string;
  id: string;
  surName: string;
  email: string;
  fullName: string;
  password: string;
  telephone?: string;
  birthDate?: Date;
  employment?: string;
  userAgreement?: boolean;
}