import React from 'react';

export default function PageFooter() {
  return (
    <div id="footer">
      <ul className="copyright">
        <li>&copy;{new Date().getFullYear()}. All rights reserved.</li>
      </ul>
    </div>
  );
}
