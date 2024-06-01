function Hello(){

  let myName =  `Tejas`

  let fullName = () => {
    return  `Tejas Hande`;
  }

  return <h3>Hello {myName} /// {fullName()} </h3>
}

export default Hello;