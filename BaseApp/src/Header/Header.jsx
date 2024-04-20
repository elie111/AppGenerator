import ImageButton from '../ImageButton/ImageButton';
import './Header.css';

function Header({ params, className, onClick, children }) {
    const combinedClassName = `header-main ${className}`;
    return (
        <>
            <div className={combinedClassName}>
                <div className='left-buttons-container'>
                    <button className='left-buttons' onClick={onClick}>{children}</button>
                    <button className='left-buttons' onClick={onClick}>{children}</button>
                </div>
                <span className='header-name'>{children}</span>
                <ImageButton className='profile-picture' params={params} onClick={onClick}>{children}</ImageButton>
            </div>
        </>
    );
}

export default Header;
