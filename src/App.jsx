import { Dropdown } from "../lib/components"

function App() {
  const options = [
    "Apple", "Banana", "Cherry", "Date", "Grape", "Orange",
    "Mango", "Pineapple", "Strawberry"
  ];
  return (
    <>
      <div className="w-100 mt-4 mx-auto">
        <Dropdown multiple={true} withSearch={true} options={options} onChange={(opt) => console.log(opt)} />
      </div>
    </>
  )
}

export default App
