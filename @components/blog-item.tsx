import Link from 'next/link'

export default function BlogItem() {
  return (
    <article>
      <Link href='/blog/sample-handle'>
        <div className='space-y-4 bg-white dark:bg-gray-600 rounded-lg shadow-lg p-5 text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer'>
          <h5 className='text-md select-none'>[Title Goes here]</h5>
          <p className='text-sm select-none'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </Link>
    </article>
  )
}
