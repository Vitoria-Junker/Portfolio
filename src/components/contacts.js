import Links from '@/components/link'
import { FaGithub, FaWhatsapp, FaLinkedin} from 'react-icons/fa';
import { MdEmail} from 'react-icons/md'

export default function Contacts({href, children}) {
    return (
        <ul className="flex gap-4">
        <li>
          <Links 
            href='https://www.linkedin.com/in/vit%C3%B3riajunker/' 
            target='_blank'>
              <FaLinkedin className="w-8 h-8 text-pink-2 hover:scale-110 hover:text-pink"/></Links>
        </li>
        <li>
          <Links
            href='https://github.com/Vitoria-Junker' 
            target='_blank'>
              <FaGithub className="w-8 h-8 text-pink-2 hover:scale-110 hover:text-pink"/></Links>
        </li>
        <li>
          <Links
            href={`https://wa.me/48991758504`} 
            target='_blank'>
              <FaWhatsapp className="w-8 h-8 text-pink-2 hover:scale-110 hover:text-pink"/></Links>
        </li>
        <li>
          <Links
            href='mailto:chillout1manager@gmail.com' 
            alt='vickjunker22@gmail.com'
            target='_blank'>
              <MdEmail className="w-8 h-8 text-pink-2 hover:scale-110 hover:text-pink"/></Links>
        </li>
      </ul>
    )
}