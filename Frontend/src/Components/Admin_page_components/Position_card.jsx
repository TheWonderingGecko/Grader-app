const Position_card = (props) => {
  return (
    <div className="bg-white min-h-[12rem] h-48 md:h-60 w-60  flex flex-col justify-between border-2 border-umkc_light_blue rounded-lg overflow-hidden">
      <div className="flex justify-between  border-b-2 border-umkc_light_blue px-2">
        <div>
          {props.title} ({props.sem})
        </div>{' '}
        <div>3 applicants </div>
      </div>
      <div className="flex flex-col  basis-4/6 justify-center gap-2 pt-5 overflow-auto  hover:hover:overflow-scroll">
        <div>Position: {props.position}</div> <div>Notes: {props.notes}</div>
      </div>{' '}
      <div className="flex text-center justify-center border-t-2 border-umkc_light_blue">
        <div className=" hover:bg-umkc_yellow  pb-2">See applicants</div>
        <div className=" hover:bg-umkc_yellow border-x-2 pb-2 border-umkc_light_blue ">
          Edit Notes
        </div>{' '}
        <div className=" hover:bg-error hover:text-white pb-2 ">
          Close Position
        </div>
      </div>
    </div>
  )
}
export default Position_card
