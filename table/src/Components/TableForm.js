import React, { useState } from "react";
import { useForm } from "react-hook-form"
import clsx from "clsx";

export default function TableForm({addItems, setIsAddItem}) {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {
        addItems({
            "id": data.id,
            "firstName": data.firstName,
            "lastName": data.lastName,
            "phone": data.phone,
            "email": data.email,
            "address": {
                "city" : data.city,
                "state" : data.state,
                "streetAddress" : data.streetAddress,
                "zip" : data.zip
            },
            "description": data.description
        });
        console.log(JSON.stringify(data))
    };

 return (
     <form className="ui small form attached bottom segment" onSubmit={ handleSubmit(onSubmit) }>
         <div className="five fields attached">
             <div className={ clsx("field", errors.id ? "error" : "") }>
                 <label>Id</label>
                 <div className="ui input">
                     <input
                         name="id"
                         type="text"
                         ref={register({
                             required: true,
                             valueAsNumber: true,
                             pattern: {
                                 value: /^\d+$/,
                             }
                         })}
                     />
                 </div>
                 {errors.id && <p className="form-error-message">only numbers allowed</p>}
             </div>
             <div className={ clsx("field", errors.firstName ? "error" : "") }>
                 <label>First Name</label>
                 <div className="ui input">
                     <input
                         name="firstName"
                         type="text"
                         ref={register({
                             required: true,
                             pattern: {
                                 value: /^[A-Za-z]+$/i
                             }
                         })}
                     />
                 </div>
                 {errors.firstName && <p className="form-error-message">only letters allowed</p>}
             </div>
             <div className={ clsx("field", errors.lastName ? "error" : "") }>
                 <label>Last Name</label>
                 <div className="ui input">
                     <input
                         name="lastName"
                         type="text"
                         ref={register({
                             required: true,
                             pattern: {
                                 value: /^[A-Za-z]+$/i
                             }
                         })}
                     />
                 </div>
                 {errors.lastName && <p className="form-error-message">only letters allowed</p>}
             </div>
             <div className={ clsx("field", errors.email ? "error" : "") }>
                 <label>E-mail</label>
                 <div className="ui input">
                     <input
                         name="email"
                         type="text"
                         ref={register({
                             required: true,
                             pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                         })}
                     />
                 </div>
                 {errors.email && <p className="form-error-message">invalid email address</p>}
             </div>
             <div className={ clsx("field", errors.phone ? "error" : "") }>
                 <label>Phone</label>
                 <div className="ui input">
                     <input
                         name="phone"
                         type="tel"
                         ref={register({
                             required: true,
                             maxLength: 13,
                             minLength: 8
                         })}
                     />
                 </div>
                 {errors.phone && <p className="form-error-message">invalid phone number</p>}
             </div>
         </div>
         <div className="four fields">
             <div className="field">
                 <label>City</label>
                 <div className="ui input">
                     <input
                         name="city"
                         type="text"
                         ref={register}
                     />
                 </div>
             </div>
             <div className="field">
                 <label>State</label>
                 <div className="ui input">
                     <input
                         name="state"
                         type="text"
                         ref={register}
                     />
                 </div>
             </div>
             <div className="field">
                 <label>Street Address</label>
                 <div className="ui input">
                     <input
                         name="address"
                         type="text"
                         ref={register}
                     />
                 </div>
             </div>
             <div className="field">
                 <label>Zip</label>
                 <div className="ui input">
                     <input
                         name="zip"
                         type="text"
                         ref={register}
                     />
                 </div>
             </div>
         </div>
         <div className="field">
             <label>Description</label>
             <div className="ui input">
                 <input
                     name="description"
                     type="text"
                     ref={register}
                 />
             </div>
         </div>
         <button className="ui green submit button" type="submit">Добавить</button>
         <div className="ui grey submit button right floated" onClick={() => { setIsAddItem(false) } }>Отменить</div>
     </form>
 )
}