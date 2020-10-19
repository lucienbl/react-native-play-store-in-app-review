package com.reactnativeplaystoreinappreview

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.google.android.play.core.review.ReviewManagerFactory
import com.google.android.play.core.review.testing.FakeReviewManager

class PlayStoreInAppReviewModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    private val eRequestUnsuccessful = "E_REQUEST_UNSUCCESSFUL"

    override fun getName(): String {
        return "PlayStoreInAppReview"
    }

    @ReactMethod
    fun startInAppReview(useFakeReviewManager: Boolean, promise: Promise) {
      val manager = if (useFakeReviewManager)
                      FakeReviewManager(reactApplicationContext)
                    else
                      ReviewManagerFactory.create(reactApplicationContext)

      val request = manager.requestReviewFlow()

      request.addOnCompleteListener { request ->
        if (request.isSuccessful) {
          val reviewInfo = request.result

          val flow = manager.launchReviewFlow(currentActivity!!, reviewInfo)
          flow.addOnCompleteListener {
            promise.resolve(true)
          }
        } else {
          promise.reject(eRequestUnsuccessful, "The request was unsuccessful. Do not inform the user or change your app's normal user flow.")
        }
      }
    }
}
