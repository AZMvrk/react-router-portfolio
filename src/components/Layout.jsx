import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'


function Layout({ children }) {

	const [lang, setLang] = useState(true)

	

	return (
		<main>
			{/* <Header lang={lang} /> */}

			{/* <button onClick={() => setLang(!lang) }>{lang ? "ENG" : "HUN"}</button> */}

			<div className='container'>{children}</div>

			<Footer />
		</main>
	)
}

export default Layout