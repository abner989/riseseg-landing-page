import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { products } from "../app/products.ts";

const root = resolve("dist/client");
const source = readFileSync("app/product-details.ts", "utf8");
const slugs = new Map([...source.matchAll(/"([^"]+)": \{\s+slug: "([^"]+)"/g)].map(match => [match[1], match[2]]));
const home = readFileSync(resolve(root, "index.html"), "utf8");
const escapeHtml = text => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#x27;");
assert.equal(slugs.size, products.length, "Every product must have a presentation");

for (const product of products) {
  const slug = slugs.get(product.name);
  const filename = resolve(root, `solucoes/${slug}.html`);
  assert.ok(existsSync(filename), `Missing export: ${slug}`);
  const html = readFileSync(filename, "utf8");
  assert.equal([...html.matchAll(/<h1(?:\s[^>]*)?>/g)].length, 1, `${slug}: exactly one h1`);
  for (const text of [product.name, product.description, product.audience, ...product.includes]) {
    assert.ok(html.includes(escapeHtml(text)), `${slug}: missing original information: ${text}`);
  }
  assert.ok(home.includes(`solucoes/${slug}.html`), `${slug}: not linked from homepage`);
  const correctNumber = product.category === "Planos de Saúde" ? "5511990185135" : "5511993109896";
  const chatLinks = [...html.matchAll(/href="(https:\/\/wa\.me\/[^" ]+)"/g)].map(match => match[1]);
  assert.ok(chatLinks.length >= 2, `${slug}: missing contact actions`);
  for (const link of chatLinks) {
    assert.ok(link.includes(correctNumber), `${slug}: wrong specialist`);
    assert.ok(decodeURIComponent(link).includes(product.name), `${slug}: generic WhatsApp message`);
  }
  for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    const resource = match[1].split(/[?#]/)[0];
    if (/^(https?:|mailto:|data:)/.test(resource)) continue;
    const target = resource.startsWith("/") ? resolve(root, `.${resource}`) : resolve(dirname(filename), resource);
    assert.ok(existsSync(target), `${slug}: broken local resource: ${resource}`);
  }
  assert.ok(html.includes("../rise-seg/favicon-riseseg.png"), `${slug}: missing nested-route favicon`);
  console.log(`OK ${product.name} — original information, images, navigation and specialist`);
}
console.log(`${products.length} product pages verified.`);
