import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Button } from '../html/Button';

const BackToTop = () => {

	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 200) {
			setVisible(true)
		} else {
			setVisible(false)
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<Button>
			<FaArrowUp onClick={scrollToTop}
				style={{ display: visible ? 'inline' : 'none' }} />
		</Button>
	);
}

export default BackToTop;
