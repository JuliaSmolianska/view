import { useState, useEffect, useRef } from "react";
import styles from './NavMain.module.css';
import Col from 'react-bootstrap/Col';

function DelayComponent({ children, delay }) {
   const [loading, setLoading] = useState(false);

   const returnValue = useRef("")
   useEffect(() => {
      if (loading === false) {
         setTimeout(() => {
            returnValue.current = (<Col xs={6} lg={3} className={styles.fadeInOpacity}> {children}</Col>);
            setLoading(true);
         }, delay);
      }
   }, [loading]);

   return returnValue.current
}

export default DelayComponent;