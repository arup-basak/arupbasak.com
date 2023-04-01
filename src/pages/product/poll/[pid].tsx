import { useRouter } from 'next/router'

const Polls = () => {
  const router = useRouter()
  const { pid } = router.query
  return (
    <>
      {pid}
    </>
  )
}

export default Polls
