import Image from "next/image";
import Styles from "./page.module.scss";
import { Container } from "./ui/Container";
import { Header, Roulette, Card, Bet } from "./Components";
export default function Home() {
  return (
    <Container className={Styles.container}>
      <div className={Styles.container__content}>
        <Header />
        <Roulette /> <Bet />
        <div className={Styles.CardContent}>
          <Card title="RED" pays={2} backgroundColor="#FF4242" />
          <Card title="GREEN" pays={2} backgroundColor="#47FF69" />
          <Card title="BLACK" pays={2} backgroundColor="#343843" />
          <Card title="JOKER" pays={2} backgroundColor="#7246D9" />
        </div>
      </div>
    </Container>
  );
}
