function App(){
    const hello = () => {
        console.log('Hello')
        
    }

    return(
        <div>
            <button onClick={hello}>Hello</button>
        </div>
    );
}
export default App;