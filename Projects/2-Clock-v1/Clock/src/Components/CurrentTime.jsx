const CurrentTime = () => {

  const time = new Date();

  return <p>
    Current Time Is {time.toLocaleDateString()} - {time.toLocaleTimeString()} 
    </p>;
}

export default CurrentTime;

