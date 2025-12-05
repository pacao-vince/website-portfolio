function Navbar() {
    return (
        <nav className="fixed flex justify-center w-full text-[#C0C0C0] p-2 bg-[]">
            <h1 className="text-xl font-bold"></h1>
            <div className="flex gap-x-6 text-lg mx-6">
                <a href="index.html" className="border-b-2 border-transparent hover:border-blue-500">HOME</a>
                <a href="about-us.html" className="border-b-2 border-transparent hover:border-blue-500">ABOUT</a>
                <a href="gallery.html" className="border-b-2 border-transparent hover:border-blue-500">PORTFOLIO</a>
                <a href="#" className="border-b-2 border-transparent hover:border-blue-500">BLOG</a>
                <a href="contact.html" className="border-b-2 border-transparent hover:border-blue-500">CONTACT</a>
            </div>
        </nav>
    );
  }

ReactDOM.render(<Navbar />, document.getElementById("navbar"));


