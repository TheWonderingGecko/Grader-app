import Classes from './classes'

const Content = () => {
  return (
    <div className="flex flex-col items-center gap-8 bg-slate-300 h-5/6">
      <h1 className="pt-8 text-2xl font-extrabold text-center lg:bg-umkc_light_blue lg:p-4 lg:rounded-b-lg lg:text-umkc_yellow lg:shadow-lg">
        CSEE GTA/Grader Open Courses
      </h1>
      <div className="">
        <Classes />
      </div>
    </div>
  )
}
export default Content
