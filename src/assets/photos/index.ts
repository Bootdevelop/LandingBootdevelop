// Imágenes editoriales y conceptuales generadas para Bootdevelop con ImageGen.
// Escenas ilustrativas: no representan al equipo, oficinas ni productos reales.
import software from './software.jpg';
import mvp from './mvp.jpg';
import architecture from './architecture.jpg';
import cloud from './cloud.jpg';
import ai from './ai.jpg';
import security from './security.jpg';
import about from './about.jpg';
import services from './services.jpg';
import type { ServiceKey } from '../../i18n/ui';

export const servicePhotos: Record<ServiceKey, ImageMetadata> = { software, mvp, architecture, cloud, ai, security };
export const pagePhotos = { about, services };
