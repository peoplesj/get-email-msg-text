### About the function
This function is designed to be used within the Slack Workflow Builder that is triggered by a reaction emoji on a message.

### Setup
1. With the Slack CLI installed, clone this function to your local machine using the Slack CLI:
```
slack create get-reacji-message-text --template https://github.com/peoplesj/get-reacji-text-function
```

2. Run the function locally
```
slack run
```
3. Open Workflow Builder and create a workflow that starts when someone reacts with {select any emoji} in #select-a-channel.

4. In the top right corner of Workflow Builder, search for your custom function. Click or drag your custom function to select it as a step in your workflow.

5. Configure the two inputs:

- Match the input title name to the corresponding variable.
- For the `The Channel Where The Reacted Message Is In variable`, be sure to change the data type.
The reacted message text is now stored as a variable in Workflow Builder.
<img width="662" alt="Screenshot 2024-07-22 at 10 39 37 AM" src="https://github.com/user-attachments/assets/5ed1f1f3-4863-4b03-a0c7-f885c4ee5024">

### Add the custom function to your desired channel(s)
By default, custom code does not have access to information within your Slack channels. To give your custom code/app access, simply invite the custom app to the channel.
Option 1:
- Type `@your-custom-app-name (not in channel)` in your channel's message box and press enter.
Option 2:
- Type `/invite @your-custom-app-name(not in channel)` in your channel's message box and press enter.
Option 3: 
- In channel details, navigate to the `integrations` section and click the `add apps` button.
<img width="568" alt="Screenshot 2024-07-22 at 10 50 44 AM" src="https://github.com/user-attachments/assets/8295deea-dd6d-49af-a20c-1567560c16a3">


### Deploy the function or run locally
To run the function locally use the Slack CLI command:
```
slack run
```

To deploy the function to slack managed infrastructure so it is always available run the Slack CLI command:
```
slack deploy
```

### Distribute your function
Use the following command to decide who can access your function
```
slack function access
```


