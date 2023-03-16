import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  return (
    <div>
      hello: {pid}
    </div>
  )
}

export default Post
