import { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";

import prisma from "lib/prisma";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;

  try {
    const result = await prisma.user.create({
      data: { ...data },
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(
      "is instance ->",
      err instanceof Prisma.PrismaClientKnownRequestError
    );
    console.log("code ->", err.code);

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        res.status(409).json({ message: "Usuário já cadastrado." });
      }
    }

    res.json(err);
  }
};

export default handle;
