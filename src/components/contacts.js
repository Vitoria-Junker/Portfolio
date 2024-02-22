import Link from 'next/link';
import { FaGithub, FaWhatsapp, FaLinkedin} from 'react-icons/fa';
import { MdEmail} from 'react-icons/md';
import Footer from './footer';

export default function Contacts() {
    return (
      <>
      <div className="w-full bg-gradient-ct mt-20 pb-4 flex flex-col font-fredoka font-bold items-center">
        <h2 className="text-pink-2 text-2xl">Vamos conversar!</h2>
        <ul className="flex flex-wrap justify-center gap-4 items-center p-4 mb-20">
          <li>
            <Link 
              href='https://www.linkedin.com/in/vit%C3%B3riajunker/' 
              target='_blank'>
                <FaLinkedin className="w-14 h-14 text-pink-2 transition duration-300 ease-in-out transform hover:scale-110 hover:text-pink-3"/></Link>
          </li>
          <li>
            <Link
              href='https://github.com/Vitoria-Junker' 
              target='_blank'>
                <FaGithub className="w-14 text-pink-2 h-14 transition duration-300 ease-in-out transform hover:scale-110 hover:text-pink-3"/></Link>
          </li>
          <li>
            <Link
              href={`https://wa.me/48991758504`} 
              target='_blank'>
                <FaWhatsapp className="w-14 text-pink-2 h-14 transition duration-300 ease-in-out transform hover:scale-110 hover:text-pink-3"/></Link>
          </li>
          <li>
            <Link
              href='vickjunker22@gmail.com' 
              alt='vickjunker22@gmail.com'
              target='_blank'>
                <MdEmail className="w-14 text-pink-2 h-14 transition duration-300 ease-in-out transform hover:scale-110 hover:text-pink-3"/></Link>
          </li>
        </ul>
        <Footer/>
      </div>
      </>
        
    )
}