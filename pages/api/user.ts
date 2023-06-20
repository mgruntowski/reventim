import { NextApiRequest, NextApiResponse } from "next";

import prisma from "lib/prisma";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;

  const result = await prisma.user.create({
    data: { ...data },
  });

  res.json(result);
};

export default handle;
