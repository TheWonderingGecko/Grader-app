import { useState } from 'react'
import { useCourseDeletion } from '../../hooks/useCourseDeletion'
import { useCourseEdit } from '../../hooks/useCourseEdit'
import { useCoursesContext } from '../../hooks/useCoursesContext'

const Position_card = (props) => {
  const [edit, setEdit] = useState('')
  const [view, setView] = useState('')

  const [deleteCourse, setDeleteCourse] = useState(false)
  const { courseDelete, success, error } = useCourseDeletion()
  const { courseEdit, successEdit, errorEdit } = useCourseEdit()
  const [editNotes, setEditNotes] = useState(props.notes)

  const handleDelete = async () => {
    setDeleteCourse(true)
    setEdit('')
    deletedCourse = await courseDelete(props.id)
  }

  const handleEdit = async () => {
    console.log(editNotes)
    await courseEdit(props.id, editNotes)
  }

  return (
    <div
      className="relative flex flex-col items-center justify-center w-3/4 p-4 bg-white border-2 rounded-lg border-umkc_light_blue group lg:hover:bg-umkc_dark_blue gap-y-2"
      key={props.id}
    >
      <div className="lg:group-hover:hidden">
        {props.title} ({props.sem})
      </div>
      <div className="lg:group-hover:hidden">8 applicants </div>{' '}
      <div className="lg:group-hover:hidden">Position: {props.position}</div>
      <div className="flex items-center justify-center gap-2 text-umkc_dark_blue lg:hidden lg:group-hover:flex">
        <button
          className="w-full p-2 rounded-lg bg-umkc_yellow lg:h-20"
          onClick={() => setEdit(props.id)}
        >
          Edit course
        </button>
        <button
          className="w-full p-2 rounded-lg bg-umkc_yellow lg:h-20"
          onClick={() => setView(props.id)}
        >
          View applicants
        </button>
      </div>
      {edit === props.id && (
        <div className="fixed top-0 left-0 z-30 flex items-center justify-center w-screen h-screen bg-black/95">
          <div className="relative z-50 flex flex-col w-5/6 p-4 overflow-hidden text-left border-4 rounded-lg bg-slate-100 border-umkc_light_blue gap-y-4">
            <div className="flex justify-between px-2 ">
              {props.title}
              <button className="text-black " onClick={() => setEdit('')}>
                Close
              </button>
            </div>
            <div className="hidden">Notes: {props.notes}</div>
            <form action="">
              <div className="">
                <label htmlFor="Notes">Notes:</label>{' '}
                <textarea
                  type="text"
                  name="Notes"
                  id="Notes"
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  className="w-full p-2 py-4 overflow-auto resize-y bg-umkc_yellow/50 max-h-40 min-h-[5rem] "
                />
              </div>
            </form>

            <div className="">Position: {props.position}</div>
            <div className="">Major: {props.major}</div>
            <div className="">Semester: {props.sem}</div>

            <div className="flex items-center justify-center gap-x-4">
              <button
                className="p-2 rounded-md bg-umkc_yellow"
                onClick={handleEdit}
              >
                Edit Notes
              </button>
              <button
                className="p-2 font-bold text-black uppercase rounded-md bg-error"
                onClick={handleDelete}
              >
                Close Position
              </button>
            </div>
          </div>
        </div>
      )}
      {view === props.id && (
        <div className="fixed top-0 left-0 z-30 flex items-center justify-center w-screen h-screen bg-black/95 ">
          <div className="z-50 flex flex-col w-5/6 p-2 overflow-hidden border-4 rounded-lg bg-slate-100 border-umkc_light_blue gap-y-4">
            <div className="flex justify-between px-2">
              {props.title} <div>8 applicants</div>
              <button className="text-black " onClick={() => setView('')}>
                Close
              </button>
            </div>

            <table className="text-center border-2 rounded-md bg-slate-300">
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
