import Links from '@/components/link'
import { FaGithub, FaWhatsapp, FaLinkedin} from 'react-icons/fa';
import { MdEmail} from 'react-icons/md'

export default function Contacts() {
    return (
      <>
      <div className="p-12">
        <h2 className="text-pink-2 text-xl">Contact me</h2>
        <ul className="flex flex-wrap justify-center gap-4 items-center p-4">
          <li>
            <Links 
              href='https://www.linkedin.com/in/vit%C3%B3riajunker/' 
              target='_blank'>
                <FaLinkedin className="w-14 text-pink-2 h-14 transition duration-300 ease-in-out transform hover:scale-110 hover:text-pink-3"/></Links>
          </li>
          <li>
            <Links
              href='https://github.com/Vitoria-Junker' 
              target='_blank'>
                <FaGithub className="w-14 text-pink-2 h-14 transition duration-300 ease-in-out transform hover:scale-110 hover:text-pink-3"/></Links>
          </li>
          <li>
            <Links
              href={`https://wa.me/48991758504`} 
              target='_blank'>
                <FaWhatsapp className="w-14 text-pink-2 h-14 transition duration-300 ease-in-out transform hover:scale-110 hover:text-pink-3"/></Links>
          </li>
          <li>
            <Links
              href='vickjunker22@gmail.com' 
              alt='vickjunker22@gmail.com'
              target='_blank'>
                <MdEmail className="w-14 text-pink-2 h-14 transition duration-300 ease-in-out transform hover:scale-110 hover:text-pink-3"/></Links>
          </li>
        </ul>
      </div>
      </>
        
    )
}