import * as React from "react";

import styles from "./styles.module.scss";
;
export default function DialogModal({ type }) {
  const dispatch = useDispatch();


  const handleClose = () => {
    // dispatch(hideDialog());
  };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: "999999999999999",
      }}
    >
     
    </div>
  );
}
