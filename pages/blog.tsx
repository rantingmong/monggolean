import type { GetStaticProps } from 'next'
import BlogGroup from "@components/blog-group"

import { groupBy, map } from 'lodash'
import { gql } from 'graphql-request'
import { client } from '@logic/grahpql'
import { getMonth, getYear, parseISO } from 'date-fns'

export const getStaticProps: GetStaticProps = async context => {

  const query = gql`
    query {
      user(username: "monggolean") {
        publication {
          posts {
            cuid
            slug
            title
            brief
            dateAdded
          }
        }
      }
    }`

  const result = await client.request(query)
  const posts = groupBy(result.user.publication.posts, post => {

    const date = parseISO(post.dateAdded)
    return `${getYear(date)}-${getMonth(date)}`
  })

  return {
    props: {
      posts
    },
    revalidate: 120
  }
}

export default function Blog({ posts }) {

  const content = map(Object.keys(posts), date => {
    return {
      date: date,
      posts: posts[date]
    }
  })

  return (
    <div className='p-5'>
      <h1 className='lg:hidden text-3xl mb-2 font-bold'>Blog</h1>
      <h2 className='select-none'>This is where I'll rant about the fascinations and ruminations I have with life and work!</h2>
      <div className='mt-8 space-y-8 pb-12'>
        {map(content, item => <BlogGroup {...item} />)}
      </div>
    </div>
  )
}
