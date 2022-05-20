export interface IJobsCreate {
  userId: string;
  title: string;
  description: string;
  deliveryDate: string;
  cep: string;
  categoryId: number;
}

export interface IUpdate {
  title: string;
  description: string;
  categoryId: string;
  cep: string;
  deliveryDate: string;
}
