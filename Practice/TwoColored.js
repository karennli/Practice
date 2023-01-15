function twoColorable(edges) {
    let colors = [true];
    let stack = [0];
  
    while(stack.length>0){
      node = stack.pop();
      let con1 = edges[node][0];
      let con2 = edges[node][1];
      
      for(let i of edges[node]){
        if(!colors[i]){
            colors[i]=!colors[node];
            stack.push(i)
        }
        else{
            if(colors[i]===colors[node]){return false;}
        }
      }
    }
    return true;
  }

  console.log(twoColorable([[1],[0]]));