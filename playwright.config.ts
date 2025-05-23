import { defineConfig, devices } from '@playwright/test';
import { channel } from 'diagnostics_channel';

// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  expect:{
    timeout:10000
  },
  testDir: './tests',
  workers:2,
  reporter: [['html']],
 // globalSetup:"",
  // grep:[/smoke/,/regression/],
  //grepInvert:/smoke/, 
 // testMatch:["./day09/testAnnotaions.spec.ts",""],
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
      // grep:[/smoke/,/regression/],
        use: { ...devices['Desktop Chromium'],
          channel:'chrome',
          viewport:null,
          launchOptions:{
          args:['--start-maximized']
          // geolocation:{ latitude: 56.2639,
          //       longitude: 9.5018
          //   },
          //   permissions:['geolocation']
          }
      },
    },
    // {
    //   name:"Emulation",
    //     use: { ...devices['Blackberry PlayBook landscape'],
    //     }
    // }
  ]
});
