package com.nativerashid;




import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;


public class ARCreateModule extends ReactContextBaseJavaModule {
    ARCreateModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "TESTAPP";
    }
    // add to CalendarModule.java
    @ReactMethod(isBlockingSynchronousMethod = true)
    public void createLOGINEvent(String name, String password) {

        Log.d("USER Create", "Create event called with name: " + name
                + " and Password: " + password);

    }
}

