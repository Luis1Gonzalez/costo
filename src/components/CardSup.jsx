import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import Foto from '../assets/foto.png'
import Camera from '../assets/camera.svg'

const CardSup = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Formato YYYY.MM.DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Añade el 0 si es necesario
    const day = String(date.getDate()).padStart(2, '0'); // Añade el 0 si es necesario
    return `${year}.${month}.${day}`;
  };

 // Formato 24 horas
 const formatTime = (date) => {
  return date.toLocaleTimeString('en-GB', { // 'en-GB' usa formato 24 horas
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

  return (
    <div className='bg-customBlue rounded-t-md text-white'>

      <div className='flex px-3 py-2 '>
        <div className='w-[200px]'>
            <img src={Logo} className='' />
        </div>
        <div className='flex items-start justify-center w-[100%] pt-[7px]'>
          <p className='font-semibold'>Tarjeta de Afiliación Digital</p>
        </div>
      </div>

      <div className="flex container px-5 gap-4 border border-white bg-gradient-animation">
      <div className='moving-box'>
      </div>

      <div className='w-[100%] flex items-center gap-5'>
      <div className="text-xl font-bold z-10 w-[23%] tracking-wider">
        {formatTime(currentTime)}
      </div>
      <div className="text-xl font-bold z-10 w-2/3 tracking-wider px-2">
        {formatDate(currentTime)}
      </div>
      </div>

    </div>

<div className='flex gap-2 pt-3 pb-2 px-3 '>
  <div className='w-[50%] pl-2 gap-2'>
    <p className='text-xl font-semibold mb-3 leading-6'>GONZALEZ ROMERO</p>
    <p className='pe-3 font-semibold leading-5'>Estado de la Afiliación:</p>
    <p className='text-xl font-semibold mb-3'>VÁLIDO</p>
    <p className='pe-3 font-semibold leading-5'>Tipo de tarjeta de socio:</p>
    <p className='text-xl font-semibold mb-3'>Adicional</p>
    <p className='leading-5'>Número de Afiliación:</p>
    <p className='text-xl font-semibold'>75000316684</p>
  </div>

<div className='w-[50%] flex justify-end pe-2 items-center relative'>
<img src={Foto} className='w-[90%] border-[3px] border-white rounded-sm' />

<div className='absolute bottom-[40px] left-[134px] flex justify-center items-center bg-customBlue border-[1px] border-white rounded-full w-10 h-10'>
<img src={Camera} className='w-[60%]' />
</div>

</div>
</div>

    </div>
  )
}

export default CardSup
