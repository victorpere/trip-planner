import React from "react";

import EditableText from "../../elements/EditableText/EditableText";

import styles from "./EditableText.module.css";

type Props = {};

const FlightDetails = (props: Props) => {
  return (
    <div>
      <div>FlightDetails</div>
      <div>
        <EditableText
          key="airportDeparture"
          editable={true}
          placeholder="Airport"
          maxLength={3}
          staticClassName={styles.editable}
          inputClassName={styles.editable}
        />
      </div>
    </div>
  );
};

export default FlightDetails;
