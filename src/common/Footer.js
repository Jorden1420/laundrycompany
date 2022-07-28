import React from "react";

function Footer() {
  var today = new Date();

  return (
    <footer className="py-3 text-center mt-4">
      <p className="py-2">
        Copyright &copy; {today.getFullYear()} The Laundry Company Carmichael |
        All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
