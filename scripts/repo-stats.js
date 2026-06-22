#!/usr/bin/env node
/**
 * repo-stats.js
 * Counts resources, sections, and links in the README and generates a stats summary.
 * Run: node scripts/repo-stats.js
 */

const fs = require('fs');
const path = require('path');

function countStats(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  let stats = {
    totalLines: lines.length,
    sections: 0,
    subsections: 0,
    links: 0,
    freeResources: 0,
    tables: 0,
    codeBlocks: 0,
  };

  let inCodeBlock = false;

  for (const line of lines) {
    // Count headings
    if (line.startsWith('## ')) stats.sections++;
    if (line.startsWith('### ')) stats.subsections++;

    // Track code blocks
    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      if (inCodeBlock) stats.codeBlocks++;
    }

    // Count links (not in code blocks)
    if (!inCodeBlock) {
      const linkMatches = line.match(/\[.*?\]\(https?:\/\/[^\)]+\)/g);
      if (linkMatches) stats.links += linkMatches.length;
    }

    // Count free indicators
    if (line.includes('🆓') || line.includes('(free)') || line.includes('Free)')) {
      stats.freeResources++;
    }

    // Count table rows
    if (line.startsWith('|') && !line.startsWith('|---')) {
      stats.tables++;
    }
  }

  return stats;
}

function scanDirectory(dir) {
  let totalLinks = 0;
  let fileCount = 0;

  function scan(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scan(fullPath);
      } else if (item.endsWith('.md')) {
        fileCount++;
        const content = fs.readFileSync(fullPath, 'utf8');
        const matches = content.match(/\[.*?\]\(https?:\/\/[^\)]+\)/g);
        if (matches) totalLinks += matches.length;
      }
    }
  }

  scan(dir);
  return { totalLinks, fileCount };
}

// Main
const rootDir = path.join(__dirname, '..');
const readmePath = path.join(rootDir, 'README.md');

if (!fs.existsSync(readmePath)) {
  console.error('README.md not found');
  process.exit(1);
}

const readmeStats = countStats(readmePath);
const dirStats = scanDirectory(rootDir);

console.log('\n📊 awesome-research-hub — Repository Statistics');
console.log('═'.repeat(50));
console.log(`📄 Markdown files:        ${dirStats.fileCount}`);
console.log(`🔗 Total links (all files): ${dirStats.totalLinks}`);
console.log(`📑 README sections:        ${readmeStats.sections}`);
console.log(`📌 README subsections:     ${readmeStats.subsections}`);
console.log(`🆓 Free resource markers:  ${readmeStats.freeResources}`);
console.log(`📋 Table rows:             ${readmeStats.tables}`);
console.log(`💻 Code blocks:            ${readmeStats.codeBlocks}`);
console.log('═'.repeat(50));
console.log('');
