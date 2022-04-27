import React from 'react'
import Link from 'next/link'

const canceled = () => {
  return (
		<div>
      <h1>Order was cancelled!</h1>
      <p>The paying process was not working as expected.</p>
			<Link href='/'>
				<button type='button' width='300px' className='btn'>
					Go to main Page
				</button>
			</Link>
		</div>
	);
}

export default canceled