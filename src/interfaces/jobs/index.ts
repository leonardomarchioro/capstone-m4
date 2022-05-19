export interface IJobsCreate {
  clientId: string;
  title: string;
  description: string;
  deliveryDate: Date;
  cep: string;
  categoryId: string;
}

export interface IUpdate {
  title: string;
  description: string;
  categoryId: string;
  cep: string;
  deliveryDate: Date;
}
