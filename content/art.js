// Art gallery for the snare hotspot: the Sanity "Art" projects, shown with the
// same cards and detail view as the Portfolio modal (content/works.js). One
// type only, so the filter chips are left off.
//
// export default (container, ctx) -> cleanup()
import { createPortfolio } from './works.js';

export default createPortfolio({ include: ['Art'], filters: false });
