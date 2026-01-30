Xcode run instructions
---------------------

If Xcode doesn't show the project files or the app doesn't run, follow these steps:

1. Open the project in Xcode:

   open BibleQuotesApp/BibleQuotesApp.xcodeproj

2. If the project file appears empty or missing files, add the Swift files and the JSON resource:
   - In Xcode's Project Navigator, right-click the project and choose "Add Files to 'BibleQuotesApp'...".
   - Select the Swift files under `BibleQuotesApp/` (App, Views, Models, Services, Data) and `Data/quotes.json`.
   - Make sure the app target is checked (Target Membership).

3. Ensure `quotes.json` is copied into the app bundle:
   - Select the app target → Build Phases → Copy Bundle Resources → add `quotes.json` if missing.

4. Build & run on a Simulator or device.

Notes:
- I added a lightweight `quotes.json` under `BibleQuotesApp/Data/quotes.json` and a `BibleQuotesData.swift` helper to load it.
- The `BibleQuotesApp.xcodeproj/project.pbxproj` in this repo may be empty or outdated; if you prefer, I can update the project file to include the files automatically — tell me to proceed and I'll modify the `.xcodeproj` to reference each new file.
