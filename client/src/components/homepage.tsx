import { useData, useMutation } from "../utils/hooks"

const Homepage = () => {
  const { data, loading } = useData("contacts")

  const [createContact] = useMutation<any>('contact')


  const handler = () => {
    createContact({
      email: "foo@bar.com",
      firstName: "foo2",
      lastName: "bar"
    })
  }

  return (
    <div className="flex flex-column">
      <span>Hello world!</span>
      <button className="w4" onClick={handler}>Create Contact</button>
      {data && (
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  )
}

export default Homepage