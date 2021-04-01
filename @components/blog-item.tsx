import Link from 'next/link'

export default function BlogItem(post) {
  return (
    <article>
      <Link href={`/blog/${post.slug}`}>
        <div className='space-y-4 bg-white dark:bg-gray-600 rounded-lg shadow-lg p-5 text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer'>
          <h5 className='text-md select-none'>{post.title}</h5>
          <p className='text-sm select-none font-serif'>{post.brief}</p>
        </div>
      </Link>
    </article>
  )
}
