import MultiPartForm from "../../misc/MultiPartForm/MultiPartForm"

export default function TestForm() {
    const sections = [
        {
          title: "Personal Details",
          subtitle: "Let's get to know one another!",
          elements:
          <>
            <div>
              <label htmlFor="input1">First Name</label>
              <input required name="input1" type="text" placeholder="Steve" />
            </div>
            <div>
              <label htmlFor="input1">Last Name</label>
              <input name="input1_2" type="text" placeholder="Jobs" />
            </div>
            
            <input name="input2" type="text" placeholder="test input" />
            <input name="input3" required type="text" placeholder="test input" />
          </>
        },
        {
          title: "Test Title2",
          elements: <>
          <input name="input4" type="text" placeholder="test input" />
          <input name="input5" type="text" placeholder="test input" />
         </>,
        },
        {
          title: "Test Title3",
          elements: <>
          <input name="input6" type="text" placeholder="test input" />
          
         </>
        }
    ]
  return (
    <div className="center" style={{width: "100vw", height: "100vh"}}>
      <MultiPartForm sections={sections} />
    </div>
  )
}
