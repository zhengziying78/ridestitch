# RideStitch

`RideStitch` is an iOS app for cyclists, bikepackers, and tourers to merge multiple ride recordings into one seamless ride — and upload the result back to RideWithGPS.

Whether you're stitching together a multi-day tour or fixing a split ride caused by a GPS dropout or app crash, `RideStitch` makes it fast and easy.

## 🚴 Why RideStitch?

There's no easy way to combine rides across platforms:

- **RideWithGPS** doesn't support merging rides natively.
- **Strava** doesn't allow combining activities post-upload.
- **Garmin Connect** can export rides, but has no merge tool.
- Tools like [fitfiletools](https://www.fitfiletools.com/) and [merge-activities](https://gtt.feub.net/merge-activities/) work great, but:
  - They're not mobile-friendly
  - They require handling GPX/TCX/FIT files

`RideStitch` is built mobile-first and platform-integrated — so you can stitch and re-upload rides from your phone with no file wrangling.

## 🔧 Planned Features

- Import rides RideWithGPS
- Combine a multi-day tour into one ride
- Fix a ride accidentally split mid-recording
- Create a clean, shareable ride file for analysis or replay
- Normalize timestamps (optional)
- Fill short gaps between rides
- Upload the merged ride directly back to RideWithGPS

## 🚧 Status

This project is currently in early development.

## 💻 Development

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Expo CLI

### Getting Started

1. Clone the repository
   ```
   git clone https://github.com/yourusername/ridestitch.git
   cd ridestitch
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create `.env` file from example
   ```
   cp env.example .env
   ```

4. Start the development server
   ```
   npm start
   ```

5. Follow the instructions in the terminal to open the app on your device or simulator

### Project Structure

- `src/api/` - RideWithGPS API integration
- `src/features/` - Feature-specific components and logic
- `src/components/` - Reusable UI components
- `src/lib/` - Utilities for GPX parsing and file handling
- `src/screens/` - App screens
- `src/navigation/` - Navigation configuration
- `src/context/` - Global state management

## 🪪 License

[MIT License](LICENSE)
