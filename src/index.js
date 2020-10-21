import { NativeModules } from 'react-native';

class PlayStoreInAppReview {
  /**
   * Start the review process
   *
   * @param {boolean} useFakeReviewManager
   *
   * @returns {Promise<boolean>} returns true if request was successful
   */
  static startInAppReview(
    useFakeReviewManager?: boolean = false
  ): Promise<boolean> {
    return NativeModules.PlayStoreInAppReview.startInAppReview(
      useFakeReviewManager
    );
  }
}

module.exports = PlayStoreInAppReview;
