import { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";

import prisma from "lib/prisma";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;

  try {
    await prisma.user.create({
      data: { ...data },
    });

    console.log("tentou enviar aqui");

    res.status(200);
  } catch (err) {
    console.log(
      "instance ->",
      err instanceof Prisma.PrismaClientKnownRequestError
    );
    console.log("code ->", err.code);
    console.log("code compare ->", err.code === "P2002");

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      console.log("primeiro if");
      if (err.code === "P2002") {
        console.log("deveria retornar aqui");
        res.status(409).json({ message: "Usuário já cadastrado." });
      }
    } else {
      console.log("ultimo console log");
      res.json(err);
    }
  }
};

export default handle;
