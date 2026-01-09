import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// --- CONFIGURACIÓN ---
const MAX_WIDTH = 800;
const QUALITY = 80;
const TARGET_DIRS = ['public/screens', 'public/images'];
// ---------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function processImages() {
    console.log('🚀 Iniciando optimización INTELIGENTE...\n');

    for (const dir of TARGET_DIRS) {
        const fullDir = path.join(__dirname, dir);
        if (!fs.existsSync(fullDir)) continue;

        const files = fs.readdirSync(fullDir);

        for (const file of files) {
            if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
                const filePath = path.join(fullDir, file);

                // 1. Obtener datos originales
                const originalStats = fs.statSync(filePath);
                const originalSize = originalStats.size;

                const image = sharp(filePath);
                const metadata = await image.metadata();

                // Solo procesar si es gigante
                if (metadata.width > MAX_WIDTH) {
                    let pipeline = image.resize(MAX_WIDTH);

                    // 2. Aplicar compresión agresiva según formato
                    if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
                        pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
                    } else if (metadata.format === 'png') {
                        // EL TRUCO: palette: true reduce a 8-bits (estilo TinyPNG)
                        pipeline = pipeline.png({
                            quality: QUALITY,
                            compressionLevel: 9,
                            palette: true
                        });
                    } else if (metadata.format === 'webp') {
                        pipeline = pipeline.webp({ quality: QUALITY });
                    }

                    const buffer = await pipeline.toBuffer();

                    // 3. EL SEGURO DE VIDA: ¿Es realmente más ligero?
                    if (buffer.length < originalSize) {
                        fs.writeFileSync(filePath, buffer);
                        const ahorro = ((originalSize - buffer.length) / 1024).toFixed(2);
                        console.log(`✅ Optimizado: ${file} (-${ahorro} KB)`);
                    } else {
                        console.log(`⚠️  Omitido: ${file} (El original ya estaba optimizado)`);
                    }
                }
            }
        }
    }
    console.log('\n✨ Proceso terminado.');
}

processImages().catch(console.error);