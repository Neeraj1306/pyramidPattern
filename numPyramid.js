function pattern(num) {
    // outer loop to print rows 
    for (let i = 1; i <= num; i++){
      var pat=""
      //inner loop to print spaces
      for (let j = 2*(num-i); j > 0; j--){
        pat+=" "
      }
      //innerloop to print first part of row
      for (let j = 1; j <= i; j++){
        pat+=j+" "
      }
      //inner loop to print second part of row
      for (let j = (i-1); j >= 1; j--){
        pat+=j+ " "
      }
      console.log(pat)
    }
  }
  
  pattern(5)