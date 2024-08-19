import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", comments: "", isVisible: false, dropdown: "", mode: "" });
    console.log(formData)
    function changehandler(event) {
        const { value, type, checked, name } = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        }
        )
    }


    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(formData);
            }}>
                <label htmlFor='firstname'>First Name: </label>
                <input value={formData.firstname} onChange={changehandler} name="firstname" type='text' placeholder='first name' id='firstname' />
                <label htmlFor='firstname'>Last Name: </label>
                <input value={formData.lastname} onChange={changehandler} name="lastname" type='text' placeholder='last name' id='lastname' />

                <br />

                <label htmlFor='email'>Email:</label>
                <input onChange={changehandler} value={formData.email} name="email" type='text' id='email' />

                <br></br>

                <label htmlFor='comments'>Comments:</label>
                <textarea onChange={changehandler} value={formData.comments} name="comments" id='comments'></textarea>

                <br></br>

                <label htmlFor='isVisible'>Options:</label>
                <input onChange={changehandler} id="isVisible" name="isVisible" type='checkbox' checked={formData.isVisible} />

                <br />

                <fieldset>
                    <legend>Mode:</legend>

                    <label>Choose one:</label>
                    {/* <input type='radio' name='radio' onChange={changehandler} value="online" checked={formData.mode === "onlie"}></input> */}
                    {/* <input type='radio' name='radio' onChange={changehandler} value="offline" checked={formData.mode === "offline"}></input> */}
                    <input type='radio' name='mode' onChange={changehandler} value="online" checked={formData.mode==='online'}/>
                    <input type='radio' name='mode'onChange={changehandler} value="offline" checked={formData.mode==='offline'}/>
                </fieldset>

                <br />

                <label htmlFor='dropdown'>Choose one:</label>
                <select onChange={changehandler} value={formData.dropdown} name="dropdown" id='dropdown'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <br />

                <button>Submit</button>

            </form>
        </>
    )
}
export default Form