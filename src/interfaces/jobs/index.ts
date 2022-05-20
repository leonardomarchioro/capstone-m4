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
  categoryId: number;
  cep: string;
  deliveryDate: string;
}
