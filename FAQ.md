# How can I know if the webhook is triggered?
Using the chat bot tester, if you check the response for the expression that need to activate the webhook
search for the "webhook_url" property (nluResponse -> result -> webhook_url), if no url then it wasn't triggered.