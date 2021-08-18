function Phones(props){

    console.log(props)
    return(
        <div>
            Component Phones {props.phoneN} {props.phoneN2}

            <hr/>

            Name: {props.person.name}
            <hr/>

        </div>
    );
}
export default Phones;