import { spawn } from 'node:child_process';

const npxCommand = process.platform === 'win32' ? 'npx.cmd' : 'npx';

const runInstall = (args) =>
  new Promise((resolve, reject) => {
    const child = spawn(npxCommand, ['playwright', 'install', ...args], {
      stdio: 'inherit',
      env: {
        ...process.env,
        PLAYWRIGHT_BROWSERS_PATH: process.env.PLAYWRIGHT_BROWSERS_PATH ?? '0'
      }
    });

    child.once('error', reject);
    child.once('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Playwright installer exited with status ${code}.`));
      }
    });
  });

const main = async () => {
  const attempts = [
    { args: ['--with-deps'], description: 'Playwright browsers with OS dependencies' },
    { args: [], description: 'Playwright browsers only' }
  ];

  const failures = [];

  for (const attempt of attempts) {
    try {
      await runInstall(attempt.args);
      return;
    } catch (error) {
      failures.push({ attempt, error });
      console.warn(`⚠️  Unable to install ${attempt.description}: ${error.message}`);
    }
  }

  console.warn(
    [
      '⚠️  Skipping Playwright browser download because automatic installation failed.',
      '    This is usually due to missing sudo privileges or lack of network access.',
      '    You can download the browsers manually by running:',
      '      npx playwright install --with-deps',
      '    If you only need browser binaries (no system deps), run:',
      '      npx playwright install'
    ].join('\n')
  );

  const lastFailure = failures.at(-1);
  if (lastFailure) {
    console.warn(`    Last error: ${lastFailure.error.message}`);
  }
};

main().catch((error) => {
  console.error(`Unexpected error while preparing Playwright: ${error.message}`);
  process.exitCode = 1;
});
