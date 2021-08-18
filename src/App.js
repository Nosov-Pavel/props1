import Phones from "./Phones";

function App() {
    const phone = '+1 321 987 69 85'
    const phone2 = '+1 321 987 69 73'

    const person = {
        name: 'Viktor',
        phone: '+1 707 590 18 67',
        address: {
            state: 'CA',
            sity: 'Commerce',
            zip: '324561-373'
        }
    }
  return (
    <div>
      Component App

        <Phones
            phoneN={phone}
            phoneN2={phone2}
            person={person}
        />

    </div>
  );
}

export default App;
