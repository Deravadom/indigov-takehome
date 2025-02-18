import { useData, useMutation } from "../utils/hooks"

const Homepage = () => {
  const { data, loading } = useData("contacts")

  const [createContact] = useMutation<any>('contact')
  const [exportContact] = useMutation<any>('contacts/export')

  const createHandler = () => {
    createContact({
      email: "foo@bar.com",
      firstName: "foo2",
      lastName: "bar"
    })
  }

  const exportHandler = () => {
    exportContact({
      email: "michael.needleman01@gmail.com"
    })
  }

  return (
    <div className="flex flex-column">
      <span>Hello world!</span>
      <button className="w4" onClick={createHandler}>Create Contact</button>
      <button className="w4" onClick={exportHandler}>Export Contacts</button>
      {data && (
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  )
}

export default Homepage