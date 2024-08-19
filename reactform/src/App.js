import React, { useState } from 'react'
import Form from './components/Form'

const App = () => {

  // const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "", favCar: "" })
  // // const[lastName,setLastName] = useState("")
  // console.log(formData)

  // function changehandler(e) {
  //   const { name, value, checked, type } = e.target
  //   setFormData(prev => {
  //     return {
  //       ...prev,
  //       [name]: type === "checkbox" ? checked : value
  //     }
  //   })
  // }

  // function clickhandler(e){
  //   e.preventDefault();
  //   console.log(formData)
  // }

  // console.log(name)
  // // console.log(lastName)
  // function changefirsthandler(e){
  //   setName({...lastname,e.target.value});
  //   // console.log(e.target.value)  
  //   setName(e.target.value)
  //   // console.log(e.target.value)
  // }
  return (
    <>
    <Form/>


      {/* <form onSubmit={clickhandler}>
        <input value={formData.firstName} name="firstName" onChange={changehandler} type='text' placeholder='first name' />
        <br />
        <input value={formData.lastName} name="lastName" onChange={changehandler} type='text' placeholder='second name' />
        <br />
        <input value={formData.email} name="email" onChange={changehandler} type='text' placeholder='email' />
        <br />
        <textarea
          placeholder='enter your comments'
          onChange={changehandler}
          name='comments'
        ></textarea>
        <br />
        <input type='checkbox' onChange={changehandler} name="isVisible" id='isVisible' checked={formData.isVisible} />
        <label htmlFor='isVisible'>Am i visible</label>
        <br />

        <br />
        <fieldset>
          <legend>
            Mode:
          </legend>
          <input
            type='radio'
            onChange={changehandler}
            name='mode'
            value="Online-mode"
            id='Online-mode'
            checked={formData.mode === "Online-mode"} />
          <label htmlFor='Online-mode'>online</label>

          <input
            type='radio'
            onChange={changehandler}
            name='mode'
            value="Offline-mode"
            id='Offline-mode'
            checked={formData.mode === "Offline-mode"} />
          <label htmlFor='Offline-mode'>offline</label>
        </fieldset>

        <label htmlFor='favCar'>tell your favourite car </label>
        <select onChange={changehandler} name='favCar' id='favCar' value={formData.favCar}>
          <option value="scorpio">
            scorpio
          </option>
          <option value="fortuner">
            fortuner
          </option>
          <option value="thar">
            thar
          </option>
        </select>

        <br></br>
        <button >submit</button>

      </form> */}


    </>
  )
}

export default App
