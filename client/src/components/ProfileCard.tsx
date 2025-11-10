interface ProfileCardProps {
  name: string;
  bio: string;
  quote: string;
  profileImage: string;
  socialLinks: {
    snapchat?: string;
    instagram?: string;
    tiktok?: string;
  };
}

export default function ProfileCard({ name, bio, quote, profileImage, socialLinks }: ProfileCardProps) {
  return (
    <div 
      className="relative w-[320px] max-w-[90%] text-center overflow-visible animate-float"
      style={{
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '25px',
        boxShadow: '0 0 35px rgba(255, 182, 193, 0.4)',
      }}
      data-testid="profile-card"
    >
      <div 
        className="h-[140px] relative"
        style={{
          background: 'linear-gradient(135deg, #ffafcc, #ffb6c1, #ffcce7)',
          borderRadius: '25px 25px 0 0',
        }}
      />
      
      <img 
        src={profileImage}
        alt={name}
        className="absolute left-1/2 -translate-x-1/2 w-[110px] h-[110px] rounded-full object-cover border-[5px] border-white transition-transform duration-400 hover:scale-110"
        style={{
          top: '85px',
          boxShadow: '0 5px 20px rgba(255, 105, 180, 0.4)',
        }}
        data-testid="profile-pic"
      />
      
      <div className="pt-[70px] px-5 pb-6 text-white">
        <h2 
          className="text-[22px] font-semibold mb-1.5"
          style={{ color: '#ffedf5' }}
          data-testid="text-name"
        >
          {name}
        </h2>
        <p 
          className="text-[14px]"
          style={{ color: '#ffe6f2' }}
          data-testid="text-bio"
        >
          {bio}
        </p>
        
        <div className="flex justify-center gap-[15px] mt-[18px]">
          {socialLinks.snapchat && (
            <a
              href={socialLinks.snapchat}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#ff69b4] text-lg transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#ff69b4] hover:text-white"
              style={{ boxShadow: '0 3px 10px rgba(255,182,193,0.3)' }}
              data-testid="link-snapchat"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,105,180,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 3px 10px rgba(255,182,193,0.3)';
              }}
            >
              <i className="fab fa-snapchat"></i>
            </a>
          )}
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#ff69b4] text-lg transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#ff69b4] hover:text-white"
              style={{ boxShadow: '0 3px 10px rgba(255,182,193,0.3)' }}
              data-testid="link-instagram"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,105,180,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 3px 10px rgba(255,182,193,0.3)';
              }}
            >
              <i className="fab fa-instagram"></i>
            </a>
          )}
          {socialLinks.tiktok && (
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#ff69b4] text-lg transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#ff69b4] hover:text-white"
              style={{ boxShadow: '0 3px 10px rgba(255,182,193,0.3)' }}
              data-testid="link-tiktok"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,105,180,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 3px 10px rgba(255,182,193,0.3)';
              }}
            >
              <i className="fab fa-tiktok"></i>
            </a>
          )}
        </div>
      </div>
      
      <div 
        className="px-3.5 py-3.5 text-[13px] italic border-t"
        style={{ 
          background: 'rgba(255, 255, 255, 0.2)',
          color: '#fff0f5',
          borderColor: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '0 0 25px 25px',
        }}
        data-testid="text-quote"
      >
        <p>{quote}</p>
      </div>
    </div>
  );
}
