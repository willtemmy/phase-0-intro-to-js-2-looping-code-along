for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);  

function writeCards(names, event){
    for(i=0; i<names.length; i++){
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift`);
    };

    return names,event;
};

writeCards(["Ada", "Brendan", "Ali"], "birthday");

/*function countDown(number){
    let i = 10;
    while(i>0){
        console.log(`number: ${number[i]}`);
        i--;
    };

    return number;
};

countDown(10);*/