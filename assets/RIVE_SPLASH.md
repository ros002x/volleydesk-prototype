# NS Volley launch animation

Export the premium Rive splash animation here:

- File: `assets/ns-volley-launch.riv`
- Artboard: default or `Launch`
- State machine: `Launch`

The app loads this file with the official `@rive-app/canvas-lite` web runtime.
If the `.riv` file is missing or fails to load, the app falls back to the built-in SVG splash so startup never breaks.