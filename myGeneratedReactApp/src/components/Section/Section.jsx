
function Section({ className, nested }) {
  if (nested[""] === "")
    return (
      <section className={className} ></section>
    );
  return (
    <section className={className} > {nested} </section>
  );
}

export default Section;
