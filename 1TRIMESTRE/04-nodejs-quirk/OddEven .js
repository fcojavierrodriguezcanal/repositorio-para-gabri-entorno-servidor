const oddOrEven = (n) => {
    let a = n.toString();
    let b = 0;
    for (let i = 0; i < a.length; i++) {
      b += parseInt(a[i]);
    }
    if (b % 2 === 1) {
      return "Oddish"
    } else return "Evenish"
  };
  
  console.log(oddOrEven(42));
  console.log(oddOrEven(125));
  console.log(oddOrEven(600));