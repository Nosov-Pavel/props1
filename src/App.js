import Menu from "./Menu";

function App(){
    const mainMenu = ['Contacts', 'Chats','Settings', 'Calls']

    return(
        <div>
            <h1>Mesanger</h1>
            <Menu menu={mainMenu}/>


        </div>
    );
}
export default App;