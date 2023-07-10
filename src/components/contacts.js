import Links from '@/components/link'
import { FaGithub, FaWhatsapp, FaLinkedin} from 'react-icons/fa';
import { MdEmail} from 'react-icons/md'

export default function Contacts() {
    return (
        <ul className="flex flex-wrap justify-center gap-4 items-center">
        <li>
          <Links 
            href='https://www.linkedin.com/in/vit%C3%B3riajunker/' 
            target='_blank'>
              <FaLinkedin className="w-56 text-pink-2 h-56 hover:scale-110 hover:text-pink-3"/></Links>
        </li>
        <li>
          <Links
            href='https://github.com/Vitoria-Junker' 
            target='_blank'>
              <FaGithub className=" w-56 h-56 text-pink-2 hover:scale-110 hover:text-pink-3"/></Links>
        </li>
        <li>
          <Links
            href={`https://wa.me/48991758504`} 
            target='_blank'>
              <FaWhatsapp className="w-56 h-56 text-pink-2 hover:scale-110 hover:text-pink-3"/></Links>
        </li>
        <li>
          <Links
            href='vickjunker22@gmail.com' 
            alt='vickjunker22@gmail.com'
            target='_blank'>
              <MdEmail className="w-56 h-56 text-pink-2 hover:scale-110 hover:text-pink-3"/></Links>
        </li>
      </ul>
    )
}