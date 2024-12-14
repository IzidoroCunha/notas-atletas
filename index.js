class CalcularMediaAtletas {
    constructor(competidores) {
      this.competidores = competidores;
    }
  
    //1- colocar as notas em ordem crescente...menor -> maior...
    
    ordenarNotas() {
      console.log("****************************************");
      console.log(">>>NOTAS RECEBIDAS EM ORDEM CRESCENTE<<<");
      console.log("----------------------------------------");
      console.log("     >>>NOTAS DOS COMPETIDORES<<<     ");
      console.log("     ----------------------------     ")
      this.competidores.forEach(function (competidor) {
        competidor.notas = competidor.notas.sort(function (a, b) {
          return a - b;
        });
        
        console.log("Atleta: " + competidor.nome +",\nNotas: " + competidor.notas);
        console.log("------------------------------");
      });
      console.log("\n");
      console.log("******************************************");
    }
    
  
    //2 - Descartando a  nota(menor) e a nota(maior)
    descartarMaiorMenor() {
      console.log(">>>NOTAS VÁLIDAS PARA FORMAÇÃO DE MÉDIA<<<");
      console.log("------------------------------------------");
      this.competidores.forEach(function (competidor) {
        competidor.notas = competidor.notas.sort(function (a, b) {
          return a - b;
        });
  
        competidor.notas = competidor.notas.slice(1, -1);
        console.log("Atleta: " + competidor.nome + ",\n Notas válidas: " + competidor.notas);
        console.log("------------------------------");
      });
      console.log("\n");
      console.log("********************************************");
    }
  
    // 3 - Fazer a soma das notas
    somarNotas() {
      this.competidores.forEach(function (competidor) {
        competidor.somarNotas = competidor.notas.reduce(function (total, nota) {
          return total + nota;
        }, 0);
        
      });
    }
  
    // 4 - média das notas validas
    mediaDasNotas() {
      console.log(">>>MÉDIA DAS NOTAS VÁLIDAS POR COMPETIDOR<<<");
      console.log("--------------------------------------------");
      this.competidores.forEach(function (competidor) {
        competidor.mediaDasNotas = competidor.somarNotas / competidor.notas.length;
        console.log("Atleta: " + competidor.nome + ",\n Média: " + competidor.mediaDasNotas.toFixed('2'));
        console.log("------------------------------");
      });
      console.log("\n")
      console.log("*******************************************");
    }
    
    // 5 - Verificando maior média para o vencedor
    vencedor() {
      console.log(">>>INFORMATIVO DO ATLETA COM MAIOR MÉDIA<<<");
      console.log("-------------------------------------------");
      let maior = 0;
      let vencedor = "";
      this.competidores.forEach(function (competidor) {
        if (competidor.mediaDasNotas > maior) {
          maior = competidor.mediaDasNotas;
          vencedor = competidor.nome;
        }
      });
      console.log("Atleta: " + vencedor.toUpperCase() + "\n\nÉ o vencedor da competição com" , "Media: " + maior.toFixed(2));
      console.log("\n");
      console.log(">>>><<<<  Parabéns ao vencedor!  >>>><<<<\n");
      console.log("-------------------------------------------")
      console.log("\n")
      console.log("*******************************************")
      console.log("************* Fim do programa *************")
      console.log("*******************************************");
     
    }
    
  }
  
  let competidores = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88],
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33],
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8],
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5],
    },
    {
      nome: "Izidoro Cunha",
      notas: [9.9, 10, 9.8, 9.8, 10],
    }
  ];
  
  let calcularMedia = new CalcularMediaAtletas(competidores);
  
 // Chamando os métodos
  calcularMedia.ordenarNotas();
  calcularMedia.descartarMaiorMenor();
  calcularMedia.somarNotas();
  calcularMedia.mediaDasNotas();
  calcularMedia.vencedor();
  
  