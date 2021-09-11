import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import LightText from "components/Typography/Light";
import DarkText from "components/Typography/Dark";

const ComingSoon = () => {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardBody>
              <LightText>
                <h1>
                  <strong>Coming Soon</strong>
                </h1>
              </LightText>
              <DarkText>This page is not yet availbale.</DarkText>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default ComingSoon;
