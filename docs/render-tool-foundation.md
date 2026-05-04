# Render Tool Foundation

## Goal
Allow a user to:
- choose topic/template
- upload TTS audio
- upload script text
- upload branding assets
- select theme/template style
- start a background Remotion render
- download the final MP4 when complete

## Foundation Added In Code
- `src/tooling/renderContract.ts`
  - runtime-validated schema for request payloads using Zod
- `src/tooling/templateRegistry.ts`
  - maps product template IDs to composition IDs
- `src/tooling/renderFoundation.ts`
  - minimal job creation + validation structure
- `src/GenericExplainerTemplate.tsx`
  - props-driven generic explainer composition scaffold
- `src/tooling/defaultExplainerRequest.ts`
  - example request payload for development and future FE wiring

## Suggested Product Flow
1. FE sends `ExplainerVideoRequest`
2. server validates request via `validateExplainerRequest()`
3. server creates `RenderJob`
4. worker resolves composition ID from `TEMPLATE_REGISTRY`
5. worker bundles and renders Remotion composition with validated props
6. output is stored and exposed for download

## Next Backend Layer
Recommended additions after this foundation:
- upload endpoints for audio/script/logo
- persisted render job store
- async worker that calls Remotion renderer
- progress polling endpoint
- downloadable output asset URL

## Why This Matters
Without a typed request contract, the future tool will become another hardcoded video pipeline. This foundation ensures user uploads, script segments, branding, scene manifests, and theme choices all enter the rendering system in a consistent shape.
