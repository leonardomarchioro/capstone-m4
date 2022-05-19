import { User } from "../../entities/User/user.entity";
import { Category } from "../../entities/Categories/categories.entity";

export interface IJobsCreate {
  client: User;
  title: string;
  description: string;
  deliveryDate: Date;
  cep: string;
  category: Category;
}

export interface IUpdate {
  title: string;
  description: string;
  category: Category;
  cep: string;
  deliveryDate: Date;
}
