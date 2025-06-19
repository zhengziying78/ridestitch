# RideStitch Specification

## Overview

RideStitch is a mobile-first utility app that enables cyclists to merge multiple rides into a single unified ride, optionally normalize timestamps to eliminate long idle gaps, and upload the resulting activity directly back to RideWithGPS. This is especially useful for bikepackers, tourers, or anyone with split or interrupted rides.

---

## Product-Market Fit

- **Target Users**: Cyclists, especially those who tour or do long-distance riding with multiple GPS recordings.
- **Pain Points Addressed**:
  - Split rides due to crashes, app timeouts, or intentional breaks (multi-day tours)
  - No easy mobile-native tool for merging rides
  - Manual GPX merging is error-prone and desktop-only
- **Differentiation**:
  - Fully mobile experience (iOS/Android)
  - OAuth-based RideWithGPS integration (no file downloads)
  - Direct upload of merged ride to RideWithGPS

---

## Key Features

- Import rides from RideWithGPS
- Select multiple rides to merge
- Optional timestamp normalization:
  - Zero-gap merge
  - Custom user-defined gap (e.g., 5 minutes)
- Export merged ride as GPX (initial), FIT and TCX support planned
- Upload final activity back to RideWithGPS

---

## Technical Design

### Platform

- React Native (preferred for cross-platform UI and rapid development)
- iOS: support both iPhone and iPad
- Portrait mode only. No landscape mode.

### Authentication

- RideWithGPS OAuth 2.0
  - {{TBD}}

### Data Integration

- RideWithGPS Developer API:
  - {{TBD}}

### GPX Handling

- Parse GPX files into structured data
  - {{TBD}}
- Merge logic:
  - {{TBD}}
- Re-encode as valid GPX
  - {{TBD}}

### Save the merged ride back to RWGPS

{{TBD}}, including:
  - Authenticated POST to RideWithGPS upload endpoint
  - Set activity title, date, and type

---

## UX/UI

{{TBD}}

---

## Considerations

- Cross-platform
- OAuth 2.0 for platform APIs
- Secure token storage
- UI/UX optimized for mobile-first
- OpenStreetMap/Mapbox licensing
- GDPR/privacy compliance for location data
