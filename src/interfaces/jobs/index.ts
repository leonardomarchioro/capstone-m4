export interface IJobsCreate {
  userId?: string;
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
  deliveryDate?: Date;
}

export interface ISupplier {
  supplierId: string;
  jobId: string;
}

export interface IJobsReturn {
  infos: {
    id: string;
    title: string;
    description: string;
    category: string;
    deliveryDate: string;
    status: string;
    cep: string;
  };
}
