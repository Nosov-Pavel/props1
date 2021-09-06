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
            {props.contacts.map(el =><ContactItem contact={el}/>)}
        </div>
    );
}
export default Contacts;






