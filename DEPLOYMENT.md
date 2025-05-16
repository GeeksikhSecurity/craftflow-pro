# Deployment Information

The GitHub Actions workflows have been successfully added to this repository.

## Vercel Deployment

The site has been deployed to Vercel at:
https://craftflow-1fhtux8o6-singhs-kaurs-designs.vercel.app

## GitHub Secrets Required

To enable the automated deployment workflows, add these secrets to your GitHub repository:

1. Go to your repository on GitHub
2. Navigate to Settings > Secrets and variables > Actions
3. Add the following secrets:
   - `VERCEL_TOKEN`: Your Vercel API token (from https://vercel.com/account/tokens)
   - `VERCEL_PROJECT_ID`: `prj_aqkWiat1OUjpt018JMxGxfaVfxGw`
   - `VERCEL_ORG_ID`: `team_YLxnYBWvoiSIwseaAAFuf9Kd`

## Verify Secrets

Run the following command to verify your secrets are properly configured:

```bash
./check-vercel-secrets.sh
```

## Next Steps

1. Review the GitHub Actions workflows in `.github/workflows/`
2. Check the deployment checklist in `vercel_deployment_checklist_integrated.md`
3. Use the GitHub issue template for future deployments
