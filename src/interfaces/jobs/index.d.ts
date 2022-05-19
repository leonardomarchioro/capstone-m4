import { User } from "../../entities/User/user.entity";
import { Category } from "../../entities/Categories/categories.entity";
import { TypesJob } from "../../entities/TypesJob/typesJob.entity";

export interface IJobsCreate {
  userId: User;
  title: string;
  description: string;
  cep: string;
  deliveryDate: Date;
  category: Category;
  type?: TypesJob;
}

export interface IJobsCreateSend {
  userId: string;
  title: string;
  description: string;
  cep: string;
  deliveryDate: Date;
  category: string;
}

export interface IUpdateSend {
  title: string;
  description: string;
  category: string;
  cep: string;
  deliveryDate: Date;
}

export interface IUpdate {
  title: string;
  description: string;
  category: string;
  cep: string;
  deliveryDate: Date;
}
