import { defineConfig, devices } from '@playwright/test';


import dotenv from 'dotenv';
dotenv.config({ path:"data/qa.env"});

export default defineConfig({
  expect:{
    timeout:10000
  },
  testDir: './tests',
  workers:1,
  reporter: [['html']],
  // { outputFolder:"./myReports/report-"+new Date().getMilliseconds()}]
   use: {    
    trace: 'on',
    screenshot:'on',
    video:"on",
    headless:false,   
    //actionTimeout:8000
    
  },
  projects: [
    {
      name: 'Chrome',    
        use: { ...devices["Desktop Chrome"],
        channel:"chrome"  
      },
    },
  ]
});
