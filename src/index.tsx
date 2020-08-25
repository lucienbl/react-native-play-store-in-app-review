import { NativeModules } from 'react-native';

type PlayStoreInAppReviewType = {
  startInAppReview(): Promise<any>;
};

const { PlayStoreInAppReview } = NativeModules;

export default PlayStoreInAppReview as PlayStoreInAppReviewType;
