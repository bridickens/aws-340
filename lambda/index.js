const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = "Hi, I am Helping Hand. You can ask me to say a helpful message, give you a fun fact, guide you through a long or short meditation, or give mental health information. Say 1 for a long meditation and 2 for a short meditation.";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelpingHandHandler = {
     canHandle(handlerInput) { //return true or false if this function is for a specific intent
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelpingHand';
    },
    handle(handlerInput) { //this is the main logic
    const messages = ["You can do this!", "I believe in you!", "You're doing great", "Keep going!", "Everything will be okay."];
        const speakOutput = messages[Math.floor(Math.random() * messages.length)];

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('Okay. What type of message is this?')
            .getResponse();
    }
};



const HealthInfoHandler = {
     canHandle(handlerInput) { //return true or false if this function is for a specific intent
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HealthInfo';
    },
    handle(handlerInput) { //this is the main logic
  
        const speakOutput = "Okay. 988 is the suicide and crisis hotline, or can be reached at 988lifeline.org. If it's more urgent, please call 911 or visit the emergency room for immediate help.";

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('Okay. What type of message is this?')
            .getResponse();
    }
};

const FunFactHandler = {
     canHandle(handlerInput) { //return true or false if this function is for a specific intent
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FunFact';
    },
    handle(handlerInput) { //this is the main logic
    const messages = ["A crocodile cannot stick its tongue out.", "There are 293 ways to make change for a dollar.", "Dreamt is the only English word that ends in the letters 'mt'.",
    "Keep going!", "Maine is the only state that has a one-syllable name.", "A cat has 32 muscles in each ear.", "The giant squid has the largest eyes in the world.", "A dime has 118 ridges around the edge."];
        const speakOutput = messages[Math.floor(Math.random() * messages.length)];

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('Okay. What type of message is this?')
            .getResponse();
    }
};

const GuidedMeditationHandler = {
  canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GuidedMeditation';
    },
     handle(handlerInput) {
      
        const meditationType = Alexa.getSlotValue(handlerInput.requestEnvelope, 'meditation_option');
    if(meditationType === '1' || meditationType === '2') {
           if(meditationType === '1'){ 
               const speakOutput = "Option " + meditationType + " selected. Let's begin the long meditation. First, breathe in and hold. <break time = '5s'/> Breathe out and hold. <break time = '5s'/> Take sharp inhales. <break time = '5s'/> Breathe out. <break time = '5s'/> Breathe in and hold. <break time = '5s'/> Breathe out and hold. <break time = '5s'/> Breathe in and hold. <break time = '5s'/> Breathe out and hold. <break time = '5s'/> Take sharp inhales. <break time = '5s'/> Breathe out. <break time = '5s'/> Meditation complete.";
                return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
           } 
           else{
               const speakOutput = "Option " + meditationType + " selected. Let's begin the short meditation. First, breathe in and hold. <break time = '5s'/> Breathe out and hold. <break time = '5s'/> Breathe in and hold. <break time = '5s'/> Breathe out and hold. <break time = '5s'/> Breathe in and hold. <break time = '5s'/> Breathe out and hold. <break time = '5s'/> Meditation complete.";
                return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
            
            }
    }else{
        const speakOutput = "Please say either 1 or 2 to select a long or short guided meditation";
         return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
}
    
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelpIntentHandler,
        HelpingHandHandler,
        GuidedMeditationHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        FunFactHandler,
        HealthInfoHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    //.withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();