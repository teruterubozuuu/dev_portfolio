import React from 'react';
import "./Posts.css";

export default function Posts({ username, handle, date, description, techIcons }) {
  return (
    <div className='post-parent-cont'>
      <div className='post-child-cont'>
        <div className='post-detail'>
          <img src={techIcons?.profilePic} alt="pfp" className='pfp'/>
          <div style={{ marginLeft: "15px" }}>
            <div className='username-name'>   
              <p style={{ fontSize: "20px", fontWeight: "700" }}>{username}</p>
              <p style={{ marginTop: "22px", marginLeft: "10px", fontWeight: "100" }}>@{handle}</p>
              <div style={{marginLeft: "10px", marginTop:"22px"}}>{techIcons?.pinIcon}</div>  
            </div>            
            <p className='date' style={{ fontWeight: "100" }}>{date}</p>    
          </div>
        </div>
        
        <p className='description'>{description}</p>

        {/* Conditionally render the icons if techIcons are provided */}
        {techIcons?.stack?.length > 0 && (
          <div className='post-content'>
            <div className='tech-icon-cont'>
              {techIcons.stack.map((icon, index) => (
                <div className="grid-item" key={index}>
                  <img src={icon.src} alt={`${icon.name} icon`} className='tech-icons'/>
                  <p>{icon.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className='border-line'></div>
        <div className='likes-comment-cont'>
          <div>
            <i className="bi bi-star"></i>
            <i className="bi bi-chat-quote"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
