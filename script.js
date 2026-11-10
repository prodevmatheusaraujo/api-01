const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then((resposta) => {
    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.status} ${resposta.statusText}`);
    }
    return resposta.json();
  })
  .then((posts) => {
    console.log(`Total de publicações recebidas: ${posts.length}`);
    console.log("=".repeat(50));

    for (const post of posts) {
      console.log(`ID: ${post.id}`);
      console.log(`TITLE: ${post.title}`);
      console.log(`BODY: ${post.body}`);
      console.log("-".repeat(50));
    }
  })
  .catch((erro) => {
    console.error("Não foi possível consultar a API:", erro.message);
  });
