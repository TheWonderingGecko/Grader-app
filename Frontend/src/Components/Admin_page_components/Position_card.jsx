import { useState } from 'react'

const Position_card = (props) => {
  const [edit, setEdit] = useState('')
  const [view, setView] = useState()

  return (
    <div
      className="relative flex flex-col items-center justify-center w-3/4 p-4 bg-white border-2 rounded-lg border-umkc_light_blue group md:hover:bg-umkc_dark_blue gap-y-2"
      key={props.id}
    >
      <div className="md:group-hover:hidden">
        {props.title} ({props.sem})
      </div>
      <div className="md:group-hover:hidden">8 applicants </div>{' '}
      <div className="md:group-hover:hidden">Position: {props.position}</div>
      <div className="flex items-center justify-center gap-2 text-umkc_dark_blue md:hidden md:group-hover:flex">
        <button
          className="w-full p-2 rounded-lg bg-umkc_yellow"
          onClick={() => setEdit(props.id)}
        >
          Edit course
        </button>
        <button
          className="w-full p-2 rounded-lg bg-umkc_yellow"
          onClick={() => setView(props.id)}
        >
          View applicants
        </button>
      </div>
      {edit === props.id && (
        <div className="fixed top-0 left-0 z-30 flex items-center justify-center w-screen h-screen bg-black/95">
          <div className="relative z-50 flex flex-col w-5/6 p-4 overflow-hidden border-4 rounded-lg bg-slate-100 border-umkc_light_blue gap-y-4">
            <div className="flex justify-between px-2 ">
              {props.title}
              <button className="text-black " onClick={() => setEdit('')}>
                Close
              </button>
            </div>
            <div className="">Notes: {props.notes}</div>
            <div className="flex items-center justify-center gap-x-4">
              <button className="p-2 rounded-md bg-umkc_yellow">
                Edit Notes
              </button>
              <button className="p-2 font-bold text-black uppercase rounded-md bg-error">
                Close Position
              </button>
            </div>
          </div>
        </div>
      )}
      {view === props.id && (
        <div className="fixed top-0 left-0 z-30 flex items-center justify-center w-screen h-screen bg-black/95 ">
          <div className="z-50 flex flex-col w-5/6 p-2 overflow-hidden border-4 rounded-lg -mt-60 bg-slate-100 border-umkc_light_blue gap-y-4">
            <div className="flex justify-between px-2">
              {props.title} <div>8 applicants</div>
              <button className="text-black " onClick={() => setView('')}>
                Close
              </button>
            </div>

            <table class=" text-center bg-slate-300 border-2 rounded-md">
              <thead className="">
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Resume</th>
                </tr>
              </thead>
              <tbody className="bg-slate-100 ">
                <tr className=" odd:bg-umkc_yellow">
                  <td>Jahmir Swopes</td>
                  <td>MS</td>
                  <td className="text-blue-500">Resume.pdf</td>
                </tr>
                <tr className="p odd:bg-umkc_yellow">
                  <td> Katie Ngo </td>
                  <td>BA</td>
                  <td className="text-blue-500 ">Resume.pdf</td>
                </tr>
                <tr className="p odd:bg-umkc_yellow">
                  <td> Michael Wright </td>
                  <td>PHD</td>
                  <td className="text-blue-500 ">Resume.pdf</td>
                </tr>

                <tr className="p odd:bg-umkc_yellow">
                  <td> Salma Omar </td>
                  <td>BA</td>
                  <td className="text-blue-500 ">Resume.pdf</td>
                </tr>

                <tr className=" odd:bg-umkc_yellow">
                  <td>Jahmir Swopes</td>
                  <td>MS</td>
                  <td className="text-blue-500">Resume.pdf</td>
                </tr>
                <tr className="p odd:bg-umkc_yellow">
                  <td> Katie Ngo </td>
                  <td>BA</td>
                  <td className="text-blue-500 ">Resume.pdf</td>
                </tr>
                <tr className="p odd:bg-umkc_yellow">
                  <td> Michael Wright </td>
                  <td>PHD</td>
                  <td className="text-blue-500 ">Resume.pdf</td>
                </tr>

                <tr className="p odd:bg-umkc_yellow">
                  <td> Salma Omar </td>
                  <td>BA</td>
                  <td className="text-blue-500 ">Resume.pdf</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
export default Position_card
