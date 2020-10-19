# react-native-play-store-in-app-review

Use the new Google Play Store in-app review API in your React Native app ! 

## Installation

1. Install the package
```sh
yarn add react-native-play-store-in-app-review
```

## Usage

```js
import PlayStoreInAppReview from "react-native-play-store-in-app-review";

// start app review process

const useFakeReviewManager = __DEV__;

await PlayStoreInAppReview.startInAppReview(useFakeReviewManager);
```

## Test the integration
Please refer to the [official Google documentation](https://developer.android.com/guide/playcore/in-app-review/test) for a complete test guide, troubleshooting etc...

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
