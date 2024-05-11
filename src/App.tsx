import { SocialNetwork } from "./components/SocialNetwork/SocialNetwork";
import styles from "./App.module.scss";
import { Course } from "./components/Course/Course";
import pic from "./assets/pic.jpg";

import behance from "./assets/social-networks/behance.png";
import github from "./assets/social-networks/github.png";
import instagram from "./assets/social-networks/instagram.png";
import linkedin from "./assets/social-networks/linkedin.png";
import medium from "./assets/social-networks/medium.png";

import webPerformance from "./assets/courses/web-performance.png";
import frontendArchitecture from "./assets/courses/frontend-architecture.png";

const App = () => {
  return (
    <div className={styles.container}>
      <img className={styles.picture} src={pic} alt="Vitor's Fonseca picture" />
      <span className={styles.name}>Vitor Fonseca</span>

      <div className={styles.socialNetworks}>
        <SocialNetwork
          name="instagram"
          url="https://www.instagram.com/vitorfonseca.dev/"
          image={instagram}
        />
        <SocialNetwork
          name="behance"
          url="https://www.behance.net/vitorlofonseca"
          image={behance}
        />
        <SocialNetwork
          name="linkedin"
          url="https://www.linkedin.com/in/vitorlofonseca/"
          image={linkedin}
        />
        <SocialNetwork
          name="github"
          url="https://github.com/vitorlofonseca"
          image={github}
        />
        <SocialNetwork
          name="medium"
          url="https://medium.com/@fonsecalovitor"
          image={medium}
        />
      </div>

      <div className={styles.courses}>
        <h1>Check also my courses! With discount!!!!</h1>
        <div className={styles.coursesCarousel}>
          <Course
            name="web-performance"
            url="https://www.udemy.com/course/mastering-web-performance-optimization/?couponCode=FONSECAS-GIFT"
            image={webPerformance}
          />
          <Course
            name="frontend-architecture"
            url="https://www.udemy.com/course/frontend-architecture-and-patterns/?couponCode=FONSECAS-GIFT"
            image={frontendArchitecture}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
