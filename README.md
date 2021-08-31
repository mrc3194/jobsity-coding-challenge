# Jobsity Coding Challenge

To develop this project I used, React Native, Expo, Typescript.

## Installation

To install the node modules of this project, you nedd yarn package manager as this project use yarn workspaces.
And also you need expo installed in your machine. (Expo installation documentation)[https://docs.expo.dev/get-started/installation/]
If you don't have an emulator (iOS/Android) on your machinge you will need the Expo Go app installed in your mobile device

```bash
// after installing expo on your machine
yarn install // to install the node modules and yarn workspaces
// after installing the node modules
yarn start // to run the project with expo and to scan the QR code to run the app in Expo GO
yarn ios // to run the app in a iOS simulator
yarn android // to run the app in an Android emulator
```

## Features

The app count with the next sections on it:

### Sections

**Home Page:** This screen shows all the series/shows paginated, the way to navigate through this screen is either a classic paginated flow (previous page, next page buttons) or in an infinite scroll list (you can change the settings of this, in the Settings screen). From here you can navigate tothe series/show screen to see more information about it.

**Search Page:** In this screen you can search any show/series or person, first the shows/series will be showed and then the person search results are showed in the scroll view, it also manage an empty state UI/UX feedback if no results are found. From here you can navigate tothe series/show screen to see more information about it.

**Series/Show Information Page:** In this screen you can see general information about the series/show, the title, a poster image if is included, as well as the air time day(s)/time(s) if included. You can also save a series into a favorites series list. You can visualize the genres of the series, as well as the summary/synopsis. At the bottom of the screen you can see all of the episodes of the series grouped by season. (Some series doesn't include an episode list)

**Episode General Information Screen:** In this screen you can see the basic information about the episode. Episode poster if included, Episode title, season and epsiode number if included, and air date and summary/synopsis if included.

**Person Screen:** In this screen you can see a person's face image if included, their artistic name and the list of series they have participated in.

**My Series Screen:** Here you can visualize all the series you have marked as favorites, and you can visualize them in the order they were saved in or in alphabetical order.

**Settings Screen:** In this screen you can select if you want to use a scroll view for the home page or not. You also can set a PIN to prevent anyone using your app without your authorization. You can set a new PIN, you can update/change your current PIN or you can delete/deactivate PIN auth method.

**Splash and Auth Screen:** In the splash screen you will see an animation after the assets load and then you will enter to the app, or in case there's a PIN auth method active, you will have to enter the correct PIN to access the app. In Android you can use fingerprint auth if PIN auth is activated.
