import React from "react";

function Footer() {

  var yr = new Date().getFullYear();

  return (
    <footer className="Footer">
      <p>Copyright @ {yr}</p>
    </footer>
  );
}

export default Footer;
