# MS Teams Starter Kit for data.world's AI Context Engine

This starter kit will let you quickly get started with data.world's AI Context Engine™. It is a simple MS Teams app that demonstrates how to use the data.world API to send a question to the AI Context Engine and display its response in a conversation in Teams.

## Getting started 

### Pre-requisites

- Node.js v18
- An MS Teams account
- [Visual Studio Code](https://code.visualstudio.com/download)
- The [Teams Toolkit Visual Studio Code Extension](https://aka.ms/teams-toolkit), version 5.0.0+
- A [data.world](https://data.world) account, with an AI Context Engine™ License and available Knowledge Tokens

### Installation

First, fetch this repo however you like:

- Clone it using the web URL

  ```sh
  git clone https://github.com/datadotworld/ddw-teams-starter-kit.git
  ```

or

- Use the GitHub CLI

  ```sh
  gh repo clone datadotworld/ddw-teams-starter-kit
  ```

or

- Download it via this link [ddw-teams-starter-kit.zip](https://github.com/datadotworld/ddw-teams-starter-kit/archive/refs/heads/main.zip) and unzip it.

Then, navigate to the project directory:

```sh
$ cd ddw-teams-starter-kit
```

Get a data.world token (either as [an individual user](https://developer.data.world/docs/api-keys-and-auth#method-2-acquiring-tokens-via-the-ui) for development, or from a [service account](https://docs.data.world/en/130574-creating-and-managing-service-accounts.html) for deployment). You will also need the MS Teams Toolkit installed in VS Code: https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension

### Running the app

Use the Teams Toolkit to install dependencies and start the app:

In VS Code, open the "Run and debug" panel (`cmd-shift-d`), and then select "Debug in Teams" from the dropdown in the top bar; either browser is fine. This will install the necessary dependencies and provision the app in Azure. Note that _this will initially fail_. That's ok, because this process will create the `env/.env.local` file with the necessary environment variable keys. Fill these in. 

#### AICE-specific configuration

Set these values in the appropriate `.env` file, eg `env/.env.local` if you're using the included "Debug in Teams" option in VS Code:

```
DDW_AICE_ENDPOINT=https://api.data.world
DDW_AICE_ORG_ID=# organization that owns the catalog
DDW_AICE_PROJECT_ID=# project to store results
DDW_AICE_TOKEN=# Service Account token scoped to the appropriate organization and project
```

In the vast majority of most cases, you'll be able to leave the default `api_endpoint` value as is.

#### Continue running the app

From here, restart the "Debug in Teams" process. A browser window will open with the Teams App Test Tool. Once you sign in with your Microsoft account, you can install the app to your team in the browser, and then start interacting with the AI Context Engine.

## Customization

In this Starter Kit, we provide a basic method for chatting with your data. Currently, responses from the AI Context Engine (AICE) are displayed in a card. This card includes the textual answer and an option to see the SPARQL query that was used to generate the response. You may find these visual elements in [`src/components/cardBody.ts`](./src/components/cardBody.ts).

We also provide an interface for calling the AICE, by way of [`src/api/index.ts`](./src/api/index.ts). The requests and responses are typed, using auto-generated interfaces based on our OpenAPI spec. The stock [`src/framework/teamsBot.ts`](./src/framework/teamsBot.ts) has been expanded to demonstrate usage of the AICE API. As we continue to develop and iterate on the AICE, the interfaces will be updated.

### Resources

- A web-based tool for testing new cards: [Adaptive Cards designer](https://adaptivecards.io/designer/) (select "Microsoft Teams" for the host app in the dropdown in the top bar)

- To update the API type definition against the latest published OpenAPI spec, run

```sh
npx openapi-typescript https://api.data.world/v0/aice/openapi.json --output types/api-v0.d.ts
```

_The following is the boilerplate information included with the Teams Toolkit_

---

## Overview of the Basic Bot template

Examples of Microsoft Teams bots in everyday use include:

- Bots that notify about build failures.
- Bots that provide information about the weather or bus schedules.
- Bots that provide travel information.

A bot interaction can be a quick question and answer, or it can be a complex conversation. Being a cloud application, a bot can provide valuable and secure access to cloud services and corporate resources.

### Get started with the Basic Bot template

> **Prerequisites**
>
> To run the Basic Bot template in your local dev machine, you will need:
>
> - [Node.js](https://nodejs.org/), supported versions: 16, 18
> - [Teams Toolkit Visual Studio Code Extension](https://aka.ms/teams-toolkit) version 5.0.0 and higher or [Teams Toolkit CLI](https://aka.ms/teams-toolkit-cli)

1. First, select the Teams Toolkit icon on the left in the VS Code toolbar.
2. Press F5 to start debugging which launches your app in Teams App Test Tool using a web browser. Select `Debug in Test Tool (Preview)`.
3. The browser will pop up to open Teams App Test Tool.
4. You will receive a welcome message from the bot, and you can send anything to the bot to get an echoed response.

**Congratulations**! You are running an application that can now interact with users in Teams App Test Tool:

![basic bot](https://github.com/OfficeDev/TeamsFx/assets/9698542/bdf87809-7dd7-4926-bff0-4546ada25e4b)

### What's included in the template

| Folder       | Contents                                     |
| ------------ | -------------------------------------------- |
| `.vscode`    | VSCode files for debugging                   |
| `appPackage` | Templates for the Teams application manifest |
| `env`        | Environment files                            |
| `infra`      | Templates for provisioning Azure resources   |

The following files can be customized and demonstrate an example implementation to get you started.

| File          | Contents                                                 |
| ------------- | -------------------------------------------------------- |
| `teamsBot.ts` | Handles business logics for the Basic Bot.               |
| `index.ts`    | `index.ts` is used to setup and configure the Basic Bot. |

The following are Teams Toolkit specific project files. You can [visit a complete guide on Github](https://github.com/OfficeDev/TeamsFx/wiki/Teams-Toolkit-Visual-Studio-Code-v5-Guide#overview) to understand how Teams Toolkit works.

| File                    | Contents                                                                                                                                  |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `teamsapp.yml`          | This is the main Teams Toolkit project file. The project file defines two primary things: Properties and configuration Stage definitions. |
| `teamsapp.local.yml`    | This overrides `teamsapp.yml` with actions that enable local execution and debugging.                                                     |
| `teamsapp.testtool.yml` | This overrides `teamsapp.yml` with actions that enable local execution and debugging in Teams App Test Tool.                              |

### Extend the Basic Bot template

Following documentation will help you to extend the Basic Bot template.

- [Add or manage the environment](https://learn.microsoft.com/microsoftteams/platform/toolkit/teamsfx-multi-env)
- [Create multi-capability app](https://learn.microsoft.com/microsoftteams/platform/toolkit/add-capability)
- [Add single sign on to your app](https://learn.microsoft.com/microsoftteams/platform/toolkit/add-single-sign-on)
- [Access data in Microsoft Graph](https://learn.microsoft.com/microsoftteams/platform/toolkit/teamsfx-sdk#microsoft-graph-scenarios)
- [Use an existing Microsoft Entra application](https://learn.microsoft.com/microsoftteams/platform/toolkit/use-existing-aad-app)
- [Customize the Teams app manifest](https://learn.microsoft.com/microsoftteams/platform/toolkit/teamsfx-preview-and-customize-app-manifest)
- Host your app in Azure by [provision cloud resources](https://learn.microsoft.com/microsoftteams/platform/toolkit/provision) and [deploy the code to cloud](https://learn.microsoft.com/microsoftteams/platform/toolkit/deploy)
- [Collaborate on app development](https://learn.microsoft.com/microsoftteams/platform/toolkit/teamsfx-collaboration)
- [Set up the CI/CD pipeline](https://learn.microsoft.com/microsoftteams/platform/toolkit/use-cicd-template)
- [Publish the app to your organization or the Microsoft Teams app store](https://learn.microsoft.com/microsoftteams/platform/toolkit/publish)
- [Develop with Teams Toolkit CLI](https://aka.ms/teams-toolkit-cli/debug)
- [Preview the app on mobile clients](https://github.com/OfficeDev/TeamsFx/wiki/Run-and-debug-your-Teams-application-on-iOS-or-Android-client)
