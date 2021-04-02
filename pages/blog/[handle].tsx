import { client } from "@logic/grahpql"
import { format, parseJSON } from "date-fns"
import { gql } from "graphql-request"
import { map } from "lodash"
import { GetStaticPaths, GetStaticProps } from "next"

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
    paths: map(result.user.publication.posts, slug => `/blog/${slug}`),
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
      props: result.post
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

  return (
    <article className='p-5'>
      <h1 className='text-4xl font-bold uppercase'>{post.title}</h1>
      <p>Posted {datePost}</p>
      <br />
      <div className='font-serif'>
        {post.contentMarkdown}
      </div>
    </article>
  )
}
