import { createRequestHandler } from 'react-router';

declare module 'react-router' {
  export interface AppLoadContext {
    cloudflare: {
      env: Env;
      ctx: ExecutionContext;
    };
  }
}

const requestHandler = createRequestHandler(
  () => import('virtual:react-router/server-build'),
  import.meta.env.MODE
);

export default {
  async fetch(request, env, ctx) {
    ctx.props['data'] = [
      {
        path: '/about',
        heading: 'This is the About page data',
      },
      {
        path: '/contact',
        heading: 'This is the Contact page data',
      },
      {
        path: '/services',
        heading: 'This is the Services page data',
      },
    ];

    return requestHandler(request, {
      cloudflare: { env, ctx },
    });
  },
} satisfies ExportedHandler<Env>;
