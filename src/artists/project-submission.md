# Introduction

The journey to publish a project on Mintoria's mainnet contract begins with a template, a placeholder for your project data before it gets published on the testnet, and finally on the mainnet.
Once you've filled in all the details of the project, you can request a transfer to the testnet. Depending on the gallery you've chosen, the project gets assessed by Mintoria. If the project meets all the requirements, it gets deployed to the testnet. If not, you'll get a message with what you need to address to push the project forward.
Once on testnet, it's encouraged to mint at least 25 tokens, and once you're happy with the output, you can request a transfer to the mainnet.
The project gets assessed again, and if it's conforming with our gallery submission guidelines, it will get published on the mainnet, with the minting paused.<br /><br />
![Project Journey](/images/artist/project-journey.png)
<br /><br />

## Creating a Project Template

Head on to the My Projects page using the link the Projects menu.<br />
You can create your first project by pushing Create Project under one of the Mintoria galleris: Selected or Open World. [Click here to get more information about Mintoria's galleries.](/artists/mintoria-galleries)<br />
![Create Project Template](/images/artist/my-projects-start.png)

Fill in the project name and the price per token to create your project template and submit.<br />
![Create Project Popup](/images/artist/create-project-popup.png)
<br /><br />

## Editing a template

With the project template created, you'll be taken to the editing page. The project attributes are broken into several sections, as follows:

### Details Tab

The project details tab is comprised of the project name & description, artist/project website, and the drop date. All fields are required.<br /><br />
![Edit Project Details](/images/project/edit/project-details.png)<br /><br />

### Token Details Tab

On the token details tab you can edit the following fields:

<ul>
<li><i>Price Per Token In ETH</i> - this is the price the minter will pay for a token. If the price is 0, the project will considered a giveaway. </li>
<li><i>Max Iterations</i> - this is the maximum number of tokens that can be minted.</li>
<li><i>Max Tokens Per Address</i> - the maximum number of tokens a wallet can mint.</li>
<li><i>Aspect Ratio</i> - the aspect ratio is the ratio between the width & the height of the output. If width equals height, the aspect ratio is 1. For full HD, it's 1.77 (16:9)</li>
<li><i>Token URI</i> - this URI serves JSON data about the token & project. It defaults to Mintoria and cannot be changed.</li>
<li><i>License</i> - the license under which your project will be published. The license governs who/how can use your code. In case your code contains blocks written by somebody, please inform the Mintoria staff.</li>
</ul>

![Edit Token Details](/images/project/edit/token-details.png)<br /><br />

### Royalty Info Tab

On this tab, you can edit the following fields:

<ul>
<li><i>Secondary Market Royalty Fee</i> - the royalty fee dictates the percentage of the sale price that you will get for every sale of a token. Mintoria's smart contracts implement the EIP-2981 NFT Royalty Standard which allows market-places like OpenSea to send the royalty funds directly to the artist. Other marketplaces may choose to send the funds to Mintoria, and in this case the transactions to the artist will be performed manually by us.</li>
<li><i>Collaborator Address</i> - if you have a collaborator with whom you'd like to share the proceedings, fill in the addres</li>
<li><i>Collaborator Percentage</i> - the percentage of the sale funds to be directed to the collaborator.</li>
</ul>

![Edit Royalty Info](/images/project/edit/royalty-info.png)<br /><br />

### Script Tab

First choose the script type (currently supported options are vanilla Javascript & P5JS), then input the code.
![Script Tab](/images/project/edit/script-tab.png)<br /><br />

After you save the changes, the liveview option becomes active and you can see the output and features from different iterations of your project. You can input your own hash & token id, or click on refresh to generate random data.
![Script LiveView](/images/project/edit/script-liveview.png)<br /><br />

### Features Tab

Features are what give your tokens diversity. All features need to be generated directly from the hash and should not be dependable on randomness.

![Features Tab](/images/project/edit/features.png)<br /><br />

### Transfer Requests

Once you have filled in all the details and would like to move the project on the test net, submit a transfer request, which will appear in the Transfer tab. Until a request is assessed by our staff, the status will be created. After the assessment, it'll either be rejected or accepted. The staff will provide comments to explain the assessment. If the request is rejected, you can address the details mentioned in the comments and submit another one.

![Transfers Tab](/images/project/edit/transfers.png)<br /><br />
