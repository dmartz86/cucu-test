Feature: As use do a search on google

  Scenario: Search protractor
    Given the cucumber website
    When searchs "Gherkin"
    Then results must appears
