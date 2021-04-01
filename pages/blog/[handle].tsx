import { client } from "@logic/grahpql"
import { format, parseISO, parseJSON } from "date-fns"
import { gql } from "graphql-request"
import { GetStaticPaths, GetStaticProps } from "next"

export const getStaticPaths: GetStaticPaths = async context => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {

  const query = gql`
    query Details($slug: String!) {
      post(slug: $slug, hostname: "blog.mong.work") {
        title
        content
        dateAdded
      }
    }`

  const result = await client.request(query, { slug: context.params.handle })

  return {
    props: result.post
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

  return (
    <article className='p-5'>
      <h1 className='text-4xl font-bold uppercase'>{post.title}</h1>
      <p>Posted {datePost}</p>
      <br />
      <div className='font-serif' dangerouslySetInnerHTML={{__html:post.content}}>
      </div>
    </article>
  )
}
