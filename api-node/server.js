import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
const port = 3000;

// express estou usando json
app.use(express.json());

/**
 * STATUS
 *
 * 2XX = SUCESSO
 * 4XX = ERRO NO CLIENTE
 * 5XX = ERRO NO SERVIDOR
 */

app.post("/users", async (req, res) => {
  const { name, email, age } = req.body;

  await prisma.user.create({
    data: {
      name,
      email,
      age,
    },
  });

  res.status(201).json(req.body);
});

app.put("/users/:id", async (req, res) => {
  const { name, email, age } = req.body;

  await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      name,
      email,
      age,
    },
  });

  res.status(201).json(req.body);
});

app.delete("/users/:id", async (req, res) => {
  await prisma.user.delete({
    where: { id: req.params.id },
  });

  res.status(200).json({ message: "User have been deleted successfully!" });
});

app.get("/users", async (req, res) => {
  let users = [];
  const { name, age, email } = req.query;

  if (req.query) {
    users = await prisma.user.findMany({
      where: {
        name,
        email,
        age,
      },
    });
  } else {
    users = await prisma.user.findMany();
  }

  res.status(200).json(users);
});

app.listen(port, () => {
  console.log("Starting server in http://localhost:%d", port);
});

/**
 * MongoDB
 *
 * victor
 * Xua0l9aVBxDCJlkn
 */
