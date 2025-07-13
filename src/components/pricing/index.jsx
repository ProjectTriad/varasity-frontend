import Price1 from "../pricing1/index.jsx"
import Price2 from "../pricing2/index.jsx"
import Price3 from "../pricing3/index.jsx"

function Pricing() {
  return (
    <>
      <h1 className='text-center text-5xl font-bold p-7 '>Go Pro Today</h1>
      <h2 className='text-center text-xl text-gray-600 lg:mb-0 '>Make the wise decision for your investments</h2>
      <div
        className='grid grid-cols-1 place-items-center gap-x-10 gap-8 mt-7 sm:grid-cols-1 md:grid-cols-1 md:place-items-center  md:gap-10 lg:grid-cols-3'>
        <Price1/>
        <Price2/>
        <Price3/>
      </div>
    </>
  )
}

export default Pricing