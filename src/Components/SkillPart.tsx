import React from 'react'
import { FaCode } from 'react-icons/fa'

interface SkillPartProps {
    name: string;
    urls: string[];
  }
export default function SkillPart({name,urls}:SkillPartProps) {
  return (
    <>
    <div className="title-wrapper">
                <div className="icon-box">
                <FaCode/>
                </div>
                <h2>{name}</h2>
            </div>
            <div className="icon-list">
            {
                urls.map((url,index) => {
                    return (
                        <div key={index}>
                            <img src={url} alt="" />
                        </div>
                    )
                    
                })
            }
            </div>

    </>
  )
}
