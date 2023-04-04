import '../../CSS/tailwind.css'
import Position_card from './Position_card'
import { classes } from '../../HomeData'

const Admin_Link_Test = () => {
  return (
    <div className="  flex text-umkc_dark_blue font-bold text-center ">
      <div className=" h-screen basis-1/4 bg-slate-400 flex flex-col justify-center items-center">
        <form className=" flex flex-col  h-full text-center p-2">
          <legend className="pb-2">
            <h3>Major</h3>
          </legend>
          <fieldset className="flex  justify-between pb-4">
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
          <fieldset className="flex flex-col justify-start items-start pb-4">
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

          <fieldset
            className=" flex flex-col pb-4 items-start
          "
          >
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

          <legend className="pb-2">
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
              Graduate
            </label>
          </fieldset>
        </form>
      </div>
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
