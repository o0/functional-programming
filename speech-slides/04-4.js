const User = {
  age: 14,
  female: false,
  isPretty: false
};


const isAdult = user => user.age > 18 ?
    Success(user) :
    Fail([`User ain't adult`]);


const isFemale = user => user.female ?
    Success(user) :
    Fail([`User ain't female`]);


const isPretty = user => user.isPretty ?
    Success(user) :
    Fail([`User ain't pretty`]);


const validity = isAdult(User).ap(
  isFemale(User).ap(
    isPretty(User).acc()
  )
);


console.log(validity);