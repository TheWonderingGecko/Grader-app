import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <div className="  flex items-center justify-center w-screen h-screen bg-[url('../assets/Big_roo.png')] bg-[20%,60%] lg:bg-[10%,60%] fade-in">
      <div className="w-3/4 p-4 text-center bg-white border-2 shadow-2xl border-umkc_light_blue">
        <p className="font-semibold ">
          Thank you for your submissions!! We will review you application(s) and
          contact you if we feel you're application is a good fit for the
          postion.
        </p>
        <div className="p-4 font-bold text-umkc_light_blue">
          <Link to="/">Return to Homepage</Link>
        </div>
      </div>
    </div>
  )
}

export default Thanks
