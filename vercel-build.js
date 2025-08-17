#!/usr/bin/env node

// Custom build script for Vercel deployment
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function build() {
  try {
    console.log('Starting Vercel build process...');
    
    // Run vite build from project root (this uses the existing vite.config.ts)
    const { stdout, stderr } = await execAsync('npx vite build');
    
    if (stdout) console.log(stdout);
    if (stderr && !stderr.includes('(!) Some chunks are larger')) {
      console.error(stderr);
    }
    
    console.log('✅ Build completed successfully!');
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

build();