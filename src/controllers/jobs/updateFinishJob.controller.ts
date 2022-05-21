import { Request, Response } from "express";
import updateFinishJobService from "../../services/jobs/updateFinishJob.service";

const updateFinishJobController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;

  const supplier = await updateFinishJobService({ id });

  return response.status(200).json({
    message: "status updated!",
    supplier,
  });
};

export default updateFinishJobController;
