import BlogGroup from "@components/blog-group";

export default function Blog() {
  return (
    <div className='p-5'>
      <h2>This is where I'll rant about the fascinations and ruminations I have with life and work!</h2>
      <div className='mt-8 space-y-8 pb-12'>
        <BlogGroup />
        <BlogGroup />
        <BlogGroup />
        <BlogGroup />
        <BlogGroup />
        <BlogGroup />
      </div>
    </div>
  )
}
