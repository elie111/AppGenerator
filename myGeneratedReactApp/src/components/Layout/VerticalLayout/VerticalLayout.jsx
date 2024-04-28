import styles from './VerticalLayout.module.css';

function VerticalLayout({ className, nested }) {
    if (nested[""] === "")
        return (
            <section className={`${styles.verticalSection} ${className}`} ></section>
        );
    return (
        <section className={`${styles.verticalSection} ${className}`} > {nested} </section>
    );
}

export default VerticalLayout;
