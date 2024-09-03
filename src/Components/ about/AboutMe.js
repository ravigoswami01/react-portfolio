import React from 'react'

const AboutMe = () => {
  return (
    <div className="flex pb-6">
        <div className="w-1/2 text-zinc-400 borderRight flex flex-col p-6">
             <div className="py-6">
             <h2 className="font-semibold mb-1">Hello! I'm Ravi</h2>
                 <p className="text-base leading-6">
                    web Designer form india,Dehli. I have rich rich exprience in web site 
                    design and building, aslo i am good at wordpress. I love to talk with with
                    you about or unique.
                 </p>
             </div>
            </div>
        <div className="w-1/2 p-6">
             <ul>
                <li className="aboutRightLi">
                    <span className="aboutRightLiSpan">Age:</span>21
                </li>
                <li className="aboutRightLi">
                    <span className="aboutRightLiSpan">Residence:</span>India
                </li>
                <li className="aboutRightLi">
                    <span className="aboutRightLiSpan">Freelance:</span>Available
                </li>
                <li className="aboutRightLi">
                    <span className="aboutRightLiSpan">Addresh:</span>Arrha Bihar
                </li>
             </ul>
        </div>
    </div>
  )
}

export default AboutMe
