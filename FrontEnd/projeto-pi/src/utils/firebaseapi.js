const url = "https://game-9f8db-default-rtdb.firebaseio.com/pokeRPG.json";

export const getData = async () => {
  try {
    const response = await fetch(url);
    console.log("Dados buscado com sucesso!")
    console.log(await response.json());
    return await response.json();
  } catch (error) {
    console.log("error: ", error)
  }
}

export const setData = async (name, password) => {
  const data = {
    [name]:[password,{name:"pikachu"}]
  }

  fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        console.log("Dados inseridos com sucesso.");
      } else {
        console.error("Ocorreu um erro ao inserir os dados.");
      }
    })
    .catch(error => {
      console.error("Ocorreu um erro na solicitação:", error);
  });
}