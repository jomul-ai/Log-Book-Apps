This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Database Schema
| Field          | Type     | Description                     |
| -------------- | -------- | ------------------------------- |
| id             | String   | Unique ID                       |
| title          | String   | Assignment title                |
| description    | String   | Assignment description          |
| assignmentDate | DateTime | Auto created date               |
| dueDate        | DateTime | Due date                        |
| status         | String   | CREATE / ON_PROCESS / SUBMITTED |

## API Design Table
| Method | Endpoint             | Description           | Success Code | Error Code |
| ------ | -------------------- | --------------------- | ------------ | ---------- |
| GET    | /api/assignments     | Get all assignments   | 200          | -          |
| GET    | /api/assignments/:id | Get single assignment | 200          | 404        |
| POST   | /api/assignments     | Create assignment     | 201          | 400        |
| PUT    | /api/assignments/:id | Update assignment     | 200          | 400 / 404  |
| DELETE | /api/assignments/:id | Delete assignment     | 200          | 404        |

## How to Run

1. npm install
2. npx prisma migrate dev
3. npm run dev