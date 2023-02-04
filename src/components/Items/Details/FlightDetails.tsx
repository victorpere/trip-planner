import React from "react";

import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import EditableText from "../../elements/EditableText/EditableText";

import styles from "./EditableText.module.css";

type Props = {};

const FlightDetails = (props: Props) => {
  return (
    <div>
      <span>
        <MdFlightTakeoff />
        <EditableText
          key="airportDeparture"
          editable={true}
          placeholder="From"
          maxLength={3}
          staticClassName={styles.editable}
          inputClassName={styles.editable}
        />
      </span>
      <span>
        <MdFlightLand />
        <EditableText
          key="airportArrival"
          editable={true}
          placeholder="To"
          maxLength={3}
          staticClassName={styles.editable}
          inputClassName={styles.editable}
        />
      </span>
    </div>
  );
};

export default FlightDetails;
