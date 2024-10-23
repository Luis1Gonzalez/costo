import Estrella from '../assets/logo-estrella.png'
import Qr from '../assets/qr.png'
import Internet from '../assets/internet.svg'

const CardMed = () => {
    return (
        <div className='pt-3 pb-2'>

            <div className='text-gray-500 flex pl-4 border-b-2'>

                <div className='w-[40%] pe-[10px] leading-5'>
                    <p className='text-xl font-semibold'>Gold</p>
                    <p className='text-md font-semibold text-gray-400'>Fecha de expedición:</p>
                    <p className='text-xl font-semibold'>14 sept 2025</p>
                </div>

                <div className='text-xl font-semibold text-gray-500 w-[60%] pe-[15px] flex justify-end pb-5'>
                    <img src={Estrella} className=' w-[85%] border rounded-lg' />
                </div>

            </div>

            <div className='flex justify-center py-6'>
                <img src={Qr} className='w-[40%] ' />
            </div>

            <div className='flex justify-evenly'>
                <img src={Internet} alt="" className='w-[30px]' />
                <p className='text-customBlue text-md font-semibold'>Tarjeta de Afiliación Digital Internacional</p>
            </div>

        </div>
    )
}

export default CardMed
