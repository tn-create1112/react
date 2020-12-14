import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <p>さあ、あなたも投稿してみましょう！</p>
          </div>
          <ul className="footer-list">
            <li>会社概要</li>
            <li>採用</li>
            <li>お問い合わせ</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
