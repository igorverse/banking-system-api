<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

My first contact with NestJs. Because of the final exames and final paper of my college, I am not getting the effort I wanted to this project. I have a deadline to deliever, but I will continue the progress after because I really liked NestJS.

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ docker-compose up -d
$ npm run start:dev
```

## Endpoints (Insomnia)
```json
{
  "_type": "export",
  "__export_format": 4,
  "__export_date": "2022-06-07T18:10:16.884Z",
  "__export_source": "insomnia.desktop.app:v2022.3.0",
  "resources": [
    {
      "_id": "req_8539fcfed9de46c59c47f5eff5eb262c",
      "parentId": "wrk_2a9bc87232b245778affb908da4899f0",
      "modified": 1654006122364,
      "created": 1654006116115,
      "url": "{{ _.baseURL }}/accounts",
      "name": "accounts",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [],
      "headers": [],
      "authentication": {},
      "metaSortKey": -1654006116115,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "wrk_2a9bc87232b245778affb908da4899f0",
      "parentId": null,
      "modified": 1653967525358,
      "created": 1653967489110,
      "name": "RipioTrade backend technical test",
      "description": "",
      "scope": "collection",
      "_type": "workspace"
    },
    {
      "_id": "req_390412bd264c4d8e8b3700374109d675",
      "parentId": "wrk_2a9bc87232b245778affb908da4899f0",
      "modified": 1654625005836,
      "created": 1653971146178,
      "url": "{{ _.baseURL }}/accounts/bbc1e0c7-927e-42fd-8ab7-579c25e0a2fe/deposit",
      "name": "deposit",
      "description": "",
      "method": "PATCH",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"value\": 10\n}"
      },
      "parameters": [],
      "headers": [
        {
          "name": "Content-Type",
          "value": "application/json",
          "id": "pair_087606a3f4b946fa806872220d30bcda"
        }
      ],
      "authentication": {},
      "metaSortKey": -1653971146178,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_ece2a656ba8f4d78962643b2b523d39d",
      "parentId": "wrk_2a9bc87232b245778affb908da4899f0",
      "modified": 1654623082497,
      "created": 1653971159155,
      "url": "{{ _.baseURL }}/accounts/bbc1e0c7-927e-42fd-8ab7-579c25e0a2fe/withdraw",
      "name": "withdraw",
      "description": "",
      "method": "PATCH",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"value\": 2\n}"
      },
      "parameters": [],
      "headers": [
        {
          "name": "Content-Type",
          "value": "application/json",
          "id": "pair_087606a3f4b946fa806872220d30bcda"
        }
      ],
      "authentication": {},
      "metaSortKey": -1653971139622.5,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_c6f26be12e8742059ff6772ac93f3fdc",
      "parentId": "wrk_2a9bc87232b245778affb908da4899f0",
      "modified": 1654623223423,
      "created": 1653971133067,
      "url": "{{ _.baseURL }}/accounts/c27e01ef-ac77-4713-86fa-73bb91822f30/statement",
      "name": "statement",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [],
      "headers": [],
      "authentication": {},
      "metaSortKey": -1653971133067,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_7280cf7c1a1c40f7a5a48478e7cc5a40",
      "parentId": "wrk_2a9bc87232b245778affb908da4899f0",
      "modified": 1654625011629,
      "created": 1653971124420,
      "url": "{{ _.baseURL }}/accounts/8f99879c-6cdd-4bff-997a-28337d5968b1/balance",
      "name": "balance",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [],
      "headers": [],
      "authentication": {},
      "metaSortKey": -1653971124420,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_48c7048c9d3f4985a6fa2922ec5af5b9",
      "parentId": "wrk_2a9bc87232b245778affb908da4899f0",
      "modified": 1654624997459,
      "created": 1653969332726,
      "url": "{{ _.baseURL }}/accounts",
      "name": "account",
      "description": "",
      "method": "POST",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"name\": \"Nick Szabo\",\n\t\"balance\": 42\n}"
      },
      "parameters": [],
      "headers": [
        {
          "name": "Content-Type",
          "value": "application/json",
          "id": "pair_e1a5d8409ae24c6bbeec185071f0a73d"
        }
      ],
      "authentication": {},
      "metaSortKey": -1653969332726,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_6a4809be7fe541bb8458bac495a7ce84",
      "parentId": "wrk_2a9bc87232b245778affb908da4899f0",
      "modified": 1654624990125,
      "created": 1653969094615,
      "url": "{{ _.baseURL }}/accounts/bbc1e0c7-927e-42fd-8ab7-579c25e0a2fe/transfer",
      "name": "transfer",
      "description": "",
      "method": "POST",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"idAccountToTransfer\": \"c27e01ef-ac77-4713-86fa-73bb91822f30\",\n\t\"value\": 42\n}"
      },
      "parameters": [],
      "headers": [
        {
          "name": "Content-Type",
          "value": "application/json",
          "id": "pair_8093806ce04040c2815cdf43f7253566"
        }
      ],
      "authentication": {},
      "metaSortKey": -1653969094615,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "env_314999b611615c246e4e0f5d197f5367f50b924a",
      "parentId": "wrk_2a9bc87232b245778affb908da4899f0",
      "modified": 1653967533075,
      "created": 1653967489125,
      "name": "Base Environment",
      "data": {},
      "dataPropertyOrder": {},
      "color": null,
      "isPrivate": false,
      "metaSortKey": 1653967489125,
      "_type": "environment"
    },
    {
      "_id": "jar_314999b611615c246e4e0f5d197f5367f50b924a",
      "parentId": "wrk_2a9bc87232b245778affb908da4899f0",
      "modified": 1653967489129,
      "created": 1653967489129,
      "name": "Default Jar",
      "cookies": [],
      "_type": "cookie_jar"
    },
    {
      "_id": "spc_c7d57bda527d46449aefb61d228ce457",
      "parentId": "wrk_2a9bc87232b245778affb908da4899f0",
      "modified": 1653967489113,
      "created": 1653967489113,
      "fileName": "ripio-technical-test",
      "contents": "",
      "contentType": "yaml",
      "_type": "api_spec"
    },
    {
      "_id": "env_448401a77a6845a1a0329fb895111984",
      "parentId": "env_314999b611615c246e4e0f5d197f5367f50b924a",
      "modified": 1653969112182,
      "created": 1653967536150,
      "name": "Localhost",
      "data": {
        "baseURL": "http://localhost:3000"
      },
      "dataPropertyOrder": {
        "&": [
          "baseURL"
        ]
      },
      "color": null,
      "isPrivate": false,
      "metaSortKey": 1653967536150,
      "_type": "environment"
    }
  ]
}
```

## Test

There are just jumb tests provided by nestJS. I have not implemented the tests yet.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
