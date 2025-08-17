# WHERE TO RUN THE GIT COMMANDS

## METHOD 1: TERMINAL/COMMAND PROMPT (RECOMMENDED)

**Windows:**
1. Press `Windows + R`
2. Type `cmd` and press Enter
3. Navigate to your project folder:
   ```cmd
   cd C:\path\to\your\keystoneinfra\project
   ```
4. Run the commands:
   ```cmd
   git add netlify.toml NETLIFY_DEPLOYMENT_FIX.md
   git commit -m "Fix Netlify build - use direct vite build command"
   git push origin main
   ```

**Mac/Linux:**
1. Open Terminal
2. Navigate to your project folder:
   ```bash
   cd /path/to/your/keystoneinfra/project
   ```
3. Run the commands:
   ```bash
   git add netlify.toml NETLIFY_DEPLOYMENT_FIX.md
   git commit -m "Fix Netlify build - use direct vite build command"
   git push origin main
   ```

## METHOD 2: GITHUB DESKTOP (IF YOU USE IT)

1. Open GitHub Desktop
2. Select your keystoneinfra repository
3. You'll see the changed files in the left panel
4. Add a commit message: "Fix Netlify build - use direct vite build command"
5. Click "Commit to main"
6. Click "Push origin"

## METHOD 3: VS CODE TERMINAL (IF YOU USE VS CODE)

1. Open VS Code
2. Open your keystoneinfra project folder
3. Press `Ctrl + ` (backtick) to open terminal
4. Run the git commands in the terminal

## METHOD 4: REPLIT SHELL (IF YOU'RE IN REPLIT)

1. In Replit, click "Shell" tab
2. Run the git commands there

## VERIFY YOUR LOCATION

Before running commands, make sure you're in the right folder by checking:

**Windows:** `dir` (should show your project files)
**Mac/Linux:** `ls` (should show your project files)

You should see files like: `package.json`, `netlify.toml`, `client/`, etc.

## AFTER RUNNING THE COMMANDS

1. Go to your GitHub repository online
2. Refresh the page
3. You should see the new files updated
4. Go to Netlify dashboard
5. Trigger a new deployment

The build should now succeed!