package cz.family.circles.cucumber.stepdefs;

import org.springframework.test.web.reactive.server.WebTestClient;

public abstract class StepDefs {

    protected WebTestClient.ResponseSpec actions;
}
