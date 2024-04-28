import styles from './HorizentalLayout.module.css';

function HorizentalLayout({ className, nested }) {
    if (nested[""] === "")
        return (
            <section className= {`${styles.horizentalSection} ${className}`} ></section>
        );
    return (
        <section className={`${styles.horizentalSection} ${className}`} > {nested} </section>
    );
}

export default HorizentalLayout;
