import menuButtonStyles from '../styles/MenuButton.module.css';

function MenuButton({isOpen, toggleMenu}) {
    return (
        <div>
            <div className={isOpen ? menuButtonStyles.menuButtonOpen : menuButtonStyles.menuButtonClosed} onClick={toggleMenu}>
                <div className={isOpen ? menuButtonStyles.hamburgerOpen : menuButtonStyles.hamburgerClosed}>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default MenuButton;