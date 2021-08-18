import Phones from "./Phones";

function App() {
    const phone = '+1 321 987 69 85'
    const phone2 = '+1 321 987 69 73'
  return (
    <div>
      Component App

        <Phones phoneN={phone} phoneN2={phone2}/>

    </div>
  );
}

export default App;
