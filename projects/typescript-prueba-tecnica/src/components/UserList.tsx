import resultUsers from '../mockup/resultUsers.json'


function UserList() {
  const dataUsers = resultUsers.results
  const hasUsers = dataUsers.length > 0

  return (
    <>
      <section>
        <article>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Country</td>
                <td>Email Address</td>
                <td>Current Age</td>
                <td>registered Age</td>
                <td>Actions</td>
              </tr>
            </thead>

            <tbody>
              {
                hasUsers
                  ? (
                    dataUsers.map(user => (
                      <tr key={user.login.uuid}>
                        <td>
                          <div>
                            <img src={`${user.picture.thumbnail}`} alt={`Avatar of ${user.name.first} ${user.name.last}`} />
                          </div>
                          <div>
                            <span>
                              {user.name.first} {user.name.last}
                            </span>
                          </div>
                        </td>
                        <td>
                          <div>
                            {
                              user.location.country
                            }
                          </div>
                        </td>
                        <td>
                          <div>{user.email}</div>
                        </td>
                        <td><div>{user.dob.age}</div></td>
                        <td><div>{user.registered.age}</div></td>
                        <td>
                          <button>
                            <span>Delete</span>
                          </button>
                        </td>
                      </tr>
                    ))
                  )
                  : (
                    <tr>
                      <td>Not results</td>
                    </tr>
                  )
              }
            </tbody>
          </table>
        </article>
      </section>
    </>
  )
}

export default UserList