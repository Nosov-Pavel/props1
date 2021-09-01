// import Menu from "./Menu";
//
// function App(){
//     const mainMenu = ['Contacts', 'Chats','Settings', 'Calls']
//
//     return(
//         <div>
//             <h1>Messenger</h1>
//             <Menu menu={mainMenu}/>
//
//
//         </div>
//     );
// }
// export default App;

import Menu from "./Menu";

function App(){
    const mainMenu = ['Contacts', 'Chats', 'Settings']
    return(
        <div>
            <h1>Messenger</h1>
            <Menu menu={mainMenu}/>

        </div>
    );
}
export default App
