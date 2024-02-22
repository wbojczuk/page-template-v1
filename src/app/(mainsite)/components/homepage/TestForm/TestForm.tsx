import MultiPartForm from "../../misc/MultiPartForm/MultiPartForm"
import ServiceArea from "../../misc/ServiceArea/ServiceArea"
import { multiPartFormSection } from "../../../../../../globals"

export default function TestForm() {
  const sections: multiPartFormSection[] = [
    {
      title: "Your Details",
      subtitle: "Let's get to know one another!",
      elements:
      <>
        <div data-class="half-input">
          <label htmlFor="input1">Your Name</label>
          <input required name="input1" type="text" placeholder="Steve" />
        </div>
        <div data-class="half-input">
          <label htmlFor="input1">Last Name</label>
          <input name="input1_2" type="text" placeholder="Jobs" />
        </div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />

        <label data-class="select-label" htmlFor="select">HEY</label>
        <div data-class="select">
          
          <select defaultValue={"1"} name="select" id="select">
            <option value="1">Option #1</option>
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

      <textarea required name="text" id="text" placeholder="Put Smt Here"></textarea>

      <div data-class="date">
        <label htmlFor="date">Date</label>
        <input type="datetime-local" name="date" id="date" />
      </div>
     </>,
    },
    {
      title: "Test Title3",
      elements: <>
      <label data-class="bold" htmlFor="">Radio Group:</label>
      <div data-class="radio">
        <label htmlFor="radio">Radio input</label>
        <input type="radio" name="radio" id="radio" />
      </div>
      <input name="input6" type="text" placeholder="test input" />
      
     </>
    }
]

const areaData: string[] = [
  "Acworth, GA", "Adairsville, GA", "Atlanta, GA", "Calhoun, GA", "Cartersville, GA", "Cedartown, GA", "Dallas, GA", "Dalton, GA", "Douglasville, GA", "Euharlee, GA", "Fairmount, GA", "Hiram, GA", "Kennesaw, GA", "Marietta, GA", "Resaca, GA", "Rockmart, GA", "Rome, GA", "Roswell, GA", "Sandy Springs, GA", "Summerville, GA", "Taylorsville, GA", "White, GA", "Woodstock, GA"
]

  return (
    <>
    <div className="center" style={{width: "100vw", height: "100vh"}}>
      <MultiPartForm sections={sections} />
    </div>
    <ServiceArea areaData={areaData} mapURL="https://www.google.com/maps/d/u/0/embed?mid=1bCgL0sSznR3U5MsP3am2gxbN_te7m74&ehbc=2E312F&noprof=1" />
    </>
  )
}
