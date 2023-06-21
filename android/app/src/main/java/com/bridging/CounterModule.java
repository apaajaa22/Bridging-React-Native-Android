// CounterModule.java

package com.bridging;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CounterModule extends ReactContextBaseJavaModule {
  private int counter = 0;

  public CounterModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "CounterModule";
  }

  @ReactMethod
  public void incrementCounter(Callback callback) {
    counter++;
    showToast("" + counter);
    callback.invoke(counter);
  }

  @ReactMethod
  public void resetCounter() {
    counter = 0;
    showToast("Counter reset to 0");
  }

  @ReactMethod
  public void getCounter(Callback callback) {
    callback.invoke(counter);
  }

  private void showToast(String message) {
    Toast.makeText(getReactApplicationContext(), "Toast From Native / Java: " + message, Toast.LENGTH_SHORT).show();
  }
}
