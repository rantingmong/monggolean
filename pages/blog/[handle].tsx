import { client } from "@logic/grahpql"
import { format, parseJSON } from "date-fns"
import { gql } from "graphql-request"
import { map } from "lodash"
import { GetStaticPaths, GetStaticProps } from "next"

import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
// import monokai from 'react-syntax-highlighter/dist/esm/styles/hljs/monokai'

export const getStaticPaths: GetStaticPaths = async context => {

  const query = gql`
    query Blogs {
      user(username: "monggolean") {
        publication {
          posts {
            slug
          }
        }
      }
    }
  `

  const result = await client.request(query)

  return {
    paths: map(result.user.publication.posts, ({ slug }) => `/blog/${slug}`),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {

  const query = gql`
    query Details($slug: String!) {
      post(slug: $slug, hostname: "blog.mong.work") {
        title
        content
        contentMarkdown
        dateAdded
      }
    }`

  try {
    const result = await client.request(query, { slug: context.params.handle })

    return {
      props: result.post,
      revalidate: 3600
    }
  } catch {
    return {
      notFound: true
    }
  }
}

export default function BlogHandle(post) {

  if (!post) {
    return <span>Meh.</span>
  }

  const date = parseJSON(post.dateAdded)
  let datePost: string = ''

  if (date) {
    try {
      datePost = format(date, 'MMM dd, yyyy | hh:mm aa')
    } catch {
      datePost = ''
    }
  } else {
    datePost = ''
  }

  const renderers = {
    code: ({ language, value }) => {
      return (
        <>
          <div className='rounded-lg col-span-2 lg:block hidden overflow-hidden'><SyntaxHighlighter language={language}>{value}</SyntaxHighlighter></div>
          <div className='rounded-lg col-span-2 h-full bg-gray-200 lg:hidden flex items-center justify-center'><span className="material-icons">code</span></div>
        </>
      )
    },
    heading: ({ level, children }) => {
      switch (level) {
        case 1:
          return <h1 className='text-3xl col-span-6'>{children}</h1>
        case 2:
          return <h2 className='text-2xl col-span-6'>{children}</h2>
        case 3:
          return <h3 className='text-1xl col-span-6'>{children}</h3>
        case 4:
          return <h4 className='text-xl col-span-6'>{children}</h4>
        case 5:
          return <h5 className='text-md col-span-6'>{children}</h5>
        case 6:
          return <h6 className='text-sm col-span-6'>{children}</h6>
      }
    },
    paragraph: ({children}) => <p className='mb-2 col-span-4'>{children}</p>,
    image: ({src, alt}) => <img src={src} alt={alt} className='col-span-4 border border-gray-400 rounded-md overflow-hidden object-fill'></img>,
    text: ({value}) => <span className='col-span-4'>{value}</span>
  }

  return (
    <article className='p-5 pt-10 pb-20'>
      <h1 className='text-4xl font-bold uppercase select-none cursor-default'>{post.title}</h1>
      <p className='select-none cursor-default'>Posted {datePost}</p>
      <br />
      <div className='font-serif grid grid-cols-6 gap-4'>
        <Markdown renderers={renderers}>{post.contentMarkdown}</Markdown>
      </div>
    </article>
  )
}
