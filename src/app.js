

function domainGenerator() {
  //write your code here

  let pronoun = ["I", "you", "they"];
  let adj = ["good", "free", "happy"];
  let noun = ['dog', 'Carla', 'guitar'];
  

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for(let k= 0; k< noun.length; k++) {

      
      console.log(pronoun[i] + adj[j] + noun[k]+'.com');

      }
    }
  }
}
domainGenerator()