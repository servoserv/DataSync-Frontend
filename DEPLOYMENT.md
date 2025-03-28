# Frontend Deployment Guide

This document provides detailed instructions for deploying the DataSync frontend to production environments.

## Deployment with Vercel

The recommended way to deploy the DataSync frontend is using Vercel, which offers a seamless deployment experience for React applications.

### Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com) if needed)
2. The DataSync backend deployed and running
3. A GitHub account with the repository pushed to GitHub

### Deployment Steps

1. Log in to your Vercel account
2. Click "Add New" > "Project"
3. Import your GitHub repository (DataSync-Frontend)
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (leave as default)
   - **Output Directory**: `dist` (leave as default)

5. Add Environment Variables:
   ```
   VITE_API_URL=https://your-backend-api.onrender.com
   VITE_GOOGLE_SHEETS_API_KEY=your-google-sheets-api-key
   ```

6. Click "Deploy"

### Custom Domain Setup

If you want to use a custom domain:

1. Go to the project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the instructions to configure DNS settings

### Continuous Deployment

With Vercel's GitHub integration, any push to your main branch will automatically trigger a new deployment. To customize this behavior:

1. Go to the project settings in Vercel
2. Navigate to "Git"
3. Configure production branch and build settings as needed

## Manual Deployment

If you prefer not to use Vercel, you can deploy the frontend manually to any static hosting service.

### Build for Production

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.production` file with your production environment variables:
   ```
   VITE_API_URL=https://your-backend-api.onrender.com
   VITE_GOOGLE_SHEETS_API_KEY=your-google-sheets-api-key
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. The build output will be in the `dist` directory

### Deploy to Static Hosting

Upload the contents of the `dist` directory to your static hosting provider (Netlify, GitHub Pages, Amazon S3, etc.).

### Configure CORS

Ensure your backend has CORS configured to allow requests from your frontend domain:

```javascript
// In your backend server configuration
app.use(cors({
  origin: 'https://your-frontend-domain.com',
  credentials: true,
}));
```

## Environment Configuration

Different environments may require different API endpoints:

- **Development**: `VITE_API_URL=http://localhost:8080`
- **Production**: `VITE_API_URL=https://your-production-api.com`
- **Staging**: `VITE_API_URL=https://your-staging-api.com`

## Deployment Checklist

Before considering deployment complete, verify:

- [ ] Frontend successfully connects to backend API
- [ ] Authentication works in production
- [ ] Google Sheets integration functions properly
- [ ] All assets (images, fonts, etc.) load correctly
- [ ] UI renders correctly on different devices and browsers
- [ ] Custom domain is set up and working (if applicable)
- [ ] SSL/HTTPS is properly configured