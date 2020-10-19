import { NativeModules } from 'react-native';

type PlayStoreInAppReviewType = {
  startInAppReview(useFakeReviewManager?: boolean): Promise<any>;
};

const { PlayStoreInAppReview } = NativeModules;

export default PlayStoreInAppReview as PlayStoreInAppReviewType;
