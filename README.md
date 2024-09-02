## Demo

Open [https://contact-page-demo.vercel.app/](https://contact-page-demo.vercel.app/) with your browser to see the result.

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

# Contact Page Demo

This repository is a demo application with a contact page. The application is built using Next.js and Prisma, and it utilizes AWS S3 for file storage.

## Getting Started

Follow the steps below to set up the project locally:

### 1. Clone the Repository

Clone the `develop` branch of this repository to your local machine:

````bash
git clone -b develop https://github.com/vikorbogdan/contact-page-demo.git

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd contact-page-demo
npm install
````

### 3. Set Up Environment Variables

Create a `.env` file in the root of your project and fill it with the environment variables listed below. These variables are necessary for the application to run properly.

```plaintext
AWS_S3_REGION=XXXXXXXXXXXXXX           # The AWS region where your S3 bucket is hosted
AWS_S3_BUCKET_NAME=XXXXXXXXXXXXXX       # The name of your AWS S3 bucket used for storing files
AWS_S3_ACCESS_KEY_ID=XXXXXXXXXXXXXX     # Your AWS access key ID with permissions to access the S3 bucket
AWS_S3_SECRET_ACCESS_KEY=XXXXXXXXXXXXXX # Your AWS secret access key associated with the access key ID
NEXT_PUBLIC_API_BASE_URL=XXXXXXXXXXXXXX # The base URL for your API (usually http://localhost:3000 for local development)
DATABASE_URL=XXXXXXXXXXXXXX             # The connection string for your database (e.g., file:./dev.db for a local SQLite database)
```

**Important:** Replace the `XXXXXXXXXXXXXX` placeholders with your actual values.

### 4. Run Database Migrations

If you are using Prisma, make sure to apply the database migrations:

```bash
npx prisma migrate dev
```

### 5. Start the Development Server

Once everything is set up, start the development server:

```bash
npm run dev
```

Your application should now be running at `http://localhost:3000`.

+1. Seed the Database

To populate your database with initial data, you can run the seeder script provided in the project. This script is located at prisma/seeder.ts.

```bash

npm run seed
```

This command will insert predefined data into your database, making it easier to test and develop the application.

## Deployment

To deploy this application, you can use platforms like Vercel, AWS, or any other cloud provider. Ensure that the environment variables are set up correctly in your deployment environment.
