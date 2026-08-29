const estabelecimentos = [
  { id: 1, nome: "Joao", endereco: "Rua A", mediaValor: 100 },
  { id: 2, nome: "Talita", endereco: "Rua B", mediaValor: 200 },
  { id: 3, nome: "Gustavo", endereco: "Rua C", mediaValor: 300 },
  { id: 4, nome: "Brenda", endereco: "Rua D", mediaValor: 400 },
];

const listarEstabelecimentos = (req, res) => {
  const mediaValor = Number(req.query.mediaValor);
  const estabelecimentosFiltrados = Number.isNaN(mediaValor)
    ? estabelecimentos
    : estabelecimentos.filter(
        (estabelecimento) => estabelecimento.mediaValor === mediaValor,
      );

  res.render("estabelecimentos", {
    estabelecimentos: estabelecimentosFiltrados,
  });
};

const buscarEstabelecimentoPorNome = (req, res) => {
  const nome = req.params.nome;

  const estabelecimento = estabelecimentos.find(
    (e) => e.nome.toLowerCase() === nome.toLowerCase(),
  );
  res.render("estabelecimento", { estabelecimento });
};

const criarEstabelecimento = (req, res) => {
  const nome = String(req.body.nome || "").trim();
  const endereco = String(req.body.endereco || "").trim();
  const mediaValor = Number(req.body.mediaValor);

  if (!nome || !endereco || Number.isNaN(mediaValor)) {
    res.status(400).render("estabelecimentos", { estabelecimentos });
    return;
  }

  const proximoId = estabelecimentos.length
    ? estabelecimentos[estabelecimentos.length - 1].id + 1
    : 1;

  estabelecimentos.push({ id: proximoId, nome, endereco, mediaValor });
  res.redirect("/");
};

const atualizarEstabelecimento = (req, res) => {
  const id = Number(req.params.id);
  const nome = String(req.body.nome || "").trim();
  const endereco = String(req.body.endereco || "").trim();
  const mediaValor = Number(req.body.mediaValor);

  if (Number.isNaN(id) || !nome || !endereco || Number.isNaN(mediaValor)) {
    return res.status(400).render("estabelecimentos", { estabelecimentos });
  }

  const index = estabelecimentos.findIndex((e) => e.id === id);

  if (index === -1) {
    return res.status(404).send("Estabelecimento não encontrado");
  }

  estabelecimentos[index] = {
    id,
    nome,
    endereco,
    mediaValor,
  };

  res.redirect("/");
};


const deletarEstabelecimento = (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).send("ID inválido");
  }

  const index = estabelecimentos.findIndex((e) => e.id === id);

  if (index === -1) {
    return res.status(404).send("Estabelecimento não encontrado");
  }

  estabelecimentos.splice(index, 1);

  res.redirect("/");
};

module.exports = {
  listarEstabelecimentos,
  buscarEstabelecimentoPorNome,
  criarEstabelecimento,
  atualizarEstabelecimento,
  deletarEstabelecimento,
};
