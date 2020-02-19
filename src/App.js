import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { Button, Icon, Grid, Container, Image } from "semantic-ui-react";

function PortfolioAppHeader() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>
            {t("first name")} {t("last name")}
          </h1>
          <h4>{t("title")}</h4>
        </p>

        <Container>
          <Button color="github">
            <Icon name="github" /> Github
          </Button>

          <Button color="gitlab">
            <Icon name="gitlab" /> Gitlab
          </Button>
          <Button color="linkedin">
            <Icon name="linkedin" /> LinkedIn
          </Button>
        </Container>

        <br />

        <Container>
          <span className="country-city">
            {t("city")}, {t("country")}
          </span>
        </Container>

        <br />
        <Button animated="vertical">
          <Button.Content hidden>{t("contact")}</Button.Content>
          <Button.Content visible>
            <Icon name="mail" />
          </Button.Content>
        </Button>
      </header>
    </div>
  );
}

function PortfolioAppSkill() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Grid columns="four" divided>
            <Grid.Row>
              <Grid.Column>
                <Icon name="js" />
                <br />
                {t("skill0 title")}
                <br />

                {t("skill0 subtitle")}
              </Grid.Column>

              <Grid.Column>
                <Icon name="git" />
                <br />
                {t("skill1 title")}
                <br />
                {t("skill1 subtitle")}
              </Grid.Column>
              <Grid.Column>
                <Icon name="diamond" />
                <br />
                {t("skill2 title")}
                <br />

                {t("skill2 subtitle")}
              </Grid.Column>
              <Grid.Column>
                <Icon name="react" />
                <br />
                {t("skill3 title")}
                <br />

                {t("skill3 subtitle")}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns="two" divided>
            <Grid.Row>
              <Grid.Column>
                <Icon name="server" />
                <br />
                {t("skill4 title")}
                <br />

                {t("skill4 subtitle")}
              </Grid.Column>
              <Grid.Column>
                <Icon name="cog" />
                <br />
                {t("skill5 title")}
                <br />

                {t("skill5 subtitle")}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns="one" divided>
            <Grid.Row>
              <Grid.Column>
                <Icon name="edit" />
                <br />
                {t("skill6 title")}
                <br />

                {t("skill6 subtitle")}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </header>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback="loading">
      <PortfolioAppHeader />
      <PortfolioAppSkill />
    </Suspense>
  );
}

export default App;
