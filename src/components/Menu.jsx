import { menu } from '../constants'

const Menu = () => {
  return (
    <ul className='flex flex-row gap-10 mx-auto justify-center py-5'>
      {menu.map((item) => (
        <li key={item.id} className='text-white text-1xl font-normal border-1 rounded-md px-4 py-2 cursor-pointer brightness-100 hover:brightness-125'>
          {item.title}
        </li>
      ))}
    </ul>
  )
}

export default Menu