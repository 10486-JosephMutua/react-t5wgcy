import React, { StrictMode } from 'react';
export default function contact(Promp) {
  
    return (
        <article className="contact-card">
          <div className="imago">
            <img
                src={Promp.img}
                alt="Photo of Mr. Whiskerson"
            />
            </div>
            <h3>{Promp.name}</h3>
            <div className="info-group">
                <img
                    src="https://images.unsplash.com/photo-1511717004695-7862a87f4b3d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzI4ODg2ODJ8&ixlib=rb-4.0.3&q=85" 
                    alt="phone icon"
                />
                <p>{Promp.contact}</p>
            </div>
            <div className="info-group">
                <img
                    src="https://images.unsplash.com/photo-1511717004695-7862a87f4b3d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzI4ODg2ODJ8&ixlib=rb-4.0.3&q=85" 
                    alt="mail icon"
                />
                <p>{Promp.email}</p>
            </div>
        </article>
    )
}
