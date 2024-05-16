import styles from "./FrontendArchitecture.module.scss";
import { CallToAction } from "../../components/CallToAction";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const ModulesPage = () => {
  return (
    <div className={styles.section}>
      <h1>Course modules</h1>

      <div className={styles.endSection}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            1 - Introduction
          </AccordionSummary>
          <AccordionDetails>
            Understand the importance, and why to learn and use the most famous
            patterns and architectures in frontend world
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            2 - Component-Based Pattern
          </AccordionSummary>
          <AccordionDetails>
            Learn what is, how to build, the benefits and drawbacks and the most
            common problems in component-based pattern implementation
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            3 - Single Page Application Architecture
          </AccordionSummary>
          <AccordionDetails>
            Dive into concepts around Single Page Application architecture, in
            what cases use it, in what cases its usage is not good, best
            practices, and etc
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            4 - State Management Pattern
          </AccordionSummary>
          <AccordionDetails>
            Using localstorage to store the data of your application? Shame on
            you! Explore the most famous way to store application lifecycle
            data, State Management Pattern. Using Javascript we'll explore how
            famous libraries like Redux store application data under the hood,
            and how to implement it, what are the benefits, and dangerous points
            to take care
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            5 - Microfrontends architecture
          </AccordionSummary>
          <AccordionDetails>
            Do you have many teams working in the same monolithic project? Slow
            pipeline, slow local testing, shitty developer experience? Learn the
            concepts and how to implement microfrontends, an architecture that
            allows you to create modular, reusable and scalable frontend
            applications
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            6 - Serverless architecture
          </AccordionSummary>
          <AccordionDetails>
            You don't have backend developers to work with you, but want to
            release an APP as soon as possible?This is an architecture for you!
            Learn how to develop applications without backend. Of course, you'll
            learn also its pros and cons, and the best practices you should take
            usage in this architecture utilization
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            7 - Progressive Web Apps
          </AccordionSummary>
          <AccordionDetails>
            Your user base have bad internet connections, turning their user
            experience in your website bad? Learn progressive web apps, a
            technique that allows you to cache your entire application in user's
            device, allowing them to navigate your APP with bad internet
            connection, or even offline!
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            8 - Server side rendering
          </AccordionSummary>
          <AccordionDetails>
            This architecture goes to you, who develop a processor-consuming
            application for a base of users who don't have many processing
            capacity. A 3D rendering application for a user base that uses
            Samsung Pocket. Bring all processing power to the server side, but
            before learn how to do it, its dangers and benefits
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            9 - Conclusion
          </AccordionSummary>
          <AccordionDetails>
            Just a class to say goodbye to all my dear students, containing some
            next-steps
          </AccordionDetails>
        </Accordion>
      </div>

      <CallToAction url="https://www.udemy.com/course/frontend-architecture-and-patterns/?couponCode=FONSECAS-GIFT" />
    </div>
  );
};
