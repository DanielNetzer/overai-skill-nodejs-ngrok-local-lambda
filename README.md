# overai-skill-nodejs-ngrok-local-lambda
An example of Over.AI skill built with nodejs, as an AWS lambda wrapped in express service to debug locally using ngrok. 
sound's like something Chuck Norris does.

# What is ngrok?
ngrok exposes local servers behind NATs and firewalls to the public internet over secure tunnels.
[Download](https://ngrok.com/download), there's no need to download it if you cloned this repository.

# Running the project
- `npm i` or `yarn`
- `ngrok.exe http 3000`
- copy the URI given by ngrok (the secured one), should look similar to this `https://03425370.ngrok.io` and paste it in your skill's webhook uri
- (Optional) if you are on VSCode then you can launch the debugger using the config in this repository to debug and add breakpoints on the code.
