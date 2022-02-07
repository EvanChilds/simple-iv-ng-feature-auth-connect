# simple-iv-ng

Reproduction of @ionic-enterprise/auth bug.

I have inserted our OAuth configuration and updated the values in AndroidManifest.xml and Info.plist.

Steps to reproduce:

1. Checkout repository and `npm install`.
2. `ionic build`
3. `npx cap sync`
4. `npx cap open android`

When running the project in android studio, you should see the error `{"error": "custom tabs are not available"} in the logcat tab when clicking the login button.

When running the project in iOS and Web, the login button will redirect to our OAuth provider as expected.
