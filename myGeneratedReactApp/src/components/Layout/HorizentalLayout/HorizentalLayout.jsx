import React, { useState, useEffect } from 'react';
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { firestore } from '../../../Firebase/firebase';
import LayoutParams from '../LayoutParams';
import styles from './HorizentalLayout.module.css';

function HorizentalLayout({ className, nested, params }) {
  const [childrenWithProps, setChildrenWithProps] = useState([]);

  // Create an instance of LayoutParams
  const layoutParams = new LayoutParams(params["id"], params["collection"], params["document"], params["loop"], params["condition"]);

  useEffect(() => {
    const fetchDocuments = async () => {
      if (layoutParams.loop === "true") {
        const q = layoutParams.condition["isConditional"] === "true"
          ? query(collection(firestore, layoutParams.collection), where(...layoutParams.condition["showWhen"]))
          : query(collection(firestore, layoutParams.collection));

        const querySnapshot = await getDocs(q);
        const fetchedChildren = [];
        querySnapshot.forEach((doc) => {
          fetchedChildren.push(...addPropsToChildren(nested, doc.id));
        });
        setChildrenWithProps(fetchedChildren);
      } else if (layoutParams.condition["isConditional"] === "true") {
        const docRef = doc(firestore, layoutParams.collection, layoutParams.document);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && applyComparison(docSnap.data()[layoutParams.condition["showWhen"][0]],layoutParams.condition["showWhen"][1], layoutParams.condition["showWhen"][2])) {
          setChildrenWithProps(addPropsToChildren(nested));
        }
      } else {
        setChildrenWithProps(addPropsToChildren(nested));
      }
    };

    fetchDocuments();
  }, [nested, params]);

  function applyComparison(operator, left, right) {
    switch (operator) {
      case '==':
        return left == right;
      case '!=':
        return left != right;
      case '<':
        return left < right;
      case '<=':
        return left <= right;
      case '>':
        return left > right;
      case '>=':
        return left >= right;
      default:
        throw new Error(`Unsupported operator ${operator}`);
    }
  }

  function addPropsToChildren(children, id = layoutParams.document) {
    return React.Children.map(children, child => {
      if (child.type === React.Fragment) {
        return (
          <>
            {React.Children.map(child.props.children, nestedChild =>
              React.cloneElement(nestedChild, { layoutFireBase: {document: id, collection: layoutParams.collection} })
            )}
          </>
        );
      }
      return React.cloneElement(child, { layoutFireBase: layoutParams });
    });
  }

  if (childrenWithProps.length === 0 && nested[""] === "") {
    return <section className={`${styles.horizentalSection} ${className}`}></section>;
  }

  return (
    <section className={`${styles.horizentalSection} ${className}`}>
      {childrenWithProps}
    </section>
  );
}

export default HorizentalLayout;
