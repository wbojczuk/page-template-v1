import MultiPartForm from "../../misc/MultiPartForm/MultiPartForm"

export default function TestForm() {
    const sections = [
        <>
            <input name="input1" type="text" placeholder="test input" />
            <input name="input2" type="text" placeholder="test input" />
            <input name="input3" required type="text" placeholder="test input" />
        </>,
        <>
         <input name="input4" type="text" placeholder="test input" />
         <input name="input5" type="text" placeholder="test input" />
        </>,
        <>
        <input name="input6" type="text" placeholder="test input" />
       </>
    ]

  return (
    <MultiPartForm sections={sections} />
  )
}
