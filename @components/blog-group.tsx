import { format, parse } from "date-fns";
import { map } from "lodash";
import BlogItem from "./blog-item";

export default function BlogGroup({date, posts}) {
  return (
    <div className='space-y-2'>
      <h4 className='select-none'>{format(parse(date, 'yyyy-MM', new Date()), 'MMMM yyyy')}</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {map(posts, post => <BlogItem {...post} />)}
      </div>
    </div>
  )
}