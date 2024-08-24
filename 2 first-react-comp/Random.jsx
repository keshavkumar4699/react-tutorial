function Random (){
   let number = Math.random() * 100;
   return <h5 style={{'color': '#226671'}}> Random number is {Math.round(number)} </h5>
}

export default Random;