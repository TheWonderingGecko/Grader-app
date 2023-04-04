import '../../CSS/tailwind.css'
import Position_card from './Position_card'
import { classes } from '../../HomeData'

const Admin_Link_Test = () => {
  return (
    <div className="  flex text-umkc_dark_blue font-bold text-center ">
      <div className=" h-screen basis-1/4 bg-slate-400 flex flex-col justify-center items-center "></div>
      <div className="  basis-3/4  max-h-screen bg-slate-200 flex flex-col items-center p-4 gap-3 overflow-auto ">
        {classes.map((item) => (
          <Position_card
            title={item.name}
            sem={item.sem}
            position={item.position}
            notes={item.Notes}
          />
        ))}
      </div>
    </div>
  )
}
export default Admin_Link_Test
