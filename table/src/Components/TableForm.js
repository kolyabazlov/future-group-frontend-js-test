import React, {useState} from "react";

export default function TableForm({addItems}) {

    const [idValue, setIdValue] = useState();
    const [firstNameValue, setFirstNameValue] = useState();
    const [lastNameValue, setLastNameValue] = useState();
    const [phoneValue, setPhoneValue] = useState();
    const [emailValue, setEmailValue] = useState();
    const [cityValue, setCityValue] = useState();
    const [stateValue, setStateValue] = useState();
    const [streetAddressValue, setStreetAddressValue] = useState();
    const [zipValue, setZipValue] = useState();
    const [descriptionValue, setDescriptionValue] = useState();


    function createData() {
        addItems({
            "id": parseInt(idValue),
            "firstName": firstNameValue,
            "lastName": lastNameValue,
            "phone": phoneValue,
            "email": emailValue,
            "address": {
                "city" : cityValue,
                "state" : stateValue,
                "streetAddress" : streetAddressValue,
                "zip" : zipValue},
            "description": descriptionValue
        });
    }

 return (
     <form className="ui form attached bottom segment">
         <div className="five fields attached">
             <div className="field">
                 <label>Id</label>
                 <div className="ui input">
                     <input placeholder="Id" type="text" onChange={e => { setIdValue(e.target.value) } } />
                 </div>
             </div>
             <div className="field">
                 <label>First Name</label>
                 <div className="ui input">
                     <input placeholder="First Name" type="text" onChange={e => { setFirstNameValue(e.target.value) } } />
                 </div>
             </div>
             <div className="field">
                 <label>Last Name</label>
                 <div className="ui input">
                     <input placeholder="Last Name" type="text" onChange={e => { setLastNameValue(e.target.value) } } />
                 </div>
             </div>
             <div className="field">
                 <label>E-mail</label>
                 <div className="ui input">
                     <input placeholder="E-mail" type="text" onChange={e => { setEmailValue(e.target.value) } } />
                 </div>
             </div>
             <div className="field">
                 <label>Phone</label>
                 <div className="ui input">
                     <input placeholder="Phone" type="text" onChange={e => { setPhoneValue(e.target.value) } } />
                 </div>
             </div>
         </div>
         <div className="four fields">
             <div className="field">
                 <label>City</label>
                 <div className="ui input">
                     <input placeholder="City" type="text" onChange={e => { setCityValue(e.target.value) } } />
                 </div>
             </div>
             <div className="field">
                 <label>State</label>
                 <div className="ui input">
                     <input placeholder="State" type="text" onChange={e => { setStateValue(e.target.value) } } />
                 </div>
             </div>
             <div className="field">
                 <label>Street Address</label>
                 <div className="ui input">
                     <input placeholder="Street Address" type="text" onChange={e => { setStreetAddressValue(e.target.value) } } />
                 </div>
             </div>
             <div className="field">
                 <label>Zip</label>
                 <div className="ui input">
                     <input placeholder="Zip" type="text" onChange={e => { setZipValue(e.target.value) } } />
                 </div>
             </div>
         </div>
         <div className="field">
             <label>Description</label>
             <div className="ui input">
                 <input placeholder="Description" type="text" onChange={e => { setDescriptionValue(e.target.value) } } />
             </div>
         </div>
         <div className="ui blue submit button" onClick={() => { createData() } }>Добавить</div>
     </form>
 )
}