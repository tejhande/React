function Random() {

  var number = Math.random() * 100000 ;

  return <h6 style= {{'backgroundColor':'#119885'}}>The Random Number Is {Math.round(number)}</h6>

}

export default Random;