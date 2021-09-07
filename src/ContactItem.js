// function ContactItem(props){
//
//     return(
//         <div>
//             {props.contact.name}
//             <br/>
//             {props.contact.phoneNumber}
//             <br/>
//             {props.contact.address}
//             <br/>
//             <button onClick={()=>(props.contact.name)}>Delete</button>
//             {' '}
//             <button onClick={()=>(props.contact.name)}>Add</button>
//         </div>
//     );
// }
// export default ContactItem;
function ContactItem(props){
    return(
        <div>
            {props.contact.name}<br/>
            {props.contact.phoneNumber}<br/>
            {props.contact.address}<br/>
            <button onClick={()=>console.log(props.contact.name)}>Delete</button>
            <button onClick={()=>console.log(props.contact.name)}>Add</button>

        </div>
    );
}
export default ContactItem