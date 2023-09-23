/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './sanity/schemas'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {resourceSchema} from './sanity/schemas/resource.schema'

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    // Add and edit the content resourceSchema in the './sanity/resourceSchema' folder
    schema: {types: schemas},
    plugins: [
        deskTool(),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({defaultApiVersion: apiVersion}),
    ],
})
