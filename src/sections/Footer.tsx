import Logo from "@/assets/logo2.svg";
import Xing from "@/assets/socials/social-xing.svg";
import Linkedin from "@/assets/socials/social-linkedin.svg";
import Github from "@/assets/socials/social-github.svg";

export const Footer = () => {
  return (
    <footer className="relative py-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500/20 to-transparent [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col lg:flex-row md:flex-row md:justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Logo className="h-6 w-6 text-white" />
            <div className="font-medium text-white">AAC portfolio</div>
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            <a
              href="https://aachizari.github.io/aacPortfolio/#home"
              className="text-white/70 hover:text-white text-xs md:text-sm transition duration-300"
            >
              aac
            </a>
          </nav>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <a
              href="https://www.linkedin.com/in/amir-chizari-2047192a7/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profil"
              className="text-white/70 hover:text-white transition duration-300 transform hover:scale-150"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.xing.com/profile/Amir_Chizari061776/web_profiles?expandNeffi=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Xing Profil"
              className="text-white/70 hover:text-white transition duration-300 transform hover:scale-150"
            >
              <Xing className="w-6 h- 6" />
            </a>
            <a
              href="https://github.com/AAChizari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profil"
              className="text-white/70 hover:text-white transition duration-300 transform hover:scale-150"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
