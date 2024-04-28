import styles from './DynamicLayout.module.css'
function DynamicLayout({ className, nested }) {
  if (nested[""] === "")
    return (
      <section className={`${styles.dynamicSection} ${className}`} ></section>
    );
  return (
    <section className={`${styles.dynamicSection} ${className}`} > {nested} </section>
  );
}

export default DynamicLayout;
