let Time = () => {
  let raw_delhi_time = new Date();
  let city = 'Delhi'
  return <div className="text-center time">
    <p>{city}: {raw_delhi_time.toLocaleDateString()}@{raw_delhi_time.toLocaleTimeString()}</p>
  </div>;
}

export default Time;