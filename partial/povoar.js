fs.readFile("verb.csv", "utf8", (err, data) => {
  var rows = data.split("\n");
    var teste=[];
  for (linha of rows) {
    var limpa = [];
    var palavras = linha.split(".");
    for (palavra of palavras) {
      if (palavra != "") {
        limpa.push(palavra);
      }
    }

    
    teste.push(limpa)
    
  
  }


  teste.map((e)=>{
      if(e[0] != undefined && e[1] != undefined && e[2] != undefined ){

      
      var palavra = {
          infinitive :  `${e[0]} ${e[1]} `,
          past: e[2],
          pastParticiple: e[3],
          meening:e[4]
      }
        
        myBooks.create(palavra).then(()=>{
            console.log('ok');
        }).catch((err)=>{
            console.log(err);
        })
        }
  })
});