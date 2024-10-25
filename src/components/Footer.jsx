import C from '../assets/c.jpg'
import B from '../assets/b.jpg'
import T from '../assets/t.jpg'
import A from '../assets/a.jpg'
import P from '../assets/p.jpg'

const Footer = () => {
  return (
    <div className='flex justify-between px-4 bg-customGrayFooter text-sm font-bold text-gray-500 pb-1 pt-0.5 fixed bottom-0 left-0 w-[100%]'>
      <div className='flex flex-col justify-center items-center h-[100%]'><img className=' w-[50px] h-[40px]' src={C} alt="" /><p>Home</p></div>
      <div className='flex flex-col justify-center items-center h-[100%]'><img className=' w-[50px] h-[40px]' src={B} alt="" /><p>Catálogos</p></div>
      <div className='flex flex-col justify-center items-center h-[100%] border-2 border-t-red-500'><img className=' w-[50px] h-[40px]' src={T} alt="" /><p>My Costco</p></div>
      <div className='flex flex-col justify-center items-center h-[100%]'><img className=' w-[50px] h-[40px]' src={A} alt="" /><p>Tienda</p></div>
      <div className='flex flex-col justify-center items-center h-[100%]'><img className=' w-[50px] h-[40px]' src={P} alt="" /><p>Más</p></div>
    </div>
  )
}

export default Footer
