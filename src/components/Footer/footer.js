import React, { Component } from 'react';
import '../Footer/footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="footer">
          For more information, please contact <a className="phone" href="tel:1-417-299-3300">Duane Ottmar</a>
        </div>
    );
  }
}

export default Footer;