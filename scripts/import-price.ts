import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { priceItems } from "../src/data/price";

const inputPath = resolve("data/price.xlsx");
const outputPath = resolve("public/data/price.json");

async function main() {
  if (!existsSync(inputPath)) {
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, JSON.stringify(priceItems, null, 2), "utf8");
    console.log(`Excel file was not found at ${inputPath}. Demo price was written to ${outputPath}.`);
    return;
  }

  // TODO: read data/price.xlsx with xlsx, validate required fields, then write public/data/price.json.
  // Expected columns: petType, breed, serviceCategory, serviceName, priceFrom.
  throw new Error("Excel import is prepared but not implemented yet. Add xlsx parsing when the real file appears.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
