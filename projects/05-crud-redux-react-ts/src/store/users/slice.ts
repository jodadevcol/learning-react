import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type UserUUID = string

export interface Users {
  users: User[]
}

export interface User {
  gender: string
  name: Name
  location: Location
  email: string
  login: Login
  dob: Dob
  registered: Dob
  phone: string
  cell: string
  id: ID
  picture: Picture
  nat: string
}

export interface UserId extends User {
  uuid: UserUUID
}

export interface Dob {
  date: Date | string
  age: number
}

export interface ID {
  name: string
  value: string
}

export interface Location {
  street: Street
  city: string
  state: string
  country: string
  postcode: string | number
  coordinates: Coordinates
  timezone: Timezone
}

export interface Coordinates {
  latitude: string
  longitude: string
}

export interface Street {
  number: number
  name: string
}

export interface Timezone {
  offset: string
  description: string
}

export interface Login {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

export interface Name {
  title: string
  first: string
  last: string
}

export interface Picture {
  large: string
  medium: string
  thumbnail: string
}

const DEFAULT_USER = [
  {
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Jennie',
      last: 'Nichols'
    },
    location: {
      street: {
        number: 8929,
        name: 'Valwood Pkwy'
      },
      city: 'Billings',
      state: 'Michigan',
      country: 'United States',
      postcode: '63104',
      coordinates: {
        latitude: '-69.8246',
        longitude: '134.8719'
      },
      timezone: {
        offset: '+9:30',
        description: 'Adelaide, Darwin'
      }
    },
    email: 'jennie.nichols@example.com',
    login: {
      uuid: '7a0eed16-9430-4d68-901f-c0d4c1c3bf00',
      username: 'yellowpeacock117',
      password: 'addison',
      salt: 'sld1yGtd',
      md5: 'ab54ac4c0be9480ae8fa5e9e2a5196a3',
      sha1: 'edcf2ce613cbdea349133c52dc2f3b83168dc51b',
      sha256: '48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d'
    },
    dob: {
      date: '1992-03-08T15:13:16.688Z',
      age: 30
    },
    registered: {
      date: '2007-07-09T05:51:59.390Z',
      age: 14
    },
    phone: '(272) 790-0888',
    cell: '(489) 330-2385',
    id: {
      name: 'SSN',
      value: '405-88-3636'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/75.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
    },
    nat: 'US'
  },
  {
    gender: 'male',
    name: { title: 'Mr', first: 'Mirco', last: 'Busser' },
    location: {
      street: { number: 7391, name: 'De Roerdomp' },
      city: 'Wijnandsrade',
      state: 'Noord-Holland',
      country: 'Netherlands',
      postcode: '9163 MW',
      coordinates: { latitude: '30.3126', longitude: '-166.2894' },
      timezone: { offset: '+4:00', description: 'Abu Dhabi, Muscat, Baku, Tbilisi' }
    },
    email: 'mirco.busser@example.com',
    login: {
      uuid: 'a19b5fa1-6b17-4a48-981f-81cd44c6235d',
      username: 'bigwolf566',
      password: 'lekker',
      salt: 'ATeEMsH1',
      md5: 'bfb5a04f4ccb7fcf98bb9c0ee1366b65',
      sha1: '7e1347e9095151f7116bf34da842df1f574c4d27',
      sha256: '90baa4edabbfddfc5c25a7fec08678aefda713a81de662514877741f594ff3d2'
    },
    dob: { date: '1951-09-26T07:18:48.993Z', age: 72 },
    registered: { date: '2017-06-20T11:26:28.439Z', age: 7 },
    phone: '(0406) 772904',
    cell: '(06) 92239156',
    id: { name: 'BSN', value: '19059512' },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/85.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/85.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/85.jpg'
    },
    nat: 'NL'
  },
  {
    gender: 'female',
    name: { title: 'Ms', first: 'Candela', last: 'Barbosa' },
    location: {
      street: { number: 1575, name: 'Rua Espirito Santo ' },
      city: 'Curitiba',
      state: 'Goiás',
      country: 'Brazil',
      postcode: 34136,
      coordinates: { latitude: '-76.2589', longitude: '114.4211' },
      timezone: { offset: '+11:00', description: 'Magadan, Solomon Islands, New Caledonia' }
    },
    email: 'candela.barbosa@example.com',
    login: {
      uuid: '11df2545-465d-4ee7-a429-8e40026c2386',
      username: 'organicleopard924',
      password: 'broncos',
      salt: 'Au155ENs',
      md5: 'f5a58d25b3d2476852b89ad0de8a71ff',
      sha1: '4b05ca513d92d3e0a3d3da9b2bc31d207511fe1d',
      sha256: '22bbfe237cab4a4ddf43153747f73d785bb3f388e93dfcd59706311d39392a02'
    },
    dob: { date: '1961-03-29T14:09:36.988Z', age: 63 },
    registered: { date: '2003-02-16T08:05:14.611Z', age: 21 },
    phone: '(14) 7125-4997',
    cell: '(61) 3674-1041',
    id: { name: 'CPF', value: '635.265.156-71' },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/1.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/1.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/1.jpg'
    },
    nat: 'BR'
  },
  {
    gender: 'female',
    name: { title: 'Miss', first: 'Peyton', last: 'Schmidt' },
    location: {
      street: { number: 5599, name: 'Lovers Ln' },
      city: 'Hervey Bay',
      state: 'Western Australia',
      country: 'Australia',
      postcode: 3712,
      coordinates: { latitude: '-84.9283', longitude: '175.2393' },
      timezone: { offset: '+5:30', description: 'Bombay, Calcutta, Madras, New Delhi' }
    },
    email: 'peyton.schmidt@example.com',
    login: {
      uuid: 'cd4b877e-d1e6-4513-83c4-4c68ee4979af',
      username: 'brownfish783',
      password: 'shanghai',
      salt: 'd4xuhmqm',
      md5: '70a7baf2c43df11133f1933d52706438',
      sha1: '6cfdf16510b697dc1bfb8fb78dfe47cecdb367c4',
      sha256: 'db1198df386aec39e7c3aa281de5f636f109497165163595876f36fdad96dbfe'
    },
    dob: { date: '1968-11-12T08:41:15.596Z', age: 55 },
    registered: { date: '2013-01-01T21:07:57.470Z', age: 11 },
    phone: '08-2545-6972',
    cell: '0432-814-427',
    id: { name: 'TFN', value: '845678227' },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/89.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/89.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/89.jpg'
    },
    nat: 'AU'
  }
]

const initialState: User[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__')
  if (persistedState) return JSON.parse(persistedState).user

  return DEFAULT_USER
})()

export const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserUUID>) => {
      const uuid = action.payload
      return state.filter((user) => user.login.uuid !== uuid)
    }
  }
})

export default userSlice.reducer

export const { deleteUserById } = userSlice.actions
