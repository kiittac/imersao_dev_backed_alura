import express from "express";

const app = express(); // app é o servidor da express
app.listen(3000, () => { // 3000 é a porta para um servidor local
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("boas vindas"); // 200 é um dos codigos https: cod numericos com um texto associado a eles, 200 = OK
});
