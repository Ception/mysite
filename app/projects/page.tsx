"use client";

import { useRef, useEffect } from "react";
import CustomButton from "../_components/ui/CustomButton";
import CustomTitle from "../_components/ui/CustomTitle";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import ShutterEffect from "../_components/utils/ShutterEffect";
import Link from "next/link";
import MouseIcon from "../_components/ui/MouseIcon";

export default function Projects() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-slide');
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.filter((ref): ref is HTMLDivElement => ref !== null).forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const CF_WORKERS_SNIPPET = `
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const responseHeaders = { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' };
    const RATE_LIMIT = 1; // rate limit per IP
    const TIME_WINDOW = 60; // Time window in seconds (60 seconds)

    try {
      // Retrieve the client's IP address from the 'x-real-ip' header
      const ip = request.headers.get('x-real-ip');

      if (!ip) {
        return new Response('IP address not found', { status: 400, headers: responseHeaders });
      }

      // Retrieve the current count for this IP from KV store
      const countResult = await env.RATE_LIMIT_STORE.get(ip);
      let count = countResult ? parseInt(countResult) : 0;

      // Check if the rate limit has been exceeded
      if (count >= RATE_LIMIT) {
        return new Response('Rate limit exceeded', { status: 429, headers: responseHeaders });
      }

      // Increment the count and update the KV store
      await env.RATE_LIMIT_STORE.put(ip, (count + 1).toString(), { expirationTtl: TIME_WINDOW });

      // Existing VM selection logic
      const { country, city } = request.cf;
      const vmIpsArray = env.VMS.split(',');

      const selectedVmIps = selectVmsBasedOnLocation(vmIpsArray, { country, city });

      const vmStatuses: VMStatus[] = await Promise.all(
        selectedVmIps.map((ip: string) =>
          checkLatency(ip).catch((error) => {
            console.log("Error checking latency for IP: ", ip);
            return { ip, latency: Infinity, available: false };
          })
        )
      );

      const availableVms = vmStatuses.filter((vm) => vm.available && vm.latency !== Infinity);

      if (availableVms.length === 0) {
        console.error('All VMs are unavailable. Retrying after a delay...');
        return new Response('No available servers', { status: 503, headers: responseHeaders });
      }

      const bestVm = availableVms.reduce((prev, curr) => (prev.latency < curr.latency ? prev : curr));

      return new Response(bestVm.ip, { headers: responseHeaders });
    } catch (error) {
      if (error instanceof Error) {
        console.error("Unexpected error: ", error.message);
      } else {
        console.error("Unexpected error: ", error);
      }
      return new Response('An unexpected error occurred', { status: 500, headers: responseHeaders });
    }
  },
};`;

  const COMMERCE_CODE_SNIPPET = `
export async function GET(req: NextRequest, { params }: any) {
  const API = process.env.API_URL;
  const AUTH_TOKEN = process.env.API_TOKEN;
  const name = params.product;

  try {
    const response = await fetch(
      \`\${API}\`, // template literal for dynamic URL
      {
        headers: {
          Authorization: \`Bearer \${AUTH_TOKEN}\`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching products");
    }

    const jsonResponse = await response.json();
    return new Response(JSON.stringify(jsonResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        cache: "no-cache",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching products" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}`;

  const API_CODE_SNIPPET = `
const router = Router();
router.get("/verify-discord", async (req: Request, res: Response) => {
  try {
    const code = req.query.code;
    if (typeof code !== "string") {
      return res
        .status(400)
        .send({ success: false, message: "Invalid or missing code" });
    }
    const isValidCode = await verifyDiscordCode(code);
    if (!isValidCode) {
      return res.status(401).send({ success: false, message: "Invalid code" });
    } else {
      const getRolesClaimed = await getClaimedDiscordCode(code);
      if (!getRolesClaimed) {
        return res.status(200).send({
          success: false,
          message: "Roles already claimed",
        });
      }
      const testerRole = await getDiscordAccountID(code);
      await claimDiscordCode(code);
      return res.status(200).send({
        success: true,
        message: "Code verified successfully",
        role: testerRole,
      });
    }
  } catch (err) {
    console.error("Error in /verify-discord:", err);
    return res
      .status(500)
      .send({ success: false, message: "An unknown error occurred" });
  }
});
export default router;`;

  const PROJECT_DETAILS = {
    "001": {
      title: "Advanced DDoS Mitigation & Global Server Optimization",
      description: "A serverless solution for robust DDoS protection and worldwide low-latency content delivery.",
      techStack: ["Cloudflare Workers", "CDN", "DNS", "Express.js", "Linux", "Docker", "Ansible", "Prometheus", "Grafana"],
      codeSnippet: CF_WORKERS_SNIPPET,
    },
    "002": {
      title: "Full-Stack E-Commerce Platform with Custom CMS",
      description: "Comprehensive e-commerce platform featuring Next.js for SSR, SSG, and ISR, with custom CMS and Stripe integration.",
      techStack: ["React", "Next.js 14", "Tailwind CSS", "Strapi", "Stripe API", "Cloudflare Pages"],
      codeSnippet: COMMERCE_CODE_SNIPPET,
    },
    "003": {
      title: "Complete Custom CMS API",
      description: "Robust backend for content management systems with Redis caching, MariaDB connectivity, and JWT authentication.",
      techStack: ["TypeScript", "Node.js", "Express.js", "Redis", "MariaDB", "JWT"],
      codeSnippet: API_CODE_SNIPPET,
    },
  };

  return (
    <div className="min-h-screen w-full overflow-y-auto text-white pt-12 md:pt-12">
      <div className="container mx-auto px-4 md:px-[70px] pt-20 md:pt-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 md:mb-24 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            Featured Projects
          </span>
        </h1>
        
        {Object.entries(PROJECT_DETAILS).map(([key, project], index) => (
          <div
            key={key}
            ref={(el) => { projectRefs.current[index] = el; }}
            className={`mb-32 opacity-0 transition-all duration-1000 ease-out ${
              index % 2 === 0 ? 'translate-x-[-50px]' : 'translate-x-[50px]'
            }`}
          >
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}>
              <div className="w-full md:w-1/2">
<CustomTitle
  text={`${key}: ${project.title}`}
  textSize="xl"
  reverse={index % 2 !== 0}
/>
                <p className="mt-4 text-gray-300">{project.description}</p>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Tech Stack:</h3>
                  <ul className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-cyan-300 rounded-full text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href="/contact">
                    <CustomButton
                      text="Request Access"
                      icon="SHARP_ARROW_OUT"
                      iconSize={24}
                    />
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <ShutterEffect reverse={index % 2 !== 0} backgroundReveal={true}>
                    <SyntaxHighlighter
                      language="javascript"
                      style={materialOceanic}
                      wrapLines={true}
                      wrapLongLines={true}
                      customStyle={{
                        fontSize: "0.9rem",
                        padding: "1.5rem",
                        margin: "0",
                        borderRadius: "0.5rem",
                        maxHeight: "400px",
                        overflow: "auto"
                      }}
                    >
                      {project.codeSnippet}
                    </SyntaxHighlighter>
                  </ShutterEffect>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <MouseIcon nextSectionId="project-2" />
      </div>
    </div>
  );
}