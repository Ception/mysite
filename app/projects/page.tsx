import dynamic from "next/dynamic";
import CustomButton from "../_components/ui/CustomButton";
import CustomTitle from "../_components/ui/CustomTitle";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import ShutterEffect from "../_components/utils/ShutterEffect";
import CodeBlinds from "../_components/utils/CodeBlinds";
import Link from "next/link";

export default function Projects() {
  const DynamicMouseIcon = dynamic(
    () => import("../_components/ui/MouseIcon"),
    {
      ssr: false,
    }
  );

  const CF_WORKERS_API_SNIPPET = `export default {
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

  const COMMERCE_CODE_SNIPPET = `export async function GET(req: NextRequest, { params }: any) {
  const API = process.env.API_URL;
  const AUTH_TOKEN = process.env.API_TOKEN;
  const name = params.product;

  try {
    const response = await fetch(
      {API}, // template literal for dynamic URL
      {
        headers: {
          Authorization: \`Bearer \${AUTH_TOKEN}\`,
        },
      }
    );

    if (!response.ok) {
      // throw new Error("Error fetching products");
    }

    const jsonResponse = await response.json();
    return new Response(JSON.stringify(jsonResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        cahe: "no-cache",
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

  const PROJECT_DETAILS = {
    "001": {
      title: "Advanced DDoS Mitigation & Global Server Optimization",
      description:
        "A serverless solution for robust DDoS protection and worldwide low-latency content delivery. Leverages Cloudflare Workers, CDN, and DNS, alongside Express.js, Linux, and Debian servers (where applicable). Includes HAProxy, Docker, Ansible, Prometheus, and Grafana for scalability, deployment, automation, and monitoring.",
      techStack: [
        "Cloudflare Workers",
        "Cloudflare Workers Wrangler API",
        "Cloudflare CDN",
        "Cloudflare DNS",
        "Express.js",
        "Linux",
        "Debian",
        "HAProxy",
        "Docker",
        "Ansible",
        "Prometheus",
        "Grafana",
      ],
    },
    "002": {
      title: "Full-Stack E-Commerce Platform with Custom CMS",
      description:
        "Comprehensive e-commerce platform featuring Next.js for SSR, SSG, and ISR, along with a custom CMS and Stripe payment integration.  Project resulted in a 35% sales increase for the client, improved customer engagement, and efficient site management.",
      techStack: [
        "React",
        "Next.js 14",
        "Tailwind CSS",
        "Strapi",
        "Stripe API",
        "Cloudflare Pages",
        "Vultr",
        "Linux",
      ],
      githubURL: "https://github.com/Ception/alohakush",
    },
    "003": {
      title: "Complete Custom CMS API",
      description:
        "Robust backend for content management systems, built with TypeScript, Node.js, and Express.js.  Features Redis caching, optimized MariaDB connectivity, secure JWT authentication, and rate limiting.",
      techStack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "Redis",
        "MariaDB",
        "JSON Web Tokens (JWT)",
      ],
      availability: "Available on Request",
    },
  };

  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center relative">
        <div className="h-full w-full flex flex-col" id="project-1">
          <div className="w-full flex-1">
            <div className="self-start pt-12 flex items-start">
              <CustomTitle
                text="001: Serverless DDOS Protection"
                textSize="xxl"
                dividerSize="md"
              />
            </div>
          </div>
          <div className="w-full flex-[3] flex flex-row">
            <div className="flex w-2/3 mt-[-124px]">
              <div className="overflow-y-auto max-h-[560px] self-center">
                <ShutterEffect reverse={true} backgroundReveal={true}>
                  <SyntaxHighlighter
                    language="javascript"
                    style={materialOceanic}
                    wrapLines={true}
                    wrapLongLines={true}
                    customStyle={{
                      fontSize: "0.9rem",
                      padding: "1rem",
                      margin: "1rem",
                    }}
                  >
                    {CF_WORKERS_API_SNIPPET}
                  </SyntaxHighlighter>
                </ShutterEffect>
              </div>
            </div>
            <div className="flex flex-col w-1/2 mt-[-96px]">
              <CodeBlinds>
                <div className="flex flex-col w-full h-full p-8">
                  <div className="self-end">
                    <CustomTitle
                      text="Overview"
                      textSize="sm"
                      dividerSize="sm"
                      reverse={true}
                    />
                  </div>
                  <div className="self-start mt-4">
                    <span className="text-2xl">
                      {PROJECT_DETAILS["001"].title}
                    </span>
                  </div>
                  <div className="self-center mt-4">
                    <span className="font-light">
                      {PROJECT_DETAILS["001"].description}
                    </span>
                    <div className="mt-4">
                      <span className="font-light">Tech Stack:</span>
                      <div className="mt-2">
                        <ul className="flex flex-wrap gap-2">
                          {PROJECT_DETAILS["001"].techStack.map((techItem) => (
                            <li
                              key={techItem}
                              className="inline-flex items-center justify-center bg-gray-200 text-gray-800 px-4 py-2 text-sm font-semibold transition-colors duration-200"
                            >
                              {techItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="self-end mt-4">
                    <Link href="contact">
                      <CustomButton
                        text="Request Access"
                        icon="SHARP_ARROW_OUT"
                        iconSize={32}
                      />
                    </Link>
                  </div>
                </div>
              </CodeBlinds>
            </div>
          </div>
        </div>
        <div className="fixed bottom-4 w-full flex justify-center items-center">
          <DynamicMouseIcon nextSectionId="project-2" />
        </div>
      </div>
      <div className="h-screen w-full flex flex-col justify-start items-start relative">
        <div className="h-full w-full flex flex-col" id="project-2">
          <div className="w-full flex-1">
            <div className="self-start pt-12 pr-12 flex items-start justify-end">
              <CustomTitle
                text="Complete E-Commerce :002"
                textSize="xxl"
                dividerSize="md"
                reverse={true}
              />
            </div>
          </div>
          <div className="w-full flex-[3] flex flex-row">
            <div className="flex flex-col w-1/2 mt-[-28px]">
              <CodeBlinds>
                <div className="flex flex-col w-full h-full p-8">
                  <div className="self-start ml-[-24px]">
                    <CustomTitle
                      text="Overview"
                      textSize="sm"
                      dividerSize="sm"
                    />
                  </div>
                  <div className="self-start mt-4 text-justify">
                    <span className="text-2xl">
                      {PROJECT_DETAILS["002"].title}
                    </span>
                  </div>
                  <div className="self-center mt-4">
                    <span className="font-light">
                      {PROJECT_DETAILS["002"].description}
                    </span>
                    <div className="mt-4">
                      <span className="font-light">Tech Stack:</span>
                      <div className="mt-2">
                        <ul className="flex flex-wrap gap-2">
                          {PROJECT_DETAILS["002"].techStack.map((techItem) => (
                            <li
                              key={techItem}
                              className="inline-flex items-center justify-center bg-gray-200  text-gray-800 px-4 py-2 text-sm font-semibold transition-colors duration-200"
                            >
                              {techItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="self-start mt-8">
                    <Link href="contact">
                      <CustomButton
                        text="Request Access"
                        icon="SHARP_ARROW_OUT"
                        iconSize={32}
                      />
                    </Link>
                  </div>
                </div>
              </CodeBlinds>
            </div>
            <div className="flex w-1/2 mt-[-124px]">
              <div className="overflow-y-auto max-h-[560px] self-center">
                <ShutterEffect reverse={true} backgroundReveal={true}>
                  <SyntaxHighlighter
                    language="javascript"
                    style={materialOceanic}
                    wrapLines={true}
                    wrapLongLines={true}
                    customStyle={{
                      fontSize: "0.9rem",
                      padding: "1rem",
                      margin: "1rem",
                    }}
                  >
                    {COMMERCE_CODE_SNIPPET}
                  </SyntaxHighlighter>
                </ShutterEffect>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
