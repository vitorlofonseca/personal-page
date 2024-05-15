import styles from "./WebPerformanceCourse.module.scss";
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
            1 - Web Performance Introduction
          </AccordionSummary>
          <AccordionDetails>
            Understand the fundamentals of web performance and its impact on
            user experience and business success
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            2 - Optimizing Frontend Performance
          </AccordionSummary>
          <AccordionDetails>
            Learn techniques to improve frontend performance, including
            optimizing CSS, JavaScript, and images
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            3 - Optimizing Server-Side Performance
          </AccordionSummary>
          <AccordionDetails>
            Dive into strategies for optimizing server-side performance, such as
            caching, database optimization, and code optimization
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            4 - Optimizing Infrastructure Performance
          </AccordionSummary>
          <AccordionDetails>
            Explore ways to optimize infrastructure performance with content
            delivery networks (CDNs), load balancing, and cloud computing
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            5 - Planning and Monitoring Performance
          </AccordionSummary>
          <AccordionDetails>
            Develop skills in planning and implementing performance improvement
            initiatives, including setting goals and using monitoring tools
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            6 - Conclusion and Next Steps
          </AccordionSummary>
          <AccordionDetails>
            Summarize key learnings from the course and provide guidance on
            applying performance optimization strategies in real-world scenarios
          </AccordionDetails>
        </Accordion>
      </div>

      <CallToAction />
    </div>
  );
};
