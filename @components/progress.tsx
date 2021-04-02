export default function Progress({show, progress}) {
  return show
    ? <div className='fixed left-0 top-0 h-1 bg-blue-900 dark:bg-blue-200' style={{width:`${progress}%`}}></div>
    : null
}
