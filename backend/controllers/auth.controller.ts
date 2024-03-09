export const test = (req: any, res: any) => {
  res.json({ message: "HELLO FROM CONROLLEERS" });
};

export const signup = (req: any, res: any) => {
  console.log(req.body);
};
