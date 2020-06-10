import React from "react";

function Myintro(prop) {
    return(
        <div>
            <h1>My name is {prop.name}</h1>
            <h1>I am enrolled in {prop.institute} for {prop.course}</h1>
            <h1>My roll number is {prop.roll_num} from batch {prop.batch}</h1>
            <h1>This bootcamp is going very well till now..</h1>
            <hr />

        </div>
    )
}

export default Myintro;