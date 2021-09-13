import React from "react";
import { useStoreState } from "easy-peasy";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Cloud from "assets/img/cloud.png";
import profile from "assets/img/profile.png";
import medal from "assets/img/medal 1.png";
import cake from "assets/img/birthday-cake 1.png";
import square from "assets/img/square.png";
import bell from "assets/img/Frame 11 (1).png";
import fire from "assets/img/fire 1.png";
import styles from "assets/jss/general/views/dashboardStyle.js";
import LightText from "components/Typography/Light";
import VeryLightText from "components/Typography/VeryLight";
import DarkText from "components/Typography/Dark";
import WarningText from "components/Typography/Warning";
import SuccessText from "components/Typography/Success";
import CustomInput from "components/CustomInput/CustomInput";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const { currentUser } = useStoreState((state) => state.auth);
  console.log(currentUser);
  const classes = useStyles();

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <CustomInput />
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <div className={classes.notification}>
            <img src={bell} className={classes.notificationImg} />
          </div>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardBody>
              <div className={classes.flex}>
                <div>
                  <VeryLightText>{dateTime}</VeryLightText>
                  <LightText className={classes.cardTitle}>
                    Good morning{" "}
                    <strong>
                      {currentUser ? currentUser.username : "Gloria"}
                    </strong>
                  </LightText>
                </div>
                <div>
                  {" "}
                  <img src={Cloud} />
                </div>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div className={classes.flex}>
                <WarningText>Quote of the day</WarningText>

                <img src={fire} alt="fire" className={classes.imgh} />
              </div>
              <VeryLightText>
                You never really learn much from hearing yourself speak.
              </VeryLightText>
              <LightText>- George Clooney</LightText>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardBody profile>
              <div className={classes.flexPlain}>
                <img src={medal} className={classes.imgh} alt="medal" />
                <DarkText>
                  {" "}
                  <strong className={classes.ml}>Employee of the month</strong>
                </DarkText>
              </div>
              <img
                src={profile}
                alt="profile"
                className={classes.mb + " " + classes.mt}
              />
              <DarkText>
                <strong>Ifeoluwa Taiwo</strong>{" "}
              </DarkText>
              <VeryLightText>Product & Innovation Mgt.</VeryLightText>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardBody>
              <div className={classes.flex}>
                <LightText>
                  <strong>Upcoming Birthdays </strong>{" "}
                </LightText>
                <img src={cake} alt="cake" className={classes.imgh} />
              </div>
              <div
                className={
                  classes.flexPlain + " " + classes.mb + " " + classes.mt
                }
              >
                <img src={square} alt="photo" className={classes.square} />
                <div>
                  <VeryLightText>
                    <p className={classes.ml}>Ifeoluwa Taiwo</p>
                  </VeryLightText>
                  <VeryLightText>
                    <p className={classes.ml}>Today</p>
                  </VeryLightText>
                </div>
              </div>
              <div
                className={
                  classes.flexPlain + " " + classes.mb + " " + classes.mt
                }
              >
                <img src={square} alt="photo" className={classes.square} />
                <div>
                  <VeryLightText>
                    <p className={classes.ml}>Ifeoluwa Taiwo</p>
                  </VeryLightText>
                  <VeryLightText>
                    <p className={classes.ml}>Today</p>
                  </VeryLightText>
                </div>
              </div>
              <div
                className={
                  classes.flexPlain + " " + classes.mb + " " + classes.mt
                }
              >
                <img src={square} alt="photo" className={classes.square} />
                <div>
                  <VeryLightText>
                    <p className={classes.ml}>Ifeoluwa Taiwo</p>
                  </VeryLightText>
                  <VeryLightText>
                    <p className={classes.ml}>Today</p>
                  </VeryLightText>
                </div>
              </div>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardBody>
              <div
                className={classes.flex + " " + classes.mb + " " + classes.mt}
              >
                <LightText>
                  <strong>Notification</strong>
                </LightText>
                <LightText>
                  <strong>view all</strong>
                </LightText>
              </div>
              <div
                className={classes.flex + " " + classes.mb + " " + classes.mt}
              >
                <div>
                  <LightText>
                    <strong>
                      Review your supervisor’s comments & recommendations
                    </strong>
                  </LightText>
                  <VeryLightText>Friday 21 May 02:34 PM</VeryLightText>
                </div>{" "}
                <div>
                  <VeryLightText>Ifeoluwa Taiwo</VeryLightText>
                  <SuccessText>Review</SuccessText>
                </div>
              </div>
              <div
                className={classes.flex + " " + classes.mb + " " + classes.mt}
              >
                <div>
                  <LightText>
                    <strong>
                      Review your supervisor’s comments & recommendations
                    </strong>
                  </LightText>
                  <VeryLightText>Friday 21 May 02:34 PM</VeryLightText>
                </div>{" "}
                <div>
                  <VeryLightText>Ifeoluwa Taiwo</VeryLightText>
                  <SuccessText>Review</SuccessText>
                </div>
              </div>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardBody>
              <div className={classes.flex}>
                <LightText>
                  <strong>Upcoming Events </strong>{" "}
                </LightText>
              </div>
              <div
                className={
                  classes.flexPlain + " " + classes.mb + " " + classes.mt
                }
              >
                <img src={square} alt="photo" className={classes.square} />
                <div>
                  <VeryLightText>
                    <p className={classes.ml}>Ifeoluwa Taiwo</p>
                  </VeryLightText>
                  <VeryLightText>
                    <p className={classes.ml}>Today</p>
                  </VeryLightText>
                </div>
              </div>
              <div
                className={
                  classes.flexPlain + " " + classes.mb + " " + classes.mt
                }
              >
                <img src={square} alt="photo" className={classes.square} />
                <div>
                  <VeryLightText>
                    <p className={classes.ml}>Ifeoluwa Taiwo</p>
                  </VeryLightText>
                  <VeryLightText>
                    <p className={classes.ml}>Today</p>
                  </VeryLightText>
                </div>
              </div>
              <div
                className={
                  classes.flexPlain + " " + classes.mb + " " + classes.mt
                }
              >
                <img src={square} alt="photo" className={classes.square} />
                <div>
                  <VeryLightText>
                    <p className={classes.ml}>Ifeoluwa Taiwo</p>
                  </VeryLightText>
                  <VeryLightText>
                    <p className={classes.ml}>Today</p>
                  </VeryLightText>
                </div>
              </div>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardBody>
              <div
                className={classes.flex + " " + classes.mb + " " + classes.mt}
              >
                <LightText>
                  <strong>Latest Announcements & News</strong>
                </LightText>
                <LightText>
                  <strong>view all</strong>
                </LightText>
              </div>
              <div className={classes.flex}>
                <div
                  className={
                    classes.flexPlain + " " + classes.mb + " " + classes.mt
                  }
                >
                  <img src={square} alt="photo" className={classes.square} />
                  <div>
                    <LightText>
                      <strong className={classes.ml}>Staff session</strong>
                    </LightText>
                    <VeryLightText>
                      <p className={classes.ml}>
                        The onboarding session is basically for all new
                        employees.
                      </p>
                    </VeryLightText>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
