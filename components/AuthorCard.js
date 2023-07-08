import '../styles/endpart.css'

const AuthorCard = () => {
    return (
      <div className="author-card">
        <img className="profile-pic" src="/profile.png" alt="Profile Picture" />
        <h2 className="name">John Doe</h2>
        <p className="description">Hello! My name is Jonathan Doe working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.</p>
        <div className="social-links">
          <img className="soc" src="/com_soc.png"/>
        </div>
        <br></br>
        <div className="auth_but"> 
            <button className="auth_but">View All Articals</button>
        </div>
        
      </div>
    );
  };
  
  export default AuthorCard;
  