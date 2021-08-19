import CallBack from "./CallBack";

function Phones(props){

    console.log(props)
    return(
        <div>
            Component Phones {props.phoneN} {props.phoneN2}

            <hr/>

            Name: {props.person.name}
            <hr/>
            Phone: {props.person.phone}
            <hr/>
            Zip: {props.person.address.zip}

            <hr/>
            <CallBack phone={props.person.phone}/>

        </div>
    );
}
export default Phones;