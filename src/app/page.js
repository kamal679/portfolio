import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid className={styles.mainContainer}>
      <Row className="min-vh-100">
        {/* Left Section: Navigation */}
        <Col
          md={4}
          className={`${styles.leftSection} d-flex flex-column justify-content-center align-items-start p-5`}
          style={{ background: "#f8f9fa", minHeight: "100vh" }}
        >
          {/* City Name on Top */}
          <div className="mb-4">
            <strong style={{ fontSize: "1.3rem" }}>Jodhpur</strong>
          </div>
          <nav>
            <ul className={styles.navList}>
              <li>
                <a href="#home" className={styles.navLink}>Home</a>
              </li>
              <li>
                <Link href="/introduction" className={styles.navLink}>Introduction</Link>
              </li>
              <li>
                <a href="#service" className={styles.navLink}>Service</a>
              </li>
              <li>
                <a href="#portfolio" className={styles.navLink}>Portfolio</a>
              </li>
              <li>
                <a href="#news" className={styles.navLink}>News</a>
              </li>
              <li>
                <a href="#contact" className={styles.navLink}>Contact</a>
              </li>
            </ul>
          </nav>
        </Col>

        {/* Right Section: Profile */}
        <Col
          md={8}
          className={`${styles.rightSection} d-flex flex-column justify-content-center align-items-center p-5`}
          style={{ minHeight: "100vh" }}
        >
          <div className="text-center">
            <Image
              src="/OIP.jpeg"
              alt="Profile Picture"
              width={180}
              height={180}
              className={styles.profileImage}
            />
            <h1 className={styles.title} style={{ marginTop: "1.5rem" }}>
              krishnapal singh 
            </h1>
            <h3 className={styles.profession}>Full Stack Developer</h3>
          </div>
        </Col>
      </Row>
   </Container>
  );


}