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

1. Download the [latest release](https://github.com/VishalRamesh50/NUTabs/releases/latest) `nutabs-version-an+fx.xpi` file from GitHub releases. If you download this while you're using Firefox it should ask you to add the extension right there. Give it permission to allow GitHub to install the extension, proceed, and you're done! If it didn't ask this, follow the next steps.
2. Open Firefox and type `about:addons` in your address bar.
3. Either drag and drop your `.xpi` file in the browser or click the gear icon for settings in the top right > Install add-on From File... and select the `.xpi` file.
4. Click the Add button when prompted.

### Google Chrome

1. Download the [latest release](https://github.com/VishalRamesh50/NUTabs/releases/latest) `nutabs-version.zip` file from GitHub releases.
2. Open Google Chrome and type `chrome://extensions/` in your address bar.
3. Make sure Developer Mode is toggled on in the top right.
4. Drag and drop the `.zip` file onto the browser and you're done! \
   _If you see the warning/error:_ `Unrecognized manifest key: 'browser_specific_settings'` _you can safely ignore this. It will still work._

## How to Test Locally

_These notes are only if you are trying to develop for this extension. Ignore otherwise._

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

Follow the steps to [add the extension normally](#google-chrome) but use the current working directory instead of the `.zip` file.
