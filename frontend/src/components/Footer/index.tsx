import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-900/10 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://www.instagram.com/iaia.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-700"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100094079174340"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-700"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.youtube.com/@iaia_br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-700"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://x.com/iaia_br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-700"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="mailto:iaia@cin.ufpe.br"
            className="text-gray-900 hover:text-gray-700"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <div className="text-center sm:text-right text-gray-900 w-full sm:w-auto">
          &copy; 2024 Brazilian National Institute of Artificial Intelligence.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
