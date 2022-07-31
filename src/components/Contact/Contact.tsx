import React, { useEffect } from 'react'
import './Contact.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {BsParagraph, BsTelegram} from 'react-icons/bs'

interface ContactProps {
  theme: boolean
  lang: boolean;
}

const Contact: React.FC<ContactProps> = ({theme, lang}) => {
  const initial = {opacity: 1, x: 100,};
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });
  useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				x: 0,
			});
		} else {
      animation.start(initial);
    }
	}, [inView, animation]);
  return (
    <section id='contact' className={theme? 'contact-container_light': 'contact-container_dark'}>
      <motion.div initial={initial} transition={{ delay: 0.3  , duration: 0.6}} animate={animation}  ref={ref}>
        <h2>
          {lang? 'Связаться': 'Contact'}
        </h2>
        <p>
          {lang? 'Связаться со мной вы можете при помощи следующих способов:':'You can contact me with 3 ways below:'}
        </p>
        <ul>
          <li>Phone <AiFillPhone/></li>
          <li>Email <MdEmail/></li>
          <li>Telegram <BsTelegram/></li>
          <li>VK <BsParagraph/></li>
        </ul>
      </motion.div>
    </section>
  )
}

export default Contact