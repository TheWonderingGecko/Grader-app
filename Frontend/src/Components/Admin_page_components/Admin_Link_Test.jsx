import '../../CSS/tailwind.css'
import Position_card from './Position_card'
import { classes } from '../../HomeData'
import BigRoo from '../../assets/Big_roo.png'

const Admin_Link_Test = () => {
  return (
    <div className="relative flex h-screen overflow-hidden font-bold text-center text-black">
      <div className="flex flex-col items-center h-full basis-1/4 bg-slate-400">
        <img src={BigRoo} alt="Umkc" />

        <form className="flex flex-col gap-4 pl-1 text-center">
          <legend className="">
            <h3>Major</h3>
          </legend>
          <fieldset className="flex flex-col items-start justify-between pb-4">
            <label htmlFor="cs" className="">
              <input type="radio" id="cs" name="Major" value="cs" />
              CS
            </label>

            <label htmlFor="ece">
              <input type="radio" id="ece" name="Major" value="ece" />
              ECE
            </label>

            <label htmlFor="it">
              <input type="radio" id="it" name="Major" value="it" />
              IT
            </label>
          </fieldset>

          <legend className="pb-2">
            <h3>Position</h3>
          </legend>
          <fieldset className="flex flex-col items-start justify-start pb-4">
            <label htmlFor="instructor">
              <input
                type="radio"
                id="instructor"
                name="position"
                value="instructor"
              />
              Inst.
            </label>

            <label htmlFor="grader">
              <input type="radio" id="grader" name="position" value="grader" />
              grader
            </label>
          </fieldset>

          <legend className="pb-2">
            <h3>Semester</h3>
          </legend>

          <fieldset className="flex flex-col items-start pb-4 ">
            <label htmlFor="fall">
              <input type="radio" id="fall" name="semester" value="fall" />
              Fall
            </label>

            <label htmlFor="spring">
              <input type="radio" id="spring" name="semester" value="spring" />
              Spring
            </label>

            <label htmlFor="summer">
              <input type="radio" id="summer" name="semester" value="summer" />
              Summer
            </label>
          </fieldset>

          <legend className="pb-2 ">
            <h3>Level</h3>
          </legend>
          <fieldset className="flex flex-col items-start">
            <label htmlFor="undergraduate">
              <input
                type="radio"
                id="undergraduate"
                name="level"
                value="underGraduate"
              />
              BS
            </label>

            <label htmlFor="graduate">
              <input type="radio" id="graduate" name="level" value="graduate" />
              MS
            </label>

            <label htmlFor="Doctorate">
              <input
                type="radio"
                id="Doctorate"
                name="level"
                value="Doctorate"
              />
              PHD
            </label>
          </fieldset>
        </form>
        <button className="w-3/4 mt-8 rounded-md bg-umkc_yellow text-umkc_dark_blue">
          Open Position
        </button>
      </div>
      <div className="flex flex-col basis-3/4 bg-slate-200">
        <div className="flex items-center justify-center p-4 text-3xl border-b-2 shadow-lg border-umkc_light_blue bg-umkc_light_blue text-umkc_yellow">
          Open Courses
        </div>
        <div className="grid grid-cols-1 gap-3 pt-4 overflow-auto h-5/6 justify-items-center md:grid-cols-2 md:bg-red-600">
          {classes.map((item) => (
            <Position_card
              title={item.name}
              sem={item.sem}
              position={item.position}
              notes={item.Notes}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Admin_Link_Test
