// import Menu from "./Menu";
// import Contacts from "./Contacts";
//
// function App(){
//     const mainMenu = ['Contacts', 'Chats', 'Settings']
//     const contacts = [{
//         name: 'Alice',
//         phoneNumber: '+13213232',
//         address: 'Gale Bolivar',
//     },
//         {
//             name: 'Bob',
//             phoneNumber: '+13213233',
//             address: 'Goalie Bolivar St.17',
//         },
//         {
//             name: 'Josh',
//             phoneNumber: '+13213235',
//             address: '16 St.Avenue',
//         }]
//     return(
//         <div>
//             <h1>Messenger</h1>
//             <Menu menu={mainMenu}/>
//             <Contacts contacts={contacts}/>
//
//         </div>
//     );
// }
// export default App;

import Menu from "./Menu";
import Contacts from "./Contacts";

function App(){
    const mainMenu = ['Contacts', 'Chats', 'Settings']
    const contacts = [{
        name: 'Alis',
        phoneNumber: +13213435,
        address: 'New York'
    },
        {
        name: 'Bob',
        phoneNumber: +13213436,
        address: 'Miami',
    },
        {
        name: 'Rob',
        phoneNumber: +13213437,
        address: 'Orlando',
    }]
    return(
        <div>
            <h1>Messenger</h1>
            <Menu menu={mainMenu}/>
            <Contacts contacts={contacts}/>
        </div>
    );
}
export default App;