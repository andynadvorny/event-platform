import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  return (
    <>
      {data?.lessons.map(lesson => {
        return <p key={lesson.id}>{lesson.title}</p>
      })}
    </>
  )
}

export default App
