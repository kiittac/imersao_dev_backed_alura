// Aula 02: Criando e Estruturando sua Primeira API com GET e Banco de Dados

import express from "express";

const posts = [ // lista com objetos, dados locais (mock)
    { id: 1, 
        descricao: "Uma foto teste", 
        imagem: "https://placecats.com/millie/300/150"},
    { id: 2, 
        descricao: "Gatinho fofo dormindo", 
        imagem: "https://placecats.com/millie/300/150"},
    {id: 3, 
        descricao: "Paisagem incrível", 
        imagem: "https://placecats.com/millie/300/150"},
];

const app = express(); 
app.use(express.json()); 

app.listen(3000, () => { 
    console.log("Servidor escutando...");
});


// funcao para buscar o post pelo id
function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

/* app.get("/posts", (req, res) => {
    res.status(200).json(posts); // devolve/converte em json p o usuario
}); */

app.get("/posts/:id", (req, res) => { // : substitui por um dado variavel (id)
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});