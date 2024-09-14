// 'use client';

import { Badge, Card, Divider, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from '@tremor/react'
import { useAppSelector } from '../../hooks/useStore'
import { useUserActions } from '../../hooks/useUserActions'

function ListUsers() {
  const users = useAppSelector((state) => state.user)
  const { removeUserById } = useUserActions()

  return (
    <Card className=''>
      <Title>
        Users
        <Badge className='ml-2 rounded-full bg-blue-800 text-white'>{users.length}</Badge>
      </Title>

      <Divider className='my-4' />

      <div className='sm:flex sm:items-center sm:justify-between sm:space-x-10'>
        <div>
          <h3 className='font-semibold text-tremor-content-strong TEMPdark:text-dark-tremor-content-strong'>Workspaces</h3>
          <p className='mt-1 text-tremor-default leading-6 text-tremor-content TEMPdark:text-dark-tremor-content'>Overview of all registered workspaces within your organization.</p>
        </div>
        <button
          type='button'
          className='mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis TEMPdark:bg-dark-tremor-brand TEMPdark:text-dark-tremor-brand-inverted TEMPdark:shadow-dark-tremor-input TEMPdark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit'
        >
          Add workspace
        </button>
      </div>

      <Table className='mt-8'>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell className='text-center'>Age</TableHeaderCell>
            <TableHeaderCell className='text-center'>Number</TableHeaderCell>
            <TableHeaderCell className='text-center'>Location</TableHeaderCell>
            <TableHeaderCell className='text-center'>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.login.uuid}>
              <TableCell>
                <div className='flex items-center justify-start gap-x-3'>
                  <picture className=' rounded-full w-12 h-12 overflow-hidden'>
                    <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}'s profile photo`} />
                  </picture>

                  <div>
                    <span>
                      {user.name.first} {user.name.last}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className='text-center'>{user.dob.age}</TableCell>
              <TableCell className='text-center'>{user.cell}</TableCell>
              <TableCell className='text-center'>
                {user.location.city}, {user.location.country}
              </TableCell>
              <TableCell>
                <div className='flex items-center justify-center gap-x-3'>
                  <button className='relative text-tremor-brand'>
                    <span className='absolute inset-0 hidden' aria-hidden={true}>
                      Edit
                    </span>

                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                      />
                    </svg>
                  </button>
                  <button className='relative text-dark-tremor-brand-inverted' onClick={() => removeUserById(user.login.uuid)}>
                    <span className='absolute inset-0 hidden' aria-hidden={true}>
                      Delete
                    </span>

                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                      />
                    </svg>
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default ListUsers
