import React from "react";
import EditableText from "../../elements/EditableText/EditableText";

type Props = {};

const FlightDetails = (props: Props) => {
  return (
    <div>
      <div>FlightDetails</div>
      <div>
        <EditableText
          key="airportDeparture"
          editable={true}
          editing={false}
          placeholder="Airport"
          maxLength={3}
        />
      </div>
    </div>
  );
};

export default FlightDetails;
