import ProfileCard from '@/components/ProfileCard';
import profileImage from '@assets/icon_1762805175678.jpg';

export default function Home() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(circle at top left, #ffc1cc, #ff99aa, #fcbad3)',
      }}
    >
      <ProfileCard
        name="Leen Youness"
        bio="🖥️ Information Technology | 💕 The Best | ✨ Spreading Positivity"
        quote='💖 "Be kind. Be bright. Be you." 💖'
        profileImage={profileImage}
        socialLinks={{
          snapchat: "https://www.snapchat.com/add/leenyouness17?share_id=7ljFm8zG9uQ&locale=en-GB",
          instagram: "https://www.instagram.com/leen._.youness?igsh=N3RvdGpxZGZram52",
          tiktok: "https://www.tiktok.com/@leen._.youness?_t=ZS-90vCzvxgk7g&_r=1"
        }}
      />
    </div>
  );
}
