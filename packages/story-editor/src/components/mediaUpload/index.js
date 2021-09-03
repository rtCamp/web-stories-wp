import { applyFilters } from '../../hooks';

const Component = applyFilters( 'storyEditor.MediaUpload', null );
const MediaUpload = Component ? Component : () => null;

export default MediaUpload;
