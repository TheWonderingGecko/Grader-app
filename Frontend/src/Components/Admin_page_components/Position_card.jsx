import { useState } from 'react'
import { useCourseDeletion } from '../../hooks/useCourseDeletion'
import { useCourseEdit } from '../../hooks/useCourseEdit'

const Position_card = (props) => {
  const [edit, setEdit] = useState('')
  const [resumeUrl, setResumeUrl] = useState('')
  const [view, setView] = useState('')

  const [deleteCourse, setDeleteCourse] = useState(false)
  const { courseDelete, success, error } = useCourseDeletion()

  const { courseEdit, successEdit, errorEdit } = useCourseEdit()
  const [editNotes, setEditNotes] = useState(props.notes)

  const order = ['PHD', 'MS', 'BS']

  const handleViewResume = (resumePath) => {
    setResumeUrl(`http://localhost:5000/${resumePath}`)
  }

  const handleDelete = async () => {
    setDeleteCourse(true)
    setEdit('')
    deletedCourse = await courseDelete(props.id)
  }

  const handleEdit = async () => {
    console.log(editNotes)
    await courseEdit(props.id, editNotes)
  }

  const handleApplication = async (e) => {
    e.preventDefault()
    await addAPP(courseId, props.applications, application)
  }

  return (
    <div
      className="relative flex flex-col items-center justify-center w-3/4 p-4 bg-white border-4 rounded-lg border-umkc_light_blue group lg:hover:bg-umkc_dark_blue gap-y-2 max-h-[15rem]"
      key={props.id}
    >
      <div className="lg:group-hover:hidden">
        {props.title} ({props.sem})
      </div>
      <div className="lg:group-hover:hidden">
        {props.applications.length} applicants{' '}
      </div>{' '}
      <div className="lg:group-hover:hidden">Position: {props.position}</div>
      <div className="flex items-center justify-center gap-2 text-umkc_dark_blue lg:hidden lg:group-hover:flex">
        <button
          className="w-full p-2 rounded-lg bg-umkc_yellow md:h-20"
          onClick={() => setEdit(props.id)}
        >
          Edit course
        </button>
        <button
          className="w-full p-2 rounded-lg bg-umkc_yellow md:h-20"
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
          {!resumeUrl && (
            <div className="z-50 flex flex-col w-5/6 p-2 overflow-auto border-4 rounded-lg bg-slate-100 border-umkc_light_blue gap-y-4 max-h-[40vh]">
              <div className="flex justify-between px-2">
                {props.title} <div>{props.applications.length} applicants</div>
                <button className="text-black " onClick={() => setView('')}>
                  Close
                </button>
              </div>

              <table className="text-left border-2 rounded-md bg-slate-300 md:text-center">
                <thead className="">
                  <tr>
                    <th>Name</th>
                    <th>Level</th>

                    <th>Resume</th>
                  </tr>
                </thead>
                <tbody className="bg-slate-100 ">
                  {props.applications.sort(
                    (a, b) => order.indexOf(a.level) - order.indexOf(b.level)
                  ) &&
                    props.applications.map((app) => {
                      return (
                        <tr className=" odd:bg-umkc_yellow">
                          <td className="pl-2">
                            {app.firstName} <br /> {app.lastName}
                          </td>
                          <td className="uppercase"> {app.level} </td>

                          <td
                            className="text-blue-500 cursor-pointer"
                            onClick={() => handleViewResume(app.resumeFile)}
                          >
                            View Resume
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
            </div>
          )}
          {resumeUrl && (
            <div className="z-[60] p-4 bg-white rounded-lg w-3/4 h-3/4">
              <button
                className="mb-4 text-black"
                onClick={() => setResumeUrl('')}
              >
                Close
              </button>
              <embed
                src={resumeUrl}
                type="application/pdf"
                className="w-full h-5/6"
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
export default Position_card
