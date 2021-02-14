*** DISCLAIMER ***
(legal stuff)

This project and any code included is submitted soley for evaluation purposes for Advanced Legal Intake Systems. Any other use or sharing of this project and / or any use of any of the code herin is expressly forbidden without written consent of the applicant. Thank you. 

*** END OF DISCLAIMER ***

Send a link to your challenge submission to jobs@alisops.com.  Good luck!

This was a really fun challenge. For this specific task I would have likely preferred to use React because I can easily implement a more complex form validation. I CAN implement something similar in Javascript like I have done in the past (you can see an example here https://github.com/Build-Week-Water-my-Plants-2-PT/Landing-Page/blob/main/Contact_Us/contact_us.js) but due to the number of input fields I instead choose to implement the default required validation schema provided by HTML. This is alright for basic validataion but is not perfect. For instance the phone number fields are using the "tel" input type to validate that a phone number has been entered. Some browsers have support for this type of validation, however some do not and instead revert the field to a text input. If we were to actually use this input form then we would need to define a phone schema to validate the phone number is correct on submit. This is why I usually like to use React for contact forms. With react we can use yup in conjunction with formik to achieve a very robust validation schema.

You can see an example of this on lines 8-20 here: 
https://github.com/AfricanMarketplaceBW/SignUp-Page/blob/master/src/App.js

I had a bit of trouble integrating the translate feature into the project. I wanted to use Google Translate but the default buttons provided by Google forced the website to open onto the google translate web app in a new tab. This is not ideal; however the only option Google provides for native web translation requires users to select their desired language from a dropdown box with well over 100 different languages. This is also not ideal for the customer and did not strictly meet the requirements provided to me for this assignment. Luckily I discoverd that you can actually just loop through the translate box's children elements and select a specific language to translate to. This allowed me to hide the div containing the google translate dropdown box and instead translate the web page natively on the click of a button. 

I saved the form information in a Javascript object. Although this technically is not a JSON object it actually worked better for this specific use case. You can also post it to any API as a JSON object by just calling JSON.stringify(initialState). Also if you are using express as a server the requests should be serialized to JSON by default. This works the same if you are using axios to make the requests to a non express server that does not convert the javascript objects by default which could be another benefit to choosing React over vanilla JS. 
