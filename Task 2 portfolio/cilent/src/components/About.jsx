import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad culpa sit laboriosam commodi id voluptate accusantium exercitationem a ex quisquam iusto vero repellat cupiditate alias quas, distinctio, pariatur ab autem. Esse consectetur reiciendis qui, ratione cum dignissimos laborum itaque ut, iure rem blanditiis. Beatae possimus totam distinctio illum ipsum minus.</p>
        <br />
        <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea illo aliquid ab libero nam aspernatur perspiciatis ducimus maiores laborum id tempore illum inventore dolorem dolore ex recusandae sed, explicabo, facilis, cumque quas quae? Animi sit tempore, similique necessitatibus, odit possimus iusto rerum tenetur ullam veniam debitis voluptates velit eaque. Omnis!</p>
      </div>
    </div>
  )
}

export default About
