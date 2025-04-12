const Footer = () => {
    return (
      <footer className="fixed bottom-0 w-full bg-primary text-white py-4 shadow-inner z-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Blood Bank System. All rights reserved.
          </p>
          <p className="text-sm mt-1">
            Contact us: <a href="mailto:suwadiwiya@gmail.com" className="underline text-white/80">suwadiwiya@gmail.com</a>
            <br />
            091-2222666
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  