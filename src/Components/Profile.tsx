
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
export default function Profile() {
  return (
    <div className="Profile-container">
      <div className="profile-info">
        <figure className="avatar">
          <img
            src="https://avatars.githubusercontent.com/u/102542790?v=4"
            alt=""
            width={80}
          />
        </figure>
        <div className="name-container">
          <h1 className="name" title="Abdul Muyeed">
            Abdul Muyeed
          </h1>
        </div>
      </div>
      <ul className="social-list">
        
            <li className="social-item">
                <a href="https://www.linkedin.com/in/abdul-muyeed" className="social-link" target="_blank">
                  <FaLinkedin size={26} color="blue" />
                </a>
              </li>
        

        
            <li className="social-item">
                <a href="https://github.com/abdul-muyeed" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaGithubSquare size={26} color="black" />
                </a>
              </li>
        

        
            
        
      </ul>
      <div className="separator"></div>
      <div className="sidebar-info_more">
      <ul className="contacts-list">

        
            <li className="contact-item">
                <div className="icon-box">
                  <IoIosMail size={26} />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Email</p>
                  <a href="mailto:abdulmuyeed47@gmail.com" className="contact-link">abdulmuyeed47@gmail.com</a>
                </div>
              </li>
        
        

        
            <li className="contact-item">
                <div className="icon-box">
                  <FaLocationDot size={26}/>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Location</p>
                  <address>Dhaka, Bangladesh</address>
                </div>
              </li>
        
      </ul>
  </div>
    </div>
  );
}
