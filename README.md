# Proxy with Node( Single Page ). 🔥🔥🔥

- ## Requirements

  - You need to install [Node.js](https://nodejs.org/en/) to use this repo.

  - Run the following commands to install npm dependencies.

    #### npm

    ```shell
     npm install express && npm install puppeteer
    ```

    Note : Add -g flag if you want to install it globally.

    #### yarn (if you want to)

    ```shell
    yarn add express puppeteer
    ```

    **Note** : These commands also installs [_puppeteer_](https://github.com/puppeteer/puppeteer) as dependency which uses _chromium_ to serve virtual web pages (size > 100MB).

- ## Quick SetUp

  - This repo contains 2 scripts
    ```
    ./
      - server.js
      - index.js
    ```
    - **server.js** : Creates a test environment at _localhost:8080_.
    - **index.js** : Creates a proxy using _puppeteer_ which uses _chromium_ api.
  - Run above scripts with [Node.js](https://nodejs.org/en/) in seperate terminals becauses both euns http servers at specified domain.

- ## Custom

  - There is a JSON file as [payload.json](payload.json) edit it ,so it suits your requirements.
  - Edit the [index.html](web/index.html) which is the test UI which you see, replace it with your own code if you need.
  - If you have a custom http server already up and running you don't need to run [server.js](server.js) file
  - Fell free to make a pull request 😀.

- ## LICENSE

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ```
  MIT License

  Copyright (c) 2020 Raja Ravi Prakash

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  ```
