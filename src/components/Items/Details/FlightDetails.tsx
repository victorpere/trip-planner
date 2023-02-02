import React from "react";

import EditableText from "../../elements/EditableText/EditableText";

import styles from "./EditableText.module.css";

type Props = {};

const FlightDetails = (props: Props) => {
  return (
    <div>
      <span>
        From:
        <EditableText
          key="airportDeparture"
          editable={true}
          placeholder="Airport"
          maxLength={3}
          staticClassName={styles.editable}
          inputClassName={styles.editable}
        />
      </span>
      <span>
        to:
        <EditableText
          key="airportArrival"
          editable={true}
          placeholder="Airport"
          maxLength={3}
          staticClassName={styles.editable}
          inputClassName={styles.editable}
        />
      </span>
    </div>
  );
};

export default FlightDetails;
