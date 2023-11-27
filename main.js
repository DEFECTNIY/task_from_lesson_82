
// 1 
function hello(name){
  return `hello ${name}`
}
console.log(hello('John'))

//2 

const numbers=[1,2,3,4,5,6,7,8,9,10,20,30,40]

function checkNumbers(array){
  for(let i = 0; i <array.length; i++){
    if (array[i]>10){
      console.log(array[i])
    }
  }
}
console.log(checkNumbers(numbers))

//3
function calculator(num1,num2,operator){
  let result

  switch (operator){
    case 'plus':
    result=num1+num2;
    break;
    case 'minus':
      result=num1-num2;
      break;
    case 'multiplication':
        result=num1+num2;
      break;
      case 'division':
        result=num1+num2;
      break;
      default:
        console.log('invalid operator')
      }
      console.log(result)
    }

    
  console.log(calculator(2,3,'minus'))
