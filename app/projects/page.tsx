import dynamic from "next/dynamic";
import CustomButton from "../_components/ui/CustomButton";
import CustomTitle from "../_components/ui/CustomTitle";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import ShutterEffect from "../_components/utils/ShutterEffect";

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

  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center relative">
        <div className="h-full w-full flex flex-col" id="project-1">
          <div className="w-full flex-1">
            <div className="self-start pt-12 pl-12 flex items-center">
              <CustomTitle
                text="001: Serverless DDOS Protection"
                textSize="xxl"
                dividerSize="md"
              />
            </div>
          </div>
          <div className="w-full flex-[3] flex flex-row">
            <div className="flex w-2/3 mt-[-96px]">
              <div className="overflow-y-auto max-h-[560px] self-center border">
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
            <div className="flex w-1/2 border">
              <span className="text-4xl font-light">
                <CustomButton
                  text="Request Access"
                  icon="SHARP_ARROW_OUT"
                  iconSize={32}
                  buttonSize="xl"
                />
              </span>
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
            <div className="self-start pt-12 pl-12 flex items-center justify-between">
              <CustomTitle
                text="001: Serverless DDOS Protection"
                textSize="xxl"
                dividerSize="md"
              />
            </div>
          </div>
          <div className="w-full flex-[3] border">
            <div className="self-start">
              <span>text</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
