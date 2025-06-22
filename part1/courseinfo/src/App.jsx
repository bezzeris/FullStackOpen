const App = () => {

  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        excercises: 10,
      },
      {
        name: 'Using props to pass data',
        excercises: 7,
      },
      {
        name: 'State of a component',
        excercises: 14,
      }
    ]
  }
  console.log(course)

  return (
    <div>
      <h1>{course.name}</h1>
      <p>{course.parts[0].name}: {course.parts[0].excercises}</p>
      <p>{course.parts[1].name}: {course.parts[1].excercises}</p>
      <p>{course.parts[2].name}: {course.parts[2].excercises}</p>
      <p>Total excercises: {course.parts[0].excercises + course.parts[1].excercises + course.parts[2].excercises}</p>
    </div>
  )
}

export default App