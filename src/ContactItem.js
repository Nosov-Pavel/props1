function ContactItem(props){

    return(
        <div>
            {props.contact.name}
            {props.contact.phoneNumber}
            {props.contact.address}
        </div>
    );
}
export default ContactItem;