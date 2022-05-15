# Sales and Secondary Market

## Sales

Mintoria.io allows artists to publish their generative artworks and sell tokens to collectors.
The project economics is defined by the total number of iterations x the price per token.
A project of 500 iterations priced at 0.1 ETH will generate a maximum of 50 ETH.

```
total generated = total tokens * price per token
```

With each sale, Mintoria's smart contract collects the platform fees (if any), and redirects the remaining funds to the artist's wallet.
If a collaborator has been added by the artist, the collaborator funds are calculated pased on the specified percentage, and sent to their wallet.

## Fees

The fees vary between galleries and can be set differently from project to project.
For Selected, fees range between 9% and 12%, while for Open World it's between 15% and 20% and get lower with every project completely sold.
A further reduction of the fees can be negociated on a case by case basis.

|                       | Selected | Open World |
| --------------------- | -------- | ---------- |
| First project         | 10%      | 12%        |
| Second project        | 9%       | 11%        |
| Third project onwards | 8%       | 10%        |

## Secondary Market

Mintoria's smart contract specify the royalty fee percentage at the project level. But there is no way to enforce payments in royalties with each after sale of the token. However, this is respected and operated by the majority of secondary marketplaces. <br />
Our smart contracts implement the <b>EIP-2981</b> standard that allow marketplaces to query for the artist address and the funds it should receive as a result of a secondary sale, and send the funds directly to the artist, bypassing the platform. <br />
Unfortunately not all marketplaces adopt this standard, and some still send the secondary funds to the platform at the end of each month.
In this case, the platform will send the funds to the artists upon receiving them.
