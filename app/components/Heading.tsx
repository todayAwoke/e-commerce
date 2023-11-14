//import React from 'react'
interface HeadingProps{
    title: string,
  
}
const Heading: React.FC<HeadingProps> = ({
    title,
}) => {
  return (
      <div>
        <h1 className="font-bold text-2xl">{title }</h1>
    </div>
  )
}

export default Heading