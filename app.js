function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga o elemento HTML no console para verificação

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == ""){
        section.innerHTML = "Nenhum resultado encontrado. Insira o nome de um banco de dados!"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada item do banco de dados (array 'database')
    for (let data of database) {
      titulo = data.titulo.toLowerCase()
      descricao = data.descricao.toLowerCase()
      tags = data.tags.toLowerCase()

      // se titulo includes campoPesquisa

       if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${data.titulo}</a>
          </h2>
          <p class="descricao-meta">${data.descricao}</p>
          <a href=${data.link} target="_blank"> Mais informações</a>
        </div>
      `;
       }
    }
  
    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado para sua pesquisa</p>"
    }
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  
}


