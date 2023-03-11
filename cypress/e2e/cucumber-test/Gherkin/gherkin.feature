Feature: Acount Login SwagLabs for example

    Background: Preconditions 
        Given User visit SwagLabs page

    Scenario Outline: Cucumber | TC1 Verify the Login Correctly
        When The user enters username as '<username>' and passsword as '<password>' 
        When clicks on login button
        Then it will enter to the home page 
    Examples:
    |username|password|   
    | standard_user| secret_sauce|
    |sdsdsa|sadasdasd|     
