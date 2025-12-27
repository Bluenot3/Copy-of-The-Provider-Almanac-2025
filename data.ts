
import { AlmanacData } from './types';

export const ALMANAC_DATA: AlmanacData = {
  providers: [
    {
      title: "OpenAI",
      slug: "openai",
      segment: "Lab",
      releaseTimeline: "GPT-5.2 (Dec 11, 2025)",
      models: [
        { name: "GPT-5", modality: "Text, Vision (input), Tool use", context: "~256k+", strength: "General intelligence, agent orchestration, long-running work", reasoning: true },
        { name: "GPT-5.1", modality: "Text, Vision", context: "~256k+", strength: "Stability + cost-efficiency, enterprise default", reasoning: true },
        { name: "GPT-5.2", modality: "Text, Vision, Tool use", context: "256k–1M", strength: "Flagship refinement, deep agentic tool-calling, memory, instruction persistence", reasoning: true },
        { name: "GPT-4.1", modality: "Text, Vision", context: "~128k", strength: "Reliability, structured output" },
        { name: "GPT-4o", modality: "Text, Vision, Audio", strength: "Ultra-low latency multimodal" },
        { name: "o1 / o1-pro", modality: "Text", strength: "Deliberate reasoning, math, planning", reasoning: true }
      ],
      advancements: [
        "Responses API becomes the primary surface (Agents > Chat)",
        "Sora: 2025 wide-rollout video generation. Production-era video synthesis.",
        "Sora 2: September 30, 2025 — Multi-shot narrative coherence, long-range temporal consistency, physics-aware motion",
        "GPT-Image-1.5 ('New ChatGPT Images'): December 16, 2025 — High-fidelity image synthesis with studio typography",
        "GPT-5-Codex: September 15, 2025 — Codex upgrades, GPT-5-Codex-Max (Nov 19, 2025), GPT-5.2-Codex (Dec 18, 2025) — Agentic coding model"
      ],
      missed: [
        "Transitioned fully from 'Chat' to 'Responses' architecture — AI that finishes the job",
        "Assistants API sunset announced (Aug 2026 deadline)",
        "Codex fully reabsorbed into GPT-5.x family",
        "Intensified focus on gigawatt-scale compute geography"
      ],
      pricing: [
        { model: "GPT-5.2", input: "$1.75", cached: "$0.17", output: "$14.00" },
        { model: "GPT-5.1", input: "$1.25", cached: "$0.12", output: "$10.00" },
        { model: "GPT-5", input: "$1.50", cached: "$0.15", output: "$12.00" },
        { model: "o1-pro", input: "$15.00", cached: "$1.50", output: "$60.00" },
        { model: "GPT-4o", input: "$2.50", cached: "$0.25", output: "$10.00" }
      ],
      investment: "Hiring surge (2,659 employees); CCO growth from 8 to 50+.",
      watch2026: ["GPT-6 Q2 2026", "Assistants API Sunset (Aug 2026)", "Responses API becomes standard"],
      platformUrl: "https://openai.com",
      zenVerdict: "OpenAI completed its transition from model provider → agent infrastructure company. Intelligence is no longer a feature; it is the civilizational substrate.",
      signalStrength: 98,
      traits: ["Agentic Hub", "Compute Dense", "Industrial"]
    },
    {
      title: "Anthropic",
      slug: "anthropic",
      segment: "Lab",
      releaseTimeline: "Claude 4.5 Opus (Nov 24, 2025)",
      models: [
        { name: "Claude 4.5 Opus", modality: "Text, Vision", context: "~200k+", strength: "High-stakes reasoning, compliance, long-context analysis", reasoning: true },
        { name: "Claude 4.5 Sonnet", modality: "Text, Vision", strength: "Most widely adopted coding + agent-building model of 2025", reasoning: true },
        { name: "Claude 4.5 Haiku", modality: "Text", strength: "Cost-efficient, fast inference tier" },
        { name: "Claude 3.7 Sonnet", modality: "Text, Vision", strength: "Hybrid reasoning, production workhorse", reasoning: true },
        { name: "Claude 3.5 Haiku", modality: "Text", strength: "Speed/Cost efficiency" }
      ],
      advancements: [
        "Computer Use: Models operating full GUIs (browser, OS, apps)",
        "Claude Code (Feb 2025): Autonomous terminal-based coding agent",
        "Model Context Protocol (MCP): Standardized how models access tools, files, databases, and services",
        "Constitutional AI: Safety-first reasoning layers"
      ],
      missed: [
        "Focused on 'Cognitive Stamina' over short-term hype",
        "Leading the trust-based enterprise AI market",
        "Defined how agents safely interact with the world"
      ],
      pricing: [
        { model: "Claude 4.5 Opus", input: "$15.00", cached: "$3.75", output: "$75.00" },
        { model: "Claude 4.5 Sonnet", input: "$3.00", cached: "$0.75", output: "$15.00" },
        { model: "Claude 4.5 Haiku", input: "$0.25", cached: "$0.06", output: "$1.25" },
        { model: "Claude 3.7 Sonnet", input: "$2.50", cached: "$0.63", output: "$12.50" }
      ],
      investment: "Enterprise safety auditing; AWS Bedrock strategic alignment.",
      watch2026: ["Sovereign Cloud nodes", "Agentic Governance", "MCP ecosystem expansion"],
      platformUrl: "https://anthropic.com",
      zenVerdict: "Anthropic didn't chase raw scale — it defined how agents safely interact with the world. Reliability is their primary differentiator in a world of hallucination.",
      signalStrength: 96,
      traits: ["Safety First", "High Fidelity", "Enterprise Safe", "MCP Standard"]
    },
    {
      title: "Google / DeepMind",
      slug: "google",
      segment: "Big Tech",
      releaseTimeline: "Gemini 3 Pro / Flash (Dec 2025)",
      models: [
        { name: "Gemini 3 Pro", modality: "Text, Vision, Audio", context: "1M+", strength: "Long-context reasoning, preview", reasoning: true },
        { name: "Gemini 3 Flash", modality: "Text, Vision, Audio", strength: "Real-time, low-latency reasoning, default across consumer products" },
        { name: "Gemini 2.5 Pro", modality: "Text, Vision", strength: "Enterprise reliability, mass adoption", reasoning: true },
        { name: "Gemini 2.5 Flash", modality: "Text, Vision", strength: "Fast inference, agent backends" }
      ],
      advancements: [
        "Gemini 3 Pro (Preview) — November 2025",
        "Gemini 3 Flash — December 2025 — Real-time reasoning, became default across consumer products",
        "Veo 3 / Veo 3.1 — Mid-to-late 2025 — Cinematic text-to-video with physics realism, integrated with Flow",
        "Imagen 4 — Google I/O (May 20, 2025) — GA in Gemini API (Aug 14-15, 2025), Imagen 4 Fast announced",
        "Jules: Autonomous repo maintenance agent",
        "Reasoning modes ('Deep Think') formalized",
        "Gemini embedded across: Search, Android, Workspace, NotebookLM (now a full AI workspace)"
      ],
      missed: [
        "Vibe coding: natural language app generation in AI Studio",
        "Complete Assistant-to-Gemini neural core transition",
        "Distribution + integration strategy over hype cycles"
      ],
      pricing: [
        { model: "Gemini 3 Pro", input: "$1.50", cached: "$0.15", output: "$12.00" },
        { model: "Gemini 3 Flash", input: "$0.10", cached: "$0.01", output: "$0.80" },
        { model: "Gemini 2.5 Pro", input: "$1.25", cached: "$0.12", output: "$10.00" },
        { model: "Gemini 2.5 Flash", input: "$0.075", cached: "$0.0075", output: "$0.60" }
      ],
      investment: "TPU v6 infrastructure; global Search AI Mode saturation.",
      watch2026: ["Assistant-less Android", "Gen-Search Revenue Model", "Veo 4"],
      platformUrl: "https://ai.google",
      zenVerdict: "Google won by distribution + integration, not by hype cycles. Ubiquitous intelligence substrate.",
      signalStrength: 97,
      traits: ["Distribution Moat", "TPU Native", "Multimodal", "Consumer Integration"]
    },
    {
      title: "xAI",
      slug: "xai",
      segment: "Lab",
      releaseTimeline: "Grok-3 (Late 2025)",
      models: [
        { name: "Grok-3", modality: "Text, Vision", strength: "Latest iteration, real-time intelligence" },
        { name: "Grok-2", modality: "Text, Vision input", strength: "Real-time X firehose data" },
        { name: "Grok-2 Mini", modality: "Text", strength: "Efficient tier" },
        { name: "Grok Reasoning", modality: "Text", strength: "Chain-of-thought optimized", reasoning: true }
      ],
      advancements: [
        "Blackwell Supercluster: 100k+ GPU coherence",
        "Live integration with X (Twitter) data",
        "Positioned as 'what's happening now' intelligence",
        "Massive GPU deployment disclosed publicly"
      ],
      missed: ["Direct integration into Tesla Optimus physical intelligence"],
      pricing: [
        { model: "Grok-3", input: "$2.00", cached: "$0.20", output: "$15.00" },
        { model: "Grok-2", input: "$1.00", cached: "$0.10", output: "$10.00" },
        { model: "Grok-2 Mini", input: "$0.50", cached: "$0.05", output: "$5.00" }
      ],
      investment: "Gigawatt-scale datacenter campus (Memphis).",
      zenVerdict: "xAI carved out real-time situational awareness as its moat. Compute is oil, and xAI is building the biggest refinery.",
      signalStrength: 94,
      traits: ["Live Data", "Compute Dense", "Unfiltered", "Real-time"],
      watch2026: ["Optimus V2 Integration", "Real-time Intelligence Platform"],
      metrics: [{ label: "Compute Rank", value: "#1", trend: 'up' }]
    },
    {
      title: "Mistral AI",
      slug: "mistral",
      segment: "Open Source",
      releaseTimeline: "Mistral Large 2 (Feb 2025)",
      models: [
        { name: "Mistral Large 2", modality: "Text", context: "128k+", strength: "EU compliance, reasoning, long context" },
        { name: "Codestral 2", modality: "Code", strength: "Competitive coding performance with Claude Sonnet, enterprise coding stack", reasoning: true },
        { name: "Codestral 25.08", modality: "Code", strength: "Enterprise coding positioning (Jul 30, 2025)" },
        { name: "Mixtral 8x22B", modality: "Text", behavior: "Efficiency MoE" }
      ],
      advancements: [
        "Aggressive pricing forced market-wide recalibration",
        "Strong enterprise uptake in EU-regulated environments",
        "Le Chat: Unified workspace for European enterprise",
        "Clear strategy: verticalized, regionally trusted AI"
      ],
      missed: ["Became the default 'Sovereign LLM' for EU governments"],
      pricing: [
        { model: "Mistral Large 2", input: "$2.00", cached: "$0.20", output: "$6.00" },
        { model: "Codestral 2", input: "$1.00", cached: "$0.10", output: "$3.00" },
        { model: "Mixtral 8x22B", input: "$0.50", cached: "$0.05", output: "$1.50" }
      ],
      investment: "Sovereign AI for EU; NVIDIA edge partnerships.",
      zenVerdict: "Mistral made cost, sovereignty, and performance coexist. Efficiency beats brute force in an energy-constrained world.",
      signalStrength: 92,
      traits: ["Efficiency", "Sovereign", "MoE Native", "EU Trusted"],
      watch2026: ["Vertical Legal Agents", "Edge Deployment"]
    },
    {
      title: "Cohere",
      slug: "cohere",
      segment: "Software",
      releaseTimeline: "Command R+ (2025)",
      models: [
        { name: "Command R+", modality: "Text", context: "128k+", strength: "RAG-optimized, tool-use" },
        { name: "Command R", modality: "Text", strength: "Efficiency RAG" },
        { name: "Embed v3", modality: "Embeddings", strength: "Multilingual vectors" }
      ],
      advancements: ["Enterprise RAG: Standardizing internal data interrogation."],
      missed: ["Focused on invisible reliability rather than generative flash."],
      pricing: [
        { model: "Command R+", input: "$3.00", cached: "$0.30", output: "$15.00" },
        { model: "Command R", input: "$0.50", cached: "$0.05", output: "$1.50" }
      ],
      investment: "Enterprise private cloud partnerships (Oracle/OCI).",
      zenVerdict: "Cohere is the quiet engine inside the enterprise vault.",
      signalStrength: 91,
      traits: ["RAG King", "Enterprise Focused", "Predictable"],
      watch2026: ["Autonomous Data Curators"]
    },
    {
      title: "Perplexity AI",
      slug: "perplexity",
      segment: "Strategic",
      releaseTimeline: "Sonar Reasoning (2025)",
      models: [
        { name: "Sonar Large", modality: "Text, Search", strength: "Fast research synthesis" },
        { name: "Sonar Reasoning", modality: "Text", strength: "Complex interrogation with sources", reasoning: true },
        { name: "Sonar Online", modality: "Text", behavior: "Live web grounding" }
      ],
      advancements: ["Search-to-Synthesis: Replacing browsing with interrogation."],
      missed: ["Became the primary research front-end for knowledge workers."],
      pricing: [
        { model: "Sonar Reasoning", input: "$1.00", cached: "$0.10", output: "$10.00" },
        { model: "Sonar Online", input: "$0.05", cached: "$0.005", output: "$1.00" }
      ],
      investment: "Retrieval infrastructure; high-fidelity citation logic.",
      zenVerdict: "Perplexity changed how we ask; now it's changing how we know.",
      signalStrength: 93,
      traits: ["Source Grounded", "Search Native", "Synthesis"],
      watch2026: ["Discovery Commerce Mode"]
    },
    {
      title: "Microsoft",
      slug: "microsoft",
      segment: "Big Tech",
      releaseTimeline: "Platform Layer (2025)",
      models: [
        { name: "GPT-5.x Integration", modality: "Text, Vision, Tool use", strength: "Deep integration across Windows, M365, Azure, GitHub" },
        { name: "Copilot Studio Agents", modality: "Text, Tools", strength: "Agent orchestration platform" }
      ],
      advancements: [
        "Copilot Studio Agents",
        "Copilot for Security GA",
        "OS-level agent hooks emerging",
        "GitHub Copilot Agent Mode + Spaces"
      ],
      missed: ["No standalone frontier model — won on distribution and surfaces"],
      pricing: [
        { model: "GPT-5.x (via Azure)", input: "$1.75", cached: "$0.17", output: "$14.00" },
        { model: "Copilot (bundled)", input: "Enterprise", cached: "N/A", output: "Subscription" }
      ],
      investment: "Deep GPT-5.x integration across all surfaces.",
      zenVerdict: "Microsoft didn't win models — it won surfaces.",
      signalStrength: 95,
      traits: ["Distribution", "OS Integration", "Enterprise Bundle"],
      watch2026: ["OS-Level Agents", "Windows AI Platform"]
    },
    {
      title: "NVIDIA",
      slug: "nvidia",
      segment: "Infrastructure",
      releaseTimeline: "Blackwell Architecture (2025)",
      models: [
        { name: "Blackwell Architecture", modality: "Infrastructure", strength: "DGX B200 systems, AI factories as national infrastructure" },
        { name: "DGX B200", modality: "Compute", strength: "Next-generation AI compute platform" }
      ],
      advancements: [
        "Blackwell architecture rollout",
        "DGX B200 systems deployment",
        "AI factories framed as national infrastructure",
        "Inference cost becomes a geopolitical variable"
      ],
      missed: ["Compute became policy"],
      pricing: [
        { model: "DGX B200 Systems", input: "Infrastructure", cached: "N/A", output: "Enterprise" }
      ],
      investment: "AI factories as national infrastructure. Compute as geopolitical variable.",
      zenVerdict: "In 2025, compute became policy. NVIDIA is the physical layer of intelligence.",
      signalStrength: 100,
      traits: ["Infrastructure", "Physical Layer", "Compute Policy", "Geopolitical"],
      watch2026: ["Next-Gen Architecture", "National AI Infrastructure"]
    }
  ],
  openWeights: [
    {
      title: "Meta (Llama)",
      slug: "meta",
      segment: "Open Source",
      releaseTimeline: "Llama 4 Scout (Apr 5, 2025)",
      models: [
        { name: "Llama 4 Scout", modality: "Text, Vision native", context: "128k+", strength: "Open frontier baseline, native multimodality, massive context windows" },
        { name: "Llama 4 Maverick", modality: "Text, Vision", strength: "Native multimodality, competitive reasoning with closed models" },
        { name: "Llama 3.3 70B", modality: "Text", strength: "Efficiency/Performance peak" },
        { name: "Llama 3.1 405B", modality: "Text", context: "128k", strength: "The 'Open' lighthouse" },
        { name: "Llama Guard 3", modality: "Safety", strength: "Moderation standard" }
      ],
      advancements: [
        "Proved 'Open' can contest the frontier on parity",
        "Llama became default open model across AWS, Azure, Bedrock, Vertex",
        "Heavy investment in on-device and edge inference",
        "Positioned as 'infrastructure, not product'"
      ],
      missed: ["Zuckerberg's compute moat is now an industry barrier"],
      pricing: [
        { model: "Llama 4 Scout", input: "Free/Open", cached: "N/A", output: "Compute Only" },
        { model: "Llama 3.1 405B", input: "$0.15", cached: "N/A", output: "$0.60" },
        { model: "Llama 3.3 70B", input: "$0.10", cached: "N/A", output: "$0.40" }
      ],
      investment: "Open source as defensive strategy; massive GPU hoarding.",
      zenVerdict: "Meta proved open weights can be frontier-grade at global scale. The lighthouse of the open intelligence ecosystem.",
      signalStrength: 98,
      traits: ["Compute Moat", "Open Weights", "Ecosystem", "Edge Native"],
      watch2026: ["Llama-as-a-Service Edge", "On-Device Inference"]
    },
    {
      title: "DeepSeek",
      slug: "deepseek",
      segment: "Open Source",
      releaseTimeline: "DeepSeek-R1 (Jan 20, 2025)",
      models: [
        { name: "DeepSeek-R1", modality: "Text", strength: "Reasoning-optimized (O1 parity), R1-0528 Update (May 28, 2025) — Reduced hallucinations, native JSON + function calling", reasoning: true },
        { name: "DeepSeek-V3", modality: "Text", strength: "Efficiency-first architecture" },
        { name: "DeepSeek-Coder-V2", modality: "Code", strength: "Math/Logic efficiency, dominant open code baseline" }
      ],
      advancements: [
        "Shocked the industry with reasoning parity at radically lower cost",
        "Forced price compression across the API market",
        "Proved frontier reasoning does not require US hyperscalers",
        "R2 delay highlighted compute and export constraints"
      ],
      missed: ["Became the preferred private backend for global developers"],
      pricing: [
        { model: "DeepSeek-R1", input: "$0.55", cached: "$0.14", output: "$2.19" },
        { model: "DeepSeek-V3", input: "$0.14", cached: "$0.07", output: "$0.28" },
        { model: "DeepSeek-Coder-V2", input: "$0.14", cached: "$0.07", output: "$0.28" }
      ],
      investment: "Architectural efficiency R&D.",
      zenVerdict: "DeepSeek redefined the economics of reasoning. Architecture beats brute force spend. DeepSeek is the proof.",
      signalStrength: 95,
      traits: ["Efficiency", "Disruptor", "Reasoning", "Cost Leader"],
      watch2026: ["Multimodal R2", "Reasoning Breakthroughs"]
    },
    {
      title: "Alibaba (Qwen)",
      slug: "qwen",
      segment: "Open Source",
      releaseTimeline: "Qwen3-Coder (Jul 22-23, 2025)",
      models: [
        { name: "Qwen3-Coder", modality: "Code", context: "Huge context", strength: "Agentic coding framing, launched Jul 22-23, 2025" },
        { name: "Qwen 2.5 72B", modality: "Text", strength: "Multilingual high performance" },
        { name: "Qwen 2.5 VL", modality: "Vision-Language", strength: "Vision specialized" },
        { name: "Qwen Long", modality: "Text", strength: "Long-context specialist" }
      ],
      advancements: [
        "Default stack choice for Asian and global multi-lingual builders",
        "Qwen3-Coder: Agentic coding with huge context windows"
      ],
      missed: ["Dominant choice for high-end on-prem enterprise deployments"],
      pricing: [
        { model: "Qwen 2.5 72B", input: "$0.50", cached: "$0.05", output: "$2.00" },
        { model: "Qwen3-Coder", input: "$0.75", cached: "$0.08", output: "$3.00" }
      ],
      investment: "Alibaba Cloud distribution; massive industrial variants.",
      zenVerdict: "The reliable workhorse of the open weights global ecosystem.",
      signalStrength: 91,
      traits: ["Multilingual", "Industrial", "Global Reach", "On-Prem"],
      watch2026: ["Vertical MFG Agents", "Enterprise Deployment"]
    },
    {
      title: "Stability AI",
      slug: "stability",
      segment: "Open Source",
      releaseTimeline: "SD 3.5 (2025)",
      models: [
        { name: "Stable Diffusion 3.5", modality: "Image", strength: "The open backbone for fine-tuning, API migration from SD3.0 (Apr 17, 2025)" },
        { name: "Stable Cascade", modality: "Image", strength: "Architecture efficiency" },
        { name: "Stable Video Diffusion", modality: "Video", strength: "Open temporal motion, open research backbone" },
        { name: "SD3 Medium (AMD)", modality: "Image", behavior: "On-device inference (AMD partnership)" }
      ],
      advancements: [
        "Sustaining the open pipeline for LoRAs and ControlNets",
        "SD 3.0 → 3.5 API migration (Apr 17, 2025)",
        "On-device SD3 Medium (AMD partnership) — notable 2025 deployment milestone"
      ],
      missed: ["Infrastructure for the 'Small Lab' visual revolution"],
      pricing: [
        { model: "SD 3.5 API", input: "N/A", cached: "N/A", output: "$0.01 / Gen" },
        { model: "Stable Video", input: "N/A", cached: "N/A", output: "$0.05 / Gen" }
      ],
      investment: "Open-weight diffusion ecosystem.",
      zenVerdict: "The open creative pipeline is held together by Stability.",
      signalStrength: 88,
      traits: ["Diffusion Core", "Open Pipeline", "Creator Native", "On-Device"],
      watch2026: ["Real-time Open Video", "Edge Inference"]
    }
  ],
  vision: {
    images: [
      {
        name: "Midjourney V7",
        description: "The aesthetic gold standard for cinematic direction. Default release Jun 17, 2025.",
        excelledAt: ["Texture", "Style Consistency", "Taste", "Cinematic Direction"],
        whyItMattered: "Taste at scale—the designers' choice for final work. Draft Mode + Omni Reference additions.",
        releaseDate: "Apr 3, 2025 (Default: Jun 17, 2025)",
        platformUrl: "https://midjourney.com",
        definingTrait: "Aesthetic Excellence"
      },
      {
        name: "OpenAI 4o Image Generation",
        description: "OpenAI's image generation model announced March 25, 2025.",
        excelledAt: ["Fidelity", "Coherence", "Multimodal Integration"],
        whyItMattered: "Integrated image generation into the GPT ecosystem.",
        releaseDate: "Mar 25, 2025",
        platformUrl: "https://openai.com",
        definingTrait: "Ecosystem Integration"
      },
      {
        name: "GPT Image 1.5 (New ChatGPT Images)",
        description: "High-fidelity image synthesis with studio typography.",
        excelledAt: ["Typography", "Studio Quality", "Brand Consistency"],
        whyItMattered: "Brought production-grade image generation to ChatGPT interface.",
        releaseDate: "Dec 16, 2025",
        platformUrl: "https://openai.com",
        definingTrait: "Studio Typography"
      },
      {
        name: "Adobe Firefly Image Model 4",
        description: "Adobe's own image models with partner integration.",
        excelledAt: ["Brand Safety", "Commercial Use", "Integration"],
        whyItMattered: "Adobe adds partner image models (OpenAI + Google + Flux) into Firefly's model picker.",
        releaseDate: "Apr 24, 2025",
        platformUrl: "https://firefly.adobe.com",
        definingTrait: "Commercial Safe"
      },
      {
        name: "Adobe Firefly Image Model 4 Ultra",
        description: "Premium tier of Firefly Image Model 4.",
        excelledAt: ["Highest Quality", "Brand Safety", "Professional Workflows"],
        whyItMattered: "Enterprise-grade image generation with full commercial rights.",
        releaseDate: "Apr 24, 2025",
        platformUrl: "https://firefly.adobe.com",
        definingTrait: "Enterprise Grade"
      },
      {
        name: "Google Imagen 4",
        description: "Google's high-quality image generation model family.",
        excelledAt: ["Realism", "Detail", "Multimodal"],
        whyItMattered: "Imagen 4 launch at Google I/O (May 20, 2025), GA in Gemini API (Aug 14-15, 2025).",
        releaseDate: "May 20, 2025 (GA: Aug 14-15, 2025)",
        platformUrl: "https://ai.google",
        definingTrait: "Gemini Integration"
      },
      {
        name: "Google Imagen 4 Fast",
        description: "Fast inference variant of Imagen 4.",
        excelledAt: ["Speed", "Cost Efficiency", "Real-time Generation"],
        whyItMattered: "Brought high-quality image generation to real-time workflows.",
        releaseDate: "Aug 14-15, 2025",
        platformUrl: "https://ai.google",
        definingTrait: "Real-time"
      },
      {
        name: "Ideogram 2a",
        description: "Text-to-image with strong typography capabilities.",
        excelledAt: ["Typography", "Text Rendering", "Consistency"],
        whyItMattered: "Early 2025 release (Feb 27, 2025) that improved text rendering significantly.",
        releaseDate: "Feb 27, 2025",
        platformUrl: "https://ideogram.ai",
        definingTrait: "Typography Leader"
      },
      {
        name: "Ideogram 3.0",
        description: "Major upgrade with latest iteration May 1, 2025.",
        excelledAt: ["Quality", "Typography", "Layout", "Brand Consistency"],
        whyItMattered: "Continued leadership in typography and layout generation.",
        releaseDate: "Mar 26, 2025 (Latest: May 1, 2025)",
        platformUrl: "https://ideogram.ai",
        definingTrait: "Layout Mastery"
      },
      {
        name: "FLUX.2",
        description: "Studio-grade consistency with multi-reference control.",
        excelledAt: ["Typography", "Layout", "Brand Consistency", "Multi-Reference"],
        whyItMattered: "Brought studio repeatability to the open ecosystem. FLUX.2 announced/released Nov 25, 2025. Flux 1.1 Pro appears in Adobe Firefly partner model lineup.",
        releaseDate: "Nov 25, 2025",
        platformUrl: "https://blackforestlabs.ai",
        definingTrait: "Studio Repeatability"
      }
    ],
    videos: [
      {
        name: "OpenAI Sora",
        description: "OpenAI's production-era video generation. Public/Studio rollout early-mid 2025.",
        excelledAt: ["Physics", "Coherence", "Narrative", "Temporal Consistency"],
        whyItMattered: "Sora ended the debate. After 2025, AI video was no longer experimental — it was a production medium. The reference standard against which all other video models were judged.",
        releaseDate: "Early-Mid 2025 (Public)",
        platformUrl: "https://openai.com/sora",
        tier: "Tier 0",
        definingTrait: "Production Standard"
      },
      {
        name: "OpenAI Sora 2",
        description: "Multi-shot narrative coherence, long-range temporal consistency, physics-aware motion.",
        excelledAt: ["Multi-shot Narrative", "Temporal Consistency", "Physics-Aware Motion", "Storyboard Pipelines"],
        whyItMattered: "The step from 'silent clip' to 'cinematic storyteller'. Prompt → storyboard → final cut pipelines.",
        releaseDate: "Sep 30, 2025",
        platformUrl: "https://openai.com/sora",
        tier: "Tier 0",
        definingTrait: "Cinematic Storytelling"
      },
      {
        name: "Runway Gen-4",
        description: "Production-grade video-to-video with character and scene locking.",
        excelledAt: ["Character Locking", "Scene Consistency", "Video-to-Video", "Timeline Workflows"],
        whyItMattered: "Runway became the Adobe of AI video — not the most magical, but the most usable.",
        releaseDate: "Mar 31, 2025",
        platformUrl: "https://runwayml.com",
        tier: "Tier 1",
        definingTrait: "Production Usability"
      },
      {
        name: "Runway Gen-4.5",
        description: "Enhanced Gen-4 with improved shot-to-shot consistency.",
        excelledAt: ["Shot Consistency", "Production Workflows", "Timeline Editing"],
        whyItMattered: "Further solidified Runway's position as the professional video production platform.",
        releaseDate: "Dec 1, 2025",
        platformUrl: "https://runwayml.com",
        tier: "Tier 1",
        definingTrait: "Professional Platform"
      },
      {
        name: "Google Veo 2",
        description: "Google's cinematic video generation engine.",
        excelledAt: ["Cinematic Motion", "Realism", "Physics Coherence"],
        whyItMattered: "Early 2025 release establishing Google's presence in video generation.",
        releaseDate: "Early 2025",
        platformUrl: "https://deepmind.google",
        tier: "Tier 1",
        definingTrait: "Cinematic Realism"
      },
      {
        name: "Google Veo 3 / Veo 3.1",
        description: "High-motion cinematic engine integrated with Flow (Google's AI video editor).",
        excelledAt: ["Cinematic Camera Motion", "Physically Coherent Environments", "Text-to-Scene Fidelity", "Vertical Video"],
        whyItMattered: "Veo positioned Google as the cinematic realism counterweight to Sora. Visuals designed for global scale platforms.",
        releaseDate: "Mid-to-Late 2025",
        platformUrl: "https://deepmind.google",
        tier: "Tier 1",
        definingTrait: "Cinematic Counterweight"
      },
      {
        name: "Luma Ray 3",
        description: "Video generation with focus on quality and coherence.",
        excelledAt: ["Quality", "Coherence", "Realism"],
        whyItMattered: "Established Luma as a key player in video generation.",
        releaseDate: "2025",
        platformUrl: "https://lumalabs.ai",
        tier: "Tier 2",
        definingTrait: "Quality Focus"
      },
      {
        name: "Luma Modify",
        description: "Preserve original footage while altering environments, lighting, objects. AI as editor, not generator.",
        excelledAt: ["Video Editing", "Environment Alteration", "Original Preservation", "Lighting Control"],
        whyItMattered: "This blurred the line between VFX and reality. Actors, scenes, and performances could be preserved while worlds changed.",
        releaseDate: "Late 2025",
        platformUrl: "https://lumalabs.ai",
        tier: "Tier 2",
        definingTrait: "Reality Editing"
      },
      {
        name: "Pika 2.0",
        description: "Fast iteration, short-form video dominance.",
        excelledAt: ["Speed", "Iteration", "Short-form", "Meme Generation"],
        whyItMattered: "Pika owned speed and culture, even if it didn't own cinematic depth.",
        releaseDate: "2025",
        platformUrl: "https://pika.art",
        tier: "Tier 2",
        definingTrait: "Speed & Culture"
      },
      {
        name: "Pika 2.1 / 2.2",
        description: "Rapid cadence updates with improved quality and features.",
        excelledAt: ["Fast Iteration", "Creator Workflows", "Social Content"],
        whyItMattered: "Continued dominance in creator-first, meme, social workflows.",
        releaseDate: "2025 (Rapid Cadence)",
        platformUrl: "https://pika.art",
        tier: "Tier 2",
        definingTrait: "Creator Native"
      },
      {
        name: "Stable Video Diffusion",
        description: "Open research backbone for video diffusion.",
        excelledAt: ["Open Research", "Fine-tuning Base", "Lab Use"],
        whyItMattered: "Stable Video Diffusion remained the open research substrate, even as closed models dominated production.",
        releaseDate: "2025 (Continued Development)",
        platformUrl: "https://stability.ai",
        tier: "Tier 3",
        definingTrait: "Open Research"
      },
      {
        name: "Alibaba Tongyi Wanxiang (Video)",
        description: "Competitive text-to-video with strong adoption in Asia.",
        excelledAt: ["Text-to-Video", "Regional Adoption", "Quality"],
        whyItMattered: "Non-Western video models reached credible parity for many use cases.",
        releaseDate: "2025 (Updated Throughout)",
        platformUrl: "https://tongyi.aliyun.com",
        tier: "Tier 3",
        definingTrait: "Regional Leader"
      }
    ]
  },
  coding: [
    {
      name: "OpenAI GPT-5-Codex",
      description: "Codex upgrades announced as part of GPT-5 family (Sep 15, 2025; updated Sep 23).",
      excelledAt: ["Code Generation", "GPT-5 Integration", "Agentic Coding"],
      whyItMattered: "Modern Codex incarnation helps explain why this category exploded in 2025.",
      releaseDate: "Sep 15, 2025",
      platformUrl: "https://openai.com",
      definingTrait: "GPT-5 Native",
      cost: "Integrated with GPT-5 pricing"
    },
    {
      name: "OpenAI GPT-5-Codex-Max",
      description: "Long-running project-scale tier for enterprise coding workflows.",
      excelledAt: ["Large Codebases", "Project-Scale", "Enterprise"],
      whyItMattered: "Brought agentic coding to long-running, complex projects.",
      releaseDate: "Nov 19, 2025",
      platformUrl: "https://openai.com",
      definingTrait: "Project-Scale",
      cost: "Premium tier pricing"
    },
    {
      name: "OpenAI GPT-5.2-Codex",
      description: "Explicit 'agentic coding model' release with deep integration.",
      excelledAt: ["Agentic Coding", "Tool Use", "Deep Integration"],
      whyItMattered: "Flagship agentic coding model explicitly positioned for autonomous engineering.",
      releaseDate: "Dec 18, 2025",
      platformUrl: "https://openai.com",
      definingTrait: "Agentic Coding",
      cost: "Premium tier pricing"
    },
    {
      name: "Anthropic Claude Code",
      description: "Autonomous terminal-based coding agent released Feb 2025.",
      excelledAt: ["Terminal CLI", "Autonomous Engineering", "Code Generation"],
      whyItMattered: "Terminal-centric agentic coding tool inseparable from 2025 code-gen revolution.",
      releaseDate: "Feb 2025",
      platformUrl: "https://anthropic.com",
      definingTrait: "Terminal Native",
      cost: "Integrated with Claude pricing"
    },
    {
      name: "Anthropic Claude 3.7 Sonnet",
      description: "Hybrid reasoning model heavily used for coding (Feb 24, 2025).",
      excelledAt: ["Hybrid Reasoning", "Coding", "Production"],
      whyItMattered: "First major 2025 coding shock from Anthropic. Hybrid reasoning for code generation.",
      releaseDate: "Feb 24, 2025",
      platformUrl: "https://anthropic.com",
      definingTrait: "Hybrid Reasoning",
      cost: "Sonnet pricing tier"
    },
    {
      name: "Google Gemini 3 Pro + Flash (Code Assist)",
      description: "Explicitly available for code generation + agent mode in Gemini Code Assist.",
      excelledAt: ["Code Generation", "Agent Mode", "Gemini Integration"],
      whyItMattered: "Gemini 3 also lands in Gemini CLI for terminal-centric coding workflows.",
      releaseDate: "Dec 17, 2025",
      platformUrl: "https://ai.google",
      definingTrait: "Gemini Code Assist",
      cost: "Gemini 3 pricing"
    },
    {
      name: "Mistral Codestral 25.08",
      description: "Enterprise coding stack positioning (Jul 30, 2025).",
      excelledAt: ["Enterprise", "Coding Stack", "MoE Architecture"],
      whyItMattered: "European enterprise coding solution with competitive performance.",
      releaseDate: "Jul 30, 2025",
      platformUrl: "https://mistral.ai",
      definingTrait: "Enterprise EU",
      cost: "Codestral pricing tier"
    },
    {
      name: "Mistral Codestral 2",
      description: "Competitive coding performance with Claude Sonnet, enterprise focus.",
      excelledAt: ["Coding Performance", "Claude Parity", "Enterprise"],
      whyItMattered: "Release date Oct 16, 2025 (documented via Vertex partner model docs).",
      releaseDate: "Oct 16, 2025",
      platformUrl: "https://mistral.ai",
      definingTrait: "Performance Leader",
      cost: "Codestral 2 pricing"
    },
    {
      name: "Alibaba Qwen3-Coder",
      description: "Agentic coding framing with huge context windows.",
      excelledAt: ["Agentic Coding", "Huge Context", "Enterprise"],
      whyItMattered: "Launched Jul 22-23, 2025. Agentic coding with massive context capability.",
      releaseDate: "Jul 22-23, 2025",
      platformUrl: "https://qwenlm.com",
      definingTrait: "Massive Context",
      cost: "Qwen pricing tier"
    },
    {
      name: "DeepSeek-Coder-V2",
      description: "Key open code model baseline with repo + ecosystem distribution.",
      excelledAt: ["Open Source", "Code Generation", "Ecosystem"],
      whyItMattered: "Dominant open code model baseline (initial release mid-2024, stayed dominant through 2025).",
      releaseDate: "Mid-2024 (2025 Adoption)",
      platformUrl: "https://deepseek.com",
      definingTrait: "Open Baseline",
      cost: "DeepSeek pricing"
    },
    {
      name: "Cursor",
      description: "The IDE that defined 'Vibe Coding' and repo-wide awareness.",
      excelledAt: ["Repo Awareness", "Refactors", "Flow", "Vibe Coding"],
      whyItMattered: "Created a daily dependency for elite engineering teams.",
      platformUrl: "https://cursor.sh",
      definingTrait: "Vibe Coding",
      cost: "Subscription"
    },
    {
      name: "Bolt.new",
      description: "Prompt-to-deployed-app accelerator for instant MVPs.",
      excelledAt: ["Speed", "Zero Setup", "Momentum", "Instant Deployment"],
      whyItMattered: "Lowered the barrier from idea to production significantly.",
      platformUrl: "https://bolt.new",
      definingTrait: "Instant MVPs"
    }
  ],
  agents: [
    {
      name: "n8n",
      description: "Developer-first agent orchestration for complex logic.",
      excelledAt: ["Tool Chaining", "Self-hosting", "Ownership", "Complex Logic"],
      whyItMattered: "The power-user default for business agent automation.",
      platformUrl: "https://n8n.io",
      definingTrait: "Self-Hosted Power"
    },
    {
      name: "CrewAI",
      description: "Multi-agent framework for orchestrating roles.",
      excelledAt: ["Role-based Design", "Multi-step Reasoning", "Agent Swarms"],
      whyItMattered: "Standardized the 'agent swarm' architecture.",
      platformUrl: "https://crewai.com",
      definingTrait: "Agent Swarms"
    }
  ],
  apps: [
    {
      name: "NotebookLM",
      description: "Source-grounded AI workspace that listens to documents. Now a full AI workspace.",
      excelledAt: ["Zero Hallucination", "Research", "Audio", "Source Grounding"],
      whyItMattered: "The cognitive prosthetic for serious knowledge workers.",
      platformUrl: "https://notebooklm.google",
      definingTrait: "Source-Grounded"
    },
    {
      name: "Websim",
      description: "Generative simulation engine for speculative UI.",
      excelledAt: ["Interface Simulation", "Visual Thinking", "Speculative Design"],
      whyItMattered: "A thinking instrument to see ideas before code.",
      platformUrl: "https://websim.ai",
      definingTrait: "Visual Thinking"
    }
  ],
  audio: [
    {
      name: "OpenAI Realtime",
      description: "Ultra-low latency speech-to-speech engine.",
      excelledAt: ["Emotional Nuance", "Prosody", "Latency", "Speech-to-Speech"],
      whyItMattered: "The foundation for high-fidelity companions.",
      platformUrl: "https://openai.com/api",
      definingTrait: "Real-time Speech"
    },
    {
      name: "Suno",
      description: "Turning song creation into cultural behavior.",
      excelledAt: ["Song Structure", "Vocal Quality", "Music Generation"],
      whyItMattered: "Creativity without instrumentation barriers.",
      platformUrl: "https://suno.ai",
      definingTrait: "Music Creation"
    }
  ],
  cloud: []
};
