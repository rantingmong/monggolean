import BlogItem from "./blog-item";

export default function BlogGroup() {
  return (
    <div className='space-y-2'>
      <h4 className='select-none'>[Date Goes here]</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
      </div>
    </div>
  )
}