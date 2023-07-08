import '../styles/footer.css'



const Footer = () => {
    // Sample data for recent posts and tags
    const recentPosts = [
      { id: 1, title: 'Post 1', image: '/pic2.png' },
      { id: 2, title: 'Post 2', image: '/pic3.png' },
      { id: 3, title: 'Post 3', image: '/pic4.png' },
    ];
  
    const profileImage = '/profile-pic.jpg';
  
    const socialMediaLinks = [
      { id: 1, platform: 'Twitter', image: './twitter.png', link: 'https://twitter.com' },
      { id: 2, platform: 'Facebook', image: './facebook.png', link: 'https://facebook.com' },
      { id: 3, platform: 'Instagram', image: './instagram.png', link: 'https://instagram.com' },
    ];
  
    return (
      <footer className="footer">
        <div className="container_foot">
          <div className="footer-column">
            <h3>Profile</h3>
            <img className="profile-pic" src="/profile.png" alt="Profile Picture" />
            <p>Profile information goes here.</p>
          </div>
          <div className="footer-column">
            <h3>Recent Posts</h3>
            <ul className="recent-posts">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <img  src={post.image} alt={post.title} />
                  <span>{post.title}</span>
                </li>
              ))}
            </ul>
          </div>
        
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-media-links">
              {socialMediaLinks.map((link) => (
                <a href={link.link} key={link.id} target="_blank" rel="noopener noreferrer">
                  <img className='foot_icon' src={link.image} alt={link.platform} />
                </a>
              ))}
            </div>
            
          </div>
          <br></br>
        </div>
        <br></br>
        <div className="footer-column_logo">
            <img className='lo' src='/maktub-logo.png'/>
          </div>
        <div className="bottom-section">
          <div className="logo1">Logo</div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} Your Website. All rights reserved.
          </div>
        </div>
       
      </footer>
    );
  };
  
  export default Footer;
  