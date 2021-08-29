function App(){
    const hello = () => {
        console.log('Hello')
        
    };

    const friends = [
        {id: 1, name: 'Alice', isBestFriend: false},
        {id: 2, name: 'Bob', isBestFriend: false},
        {id: 3, name: 'Zoe', isBestFriend: true},
        {id: 4, name: 'Kat', isBestFriend: false},
    ]
    const whoIs = (id, name) => {
      console.log(id, name)
    };

    return(
        <div>
            <button onClick={hello}>Hello</button>

            <h1 onClick={hello}>My friends</h1>

            <ul>
                {
                    friends.map(el => <li key={el.id}>
                        {el.name}
                        {el.isBestFriend && ' is Best friend'}
                        <button onClick={() => whoIs(el.id, el.name)}>Who is?</button></li> )
                }
            </ul>
        </div>
    );
}
export default App;