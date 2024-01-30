import MultiPartForm from "../../misc/MultiPartForm/MultiPartForm"

export default function TestForm() {
    const sections = [
        {
          title: "Personal Details",
          subtitle: "Let's get to know one another!",
          elements:
          <>
            <div data-class="half-input">
              <label htmlFor="input1">First Name</label>
              <input required name="input1" type="text" placeholder="Steve" />
            </div>
            <div data-class="half-input">
              <label htmlFor="input1">Last Name</label>
              <input name="input1_2" type="text" placeholder="Jobs" />
            </div>

            <input type="text" />
          
            <div data-class="select">
              <select name="select" id="select">
                <option selected value="1">Option #1</option>
                <option value="2">Option #2</option>
                <option value="3">Option #3</option>
                <option value="4">Option #4</option>
                <option value="5">Option #5</option>
              </select>
            </div>
          </>
        },
        {
          title: "Test Title2",
          elements: <>
          <div data-class='checkbox'>
            <input name="input4" type="checkbox" placeholder="test input" />
            <label htmlFor="input4">Website Design</label>
          </div>
          <div data-class='checkbox'>
            <input name="input5" type="checkbox" placeholder="test input" />
            <label htmlFor="input5">Website Development</label>
          </div>

          <textarea name="text" id="text" placeholder="Put Smt Here"></textarea>

          <div data-class="date">
            <label htmlFor="date">Select Time</label>
            <input type="datetime-local" name="date" id="date" />
          </div>
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
