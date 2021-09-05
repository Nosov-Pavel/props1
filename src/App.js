

import Menu from "./Menu";
import Contacts from "./Contacts";

function App(){
    const mainMenu = ['Contacts', 'Chats', 'Settings']
    const contacts = [{
        name: 'Alice',
        phoneNumber: '+13213232',
        address: 'Gale Bolivar',
    },
        {
            name: 'Bob',
            phoneNumber: '+13213233',
            address: 'Goalie Bolivar St.17',
        },
        {
            name: 'Josh',
            phoneNumber: '+13213235',
            address: '16 St.Avenue',
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

