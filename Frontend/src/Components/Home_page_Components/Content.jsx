import Classes from './classes'

const Content = () => {
  return (
    <div className="flex flex-col items-center h-full gap-8 bg-slate-300">
      <h1 className="w-5/6 px-1 py-4 text-2xl font-extrabold text-center rounded-b-lg shadow-lg md:w-1/2 bg-umkc_light_blue text-umkc_yellow">
        CSEE GTA/Grader Open Courses
      </h1>
      <div className="h-5/6">
        <Classes />
      </div>
    </div>
  )
}
export default Content
