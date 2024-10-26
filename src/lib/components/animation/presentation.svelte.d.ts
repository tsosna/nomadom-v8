import { type Snippet } from 'svelte';
import 'reveal.js/dist/reveal.css';
declare const Presentation: import("svelte").Component<{
    [key: string]: any;
    children?: Snippet;
    options?: Reveal.Options & {
        reload?: boolean;
    };
    class?: string;
}, {}, "">;
export default Presentation;
