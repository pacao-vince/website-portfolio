function Footer() {
  return (
    <footer className="fixed bottom-0 w-full text-center">
      <p>&copy; {new Date().getFullYear()} Vince. All rights reserved.</p>
    </footer>
  );
}
ReactDOM.render(<Footer />, document.getElementById("footer"));