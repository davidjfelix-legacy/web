# iotv web

[![Build Status](https://travis-ci.org/iotv/web.svg?branch=master)](https://travis-ci.org/iotv/web)
[![Waffle.io - Issues in progress](https://badge.waffle.io/iotv/web.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/iotv/web)
[![Greenkeeper badge](https://badges.greenkeeper.io/iotv/web.svg)](https://greenkeeper.io/)

This repo houses the React front end code for iotv.
For the most part, it is a monolithic repo and does not pull components from external sources.

## Running Locally

This project uses [create-react-app]() which should make working with it familiar and straight forward.
Locally running code will automatically transpile ES6 and watch for changes on the filesystem so that the browser auto-updates.

```bash
yarn
yarn start
```

This should automatically open your browser window and navigate to [http://localhost:3000](http://localhost:3000).
Updating code should automatically refresh the browser.
This has been tested with Chrome, using React and Redux extensions.

## Repository Structure and Deploying

This repository uses 2 primary, protected branches, `master` and `production`.
Contributors are expected to use branches and collaborate and coexist using those branches.
If contributors are concerned that other contributors may overwrite their branch or utilize `git`'s history-changing features in a way which makes teamwork difficult, the repo should be forked.
New contributors unknown to the project should fork.

Code in `master` is canonical and everything else is explicitly not canon.
`master` will make every attempt to not include risky or broken code and will strongly avoid changing history.
`production` will only merge code from master which is to be deployed to production. It will **NEVER** change history.
Code destined to be merged to `production` from `master` *ought* to be tagged.
Tagged code will be given a github release, making it easier to find historic, compiled versions of the site.