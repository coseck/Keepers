import react from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>copyright @ {date} MK</p>
    </footer>
  );
}
export default Footer;
