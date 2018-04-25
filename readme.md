# Lions Parse Date Format

This project converts a SQL function to a JavaScript and PHP function that runs the same as the SQL function

## JavaScript

To run the JavaScript tests, run these commands from the javascript directory of the project:


```
npm install
npm test
```

## PHP

To run the PHP tests, run these commands from the php directory of the project:


```
composer install
./vendor/bin/phpunit --bootstrap src/FormatMeetingDayTime.php tests/FormatMeetingDayTimeTest.php 
```
