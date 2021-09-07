// import ContactItem from "./ContactItem";
//
// function Contacts(props){
//     return(
//         <div>
//             {props.contacts.map(el =><ContactItem contact={el}/>)}
//         </div>
//     );
// }
// export default Contacts;

import ContactItem from "./ContactItem";

function Contacts(props){
    return(
        <div>
            {props.contacts.map(el =><ContactItem key={el.id} contact={el}/>)}
        </div>
    );
}
export default Contacts;




