import { Shield, Globe, Database } from "lucide-react";
import { Project, ProjectPreview } from "../types/project";

export const projects: Project[] = [
  {
    id: "001",
    title: "Advanced DDoS Mitigation & Global Server Optimization",
    shortTitle: "DDoS Shield",
    description:
      "Enterprise-grade serverless solution providing robust DDoS protection and worldwide low-latency content delivery using Cloudflare Workers. Features intelligent IP-based rate limiting, geolocation-aware VM selection, and real-time performance monitoring.",
    category: "Infrastructure",
    status: "Production",
    year: "2024",
    features: [
      "Real-time DDoS protection",
      "Global load balancing",
      "Intelligent rate limiting",
      "Performance monitoring",
      "Auto-failover systems",
    ],
    techStack: [
      "Cloudflare Workers",
      "CDN",
      "Express.js",
      "Docker",
      "Prometheus",
      "Grafana",
    ],
    githubUrl: "https://github.com/Ception",
    liveUrl: "",
    gradient: "from-primary to-secondary",
    icon: Shield,
    codeSnippet: `export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const RATE_LIMIT = 1;
    const TIME_WINDOW = 60;
    
    try {
      const ip = request.headers.get('x-real-ip');
      if (!ip) {
        return new Response('IP not found', { status: 400 });
      }

      // Rate limiting with KV store
      const count = await env.RATE_LIMIT_STORE.get(ip);
      if (parseInt(count || '0') >= RATE_LIMIT) {
        return new Response('Rate limit exceeded', { status: 429 });
      }

      await env.RATE_LIMIT_STORE.put(
        ip, 
        (parseInt(count || '0') + 1).toString(), 
        { expirationTtl: TIME_WINDOW }
      );

      // Intelligent VM selection
      const { country, city } = request.cf;
      const vmIpsArray = env.VMS.split(',');
      const selectedVms = selectVmsBasedOnLocation(vmIpsArray, { country, city });

      const bestVm = await findOptimalVm(selectedVms);
      return new Response(bestVm.ip);
    } catch (error) {
      return new Response('Service unavailable', { status: 503 });
    }
  }
};`,
  },
  {
    id: "002",
    title: "Next.js E-Commerce Platform with Headless CMS",
    shortTitle: "E-Commerce Engine",
    description:
      "Comprehensive e-commerce solution built with Next.js and Strapi CMS, featuring advanced product management, secure payment processing with Stripe, and optimized for high-performance user experiences.",
    category: "Web Application",
    status: "Production",
    year: "2024",
    features: [
      "Headless CMS integration",
      "Secure payment processing",
      "Real-time inventory",
      "Advanced search & filters",
      "Mobile-optimized checkout",
    ],
    techStack: [
      "Next.js",
      "Strapi",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
      "TypeScript",
    ],
    githubUrl: "https://github.com/Ception",
    liveUrl: "",
    gradient: "from-secondary to-accent",
    icon: Globe,
    codeSnippet: `import { loadStripe } from '@stripe/stripe-js';
import { CartItem } from '@/types';

export async function createCheckoutSession(items: CartItem[]) {
  const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  
  const lineItems = items.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
        images: [item.image],
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  const { error } = await stripe!.redirectToCheckout({
    lineItems,
    mode: 'payment',
    successUrl: \`\${window.location.origin}/success\`,
    cancelUrl: \`\${window.location.origin}/cart\`,
  });

  if (error) {
    console.error('Stripe error:', error);
  }
}`,
  },
  {
    id: "003",
    title: "High-Performance Backend API with Redis Caching",
    shortTitle: "CMS Core API",
    description:
      "Scalable backend infrastructure powering content management systems with advanced caching strategies, JWT authentication, and Discord API integration for real-time notifications.",
    category: "Backend API",
    status: "Production",
    year: "2023",
    features: [
      "High-performance caching",
      "JWT authentication",
      "Discord integration",
      "Rate limiting",
      "API versioning",
    ],
    techStack: [
      "TypeScript",
      "Express.js",
      "Redis",
      "PostgreSQL",
      "JWT",
      "Discord API",
    ],
    githubUrl: "https://github.com/Ception",
    liveUrl: "",
    gradient: "from-accent to-success",
    icon: Database,
    codeSnippet: `import { createClient } from 'redis';
import jwt from 'jsonwebtoken';

class CacheService {
  private redis = createClient({
    url: process.env.REDIS_URL
  });

  async get<T>(key: string): Promise<T | null> {
    try {
      const data = await this.redis.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  }

  async set(key: string, value: any, ttl: number = 3600): Promise<void> {
    try {
      await this.redis.setEx(key, ttl, JSON.stringify(value));
    } catch (error) {
      console.error('Cache set error:', error);
    }
  }
}

export const cacheService = new CacheService();`,
  },
];

export const projectPreviews: ProjectPreview[] = [
  {
    title: "DDoS Shield",
    description:
      "Enterprise-grade serverless DDoS protection with global load balancing",
    tech: ["Cloudflare Workers", "Express.js", "Docker"],
    gradient: "from-primary to-secondary",
  },
  {
    title: "E-Commerce Engine",
    description: "Full-stack platform with custom CMS and Stripe integration",
    tech: ["Next.js", "Strapi", "PostgreSQL"],
    gradient: "from-secondary to-accent",
  },
  {
    title: "CMS Core API",
    description: "High-performance backend with Redis caching and JWT auth",
    tech: ["TypeScript", "Redis", "Discord API"],
    gradient: "from-accent to-success",
  },
];
