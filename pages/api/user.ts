import { NextApiRequest, NextApiResponse } from "next";

import prisma from "lib/prisma";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("req.body ->", req.body);

  const result = await prisma.user.create({
    data: req.body,
  });
  console.log("result ->", result);

  res.json(result);
};

export default handle;
