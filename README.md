# NUTabs

A browser extension which allows students to open job postings in a new tab since NUworks/Symplicity doesn't make this possible currently on the [Job Search Page](https://northeastern-csm.symplicity.com/students/app/jobs/search).

Works by replacing the job title `div` tags with `anchor` tags and linking them to where the job posting link would be.

Previous Behavior:

![Previous Behavior](https://media.giphy.com/media/hGDkI9xANHf7PRc2H1/giphy.gif)

With Extension:

![With Extension](https://media.giphy.com/media/L8TGpHcnrnwc4atwgB/giphy.gif)

Tested On:

-   Firefox Browser Developer Edition (82.0b9 [64-bit])
-   Google Chome (86.0.4240.80 [Official Build] [x86_64])

If for some reason it doesn't seem to work, try reloading the page. If it still doesn't work you can [create an issue](https://github.com/VishalRamesh50/NUTabs/issues) describing the problem.

## How Do I Add This to My Browser?

### Firefox

1. Download the [latest release](https://github.com/VishalRamesh50/NUTabs/releases/latest) `nutabs-version-an+fx.xpi` file from GitHub releases. If you download this while you're using Firefox it should ask you to add the extension right there. Give it permission to allow GitHub to install the extension, click Add, and you're done!

If it didn't ask this, follow the next steps:

2. Open Firefox and type `about:addons` in your address bar.
3. Either drag and drop your `.xpi` file in the browser or click the gear icon for settings in the top right > Install add-on From File... and select the `.xpi` file.
4. Click the Add button when prompted.

### Google Chrome

1. Get the [latest version](https://chrome.google.com/webstore/detail/nutabs/phcefmljbehmneoegeokgmaboiklbnnf) from the Google Chrome Web Store!

## How to Test Locally

_These notes are only if you are trying to develop for this extension. Ignore otherwise._

First, clone the repository and enter the directory

```sh
git clone https://github.com/VishalRamesh50/NUTabs.git
cd NUTabs
```

### Firefox

1. Install all dependencies

```sh
npm install
```

2. Run the extension with the right version of firefox.

```sh
npm run start[:nightly|:beta|:dev]
```

This means that if you want to run with the normal Firefox version you can do

```sh
npm run start
```

but if you want to run with a different version, for example, the DeveloperEdition Build you need to use

```sh
npm run start:dev
```

3. That's it! Any changes you make and save to the extension file should be reflected in the browser automatically.

Alternatively you could add it as a [temporary extension](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) and test it that way.

### Google Chrome

1. Open Google Chrome and type `chrome://extensions/` in your address bar.
2. Make sure Developer Mode is toggled on in the top right.
3. Click on the Load unpacked button in the top left corner and select the current working directory.

_If you see the warning/error:_ `Unrecognized manifest key: 'browser_specific_settings'` _you can safely ignore this. It will still work._

## Developer Notes

### Steps to Publish Extension

_Note: Any mention of `X.Y.Z` should be replaced with the new version of the extension being published._

1. Test! Make sure any changes introduced are working as expected thoroughly on both Firefox and Google Chrome.
2. Bump version of package using `npm version X.Y.Z`.
3. Bump the version in the `manifest.json` manually by updating the value of the `version` key with `X.Y.Z`
4. Pre-emptively add the new version to the `updates.json` file with the update link that the newly released asset would follow using the below format.

```json
{
    "version": "X.Y.Z",
    "update_link": "https://github.com/VishalRamesh50/NUTabs/releases/download/X.Y.Z/nutabs-X.Y.Z-an+fx.xpi"
}
```

4. Build the new asset using `npm run build`. This will produce a `.zip` file in the `web-ext-artifacts` directory.
5. Setup Environment Variables if not already done
   a. Copy the `.env.example` file to a `.env` file.

    ```sh
    cp .env.example .env
    ```

    b. Go to https://addons.mozilla.org/en-US/developers/addon/api/key/ and sign in to find the values to replace these environment variables with.
    c. Replace the value of `WEB_EXT_API_KEY` with the value of `JWT issuer` from the site.
    d. Replace the value of `WEB_EXT_API_SECRET` with the value of `JWT secret` from the site.

6. Sign the new release using `npm run sign`. This will produce a new `.xpi` file in the `web-ext-artifacts` directory.
7. When the new changes are merged in, create a new GitHub Release.
   a. Name the tag version `X.Y.Z`.
   b. Set the Release title to `X.Y.Z`.
   c. Include detailed release notes of any changes that are important to mention to users in bullet form.
   d. Attach both the `.xpi` and `.zip` files built in the `web-ext-artifacts` directory.
   e. Select the Publish relase button.

The extension is now ready for Firefox!

8. Go to the Google Chrome Developer Dashboard and navigate to the NUTabs extension.
9. Go to the "Package" section and select the "Upload new package" button using the `.zip` file that was built in the `web-ext-artifacts` directory.
10. Select the “Submit for Review” button.

The extension is now ready for Google Chrome!
