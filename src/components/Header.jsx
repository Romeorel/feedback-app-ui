import PropTypes from 'prop-types' /* To define props type. Here it's {text} */

function Header({ text, bgColor, textColor }) { /* props are like argument */
    const headerStyles =  {
        backgroundColor: bgColor,
        color: textColor,
    }   

    return (
        <header style= {headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
        </header>
    )
    }

Header.defaultProps = {
    text: 'Feedback UI', /* If  0 styling added to the Header component, these styles apply*/
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#e497cd',
}

Header.propTypes = {
    text: PropTypes.string, /* Default props text to always be string. If integer inserted, error*/
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header
