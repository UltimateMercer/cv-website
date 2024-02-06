import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-full pt-4 px-6 pb-8 print:hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-center py-2">
          <p>Made by <a href="http://ultimatemercer.com" target="_blank" rel="noopener noreferrer">Ultimate Mercer</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
