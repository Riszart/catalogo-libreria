export function Btn({text, className}){
  return (
    <a href="https://wa.me/989606047" target="_blank">
      <button className={`cursor-pointer hover:bg-indigo-400 pt-2 pb-2 pl-4 pr-4 rounded-xl bg-indigo-600 text-white capitalize font-bold tracking-wide ${className}`} >{text}</button>
    </a>
  )
}
