// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }

  const gifts = ["teddy bear","drone","doll"]

  function wrapGifts(gifts){
    for(let i = 0;i < gifts.length;i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }
    return gifts
  }

  console.log(wrapGifts(gifts))

  function writeCards(names,eName){
    let messages = []
    for(let z = 0; z < names.length; z++){
        messages.push(`Thank you, ${names[z]}, for the wonderful ${eName} gift!`)
        
    }
    return messages
  }


  function countDown(num){
    while(num >= 0){
        console.log(num)
        num--
    }
  }

  console.log(countDown(10))