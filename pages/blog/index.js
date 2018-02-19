import Link from 'next/link'
import Layout from '../../layout/Main'
import posts from '../../content/all-posts'
import Card from '../../components/Card'

const Post = () => (
  <Layout title="blog">
    <div>
      {posts.map(({ title, date, slug }, i) => (
        <Card key={i}>
          <h3>
            <Link href={`http://localhost:3000/blog/${slug}`}>
              <a>{title}</a>
            </Link>
          </h3>
          <div>{date}</div>
        </Card>
      ))}
    </div>
  </Layout>
)

export default Post