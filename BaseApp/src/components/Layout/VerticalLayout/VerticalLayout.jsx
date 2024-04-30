import React from 'react';
import LayoutParams from '../LayoutParams';
import styles from './VerticalLayout.module.css';

function VerticalLayout({ className, nested, params }) {
  // Create an instance of LayoutParams
  const layoutParams = new LayoutParams(params["id"], params["collection"], params["document"], params["loop"], params["condition"]);

  // Function to add the layoutFireBase prop to each child, even if nested in fragments
  const addPropsToChildren = (children) => {
    return React.Children.map(children, child => {
      // Check if the child is a React Fragment and handle its children recursively
      if (child.type === React.Fragment) {
        return (
          <>
            {React.Children.map(child.props.children, nestedChild =>
              React.cloneElement(nestedChild, { layoutFireBase: layoutParams })
            )}
          </>
        );
      }
      // For regular elements that are not fragments
      return React.cloneElement(child, { layoutFireBase: layoutParams });
    });
  };

  if (nested[""] === "") {
    return (
      <section className={`${styles.verticalSection} ${className}`}></section>
    );
  }

  const childrenWithProps = addPropsToChildren(nested);

  return (
    <section className={`${styles.verticalSection} ${className}`}>
      {childrenWithProps}
    </section>
  );
}

export default VerticalLayout;
