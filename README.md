# Lambda Quest

A practice project for AWS tech.

TO-DO:
-[x] Clean up vite starting project
-[x] Install MUI
- Homepage
--[x] play area gfx, draw from sprite sheet?
-- action log
--[x] What is your name, hero?
--[x] Place name in state, Display on screen
-[x] Get DNS setup. Route 53.
-[x] Deploy with S3 Bucket
-[] Codepipeline to automatically deploy to s3 when github repo updates
- Setup Lambda, ping it from REACT FE and display response.
- API Gateway to access lambda?

beep boop trigger action

aws s3 rm s3://test-site-egs --recursive

aws s3api put-object --bucket test-site-egs --body ./FE/dist/index.html --key index.html

we need to clear out the bucket and then recursively go through every file in dist and upload it