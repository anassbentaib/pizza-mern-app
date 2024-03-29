import OverallStat from "../model/Overrall.model";

export const getSales = async (req: any, res: any, next: any) => {
  try {
    const overallStats = await OverallStat.find();

    res.status(200).json(overallStats[0]);
  } catch (error) {
    next(error);
  }
};
