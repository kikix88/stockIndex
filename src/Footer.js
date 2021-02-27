import React from 'react';

class Footer extends React.Component {
    render() {
        return (
             <div className="Footer">
                 <p>Copyright &copy; {new Date().getFullYear()}</p>
             </div>
        );
    }
}

export default Footer;