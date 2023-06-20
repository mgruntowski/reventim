import { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";

import prisma from "lib/prisma";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;

  try {
    const result = await prisma.user.create({
      data: { ...data },
    });
    res.json(result);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        res.status(409).json({ message: "Usuário já cadastrado." });
      }
    }
  }
};

export default handle;
