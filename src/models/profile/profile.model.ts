import {Address} from './address.model';
import {Company} from './company.model';

export interface ProfileModel {
  id: number;
  name: string;
  username: string;
  address: Address;
  avatar: string;
  email: string;
  phone: string;
  website: string;
  company: Company;
}
