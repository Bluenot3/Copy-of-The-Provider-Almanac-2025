
import { AlmanacData } from './types';

export const ALMANAC_DATA: AlmanacData = {
  providers: [
    {
      title: "OpenAI",
      slug: "openai",
      segment: "Lab",
      releaseTimeline: "GPT-5.2 (Dec 2025)",
      models: [
        { name: "GPT-5", modality: "Text, Vision (input), Tool use", context: "~256k+", strength: "General intelligence, agent orchestration", reasoning: true },
        { name: "GPT-5.1", modality: "Text, Vision", context: "~256k+", strength: "Improved multi-step reasoning", reasoning: true },
        { name: "GPT-5.1-auto", modality: "Text, Vision", behavior: "Dynamic reasoning vs speed routing" },
        { name: "GPT-5.2", modality: "Text, Vision, Tool use", context: "256k–1M", strength: "Best-in-class CoT internally", reasoning: true },
        { name: "GPT-4.1", modality: "Text, Vision", context: "~128k", strength: "Reliability, structured output" },
        { name: "GPT-4o", modality: "Text, Vision, Audio", strength: "Ultra-low latency multimodal" },
        { name: "o1 / o1-pro", modality: "Text", strength: "Deliberate reasoning, math, planning", reasoning: true }
      ],
      advancements: [
        "Sora: 2025 wide-rollout video generation.",
        "GPT-Image-1.5: High-fidelity image synthesis with studio typography.",
        "Responses API: The core primitive for agentic system deployment."
      ],
      missed: [
        "Transitioned fully from 'Chat' to 'Responses' architecture.",
        "Intensified focus on gigawatt-scale compute geography."
      ],
      pricing: [
        { model: "GPT-5.2", input: "$1.75", cached: "$0.17", output: "$14.00" },
        { model: "GPT-5.1", input: "$1.25", cached: "$0.12", output: "$10.00" },
        { model: "o1-pro", input: "$15.00", cached: "$1.50", output: "$60.00" },
        { model: "GPT-4o", input: "$2.50", cached: "$0.25", output: "$10.00" }
      ],
      investment: "Hiring surge (2,659 employees); CCO growth from 8 to 50+.",
      watch2026: ["GPT-6 Q2 2026", "Assistants API Sunset"],
      platformUrl: "https://openai.com",
      zenVerdict: "Intelligence is no longer a feature; it is the civilizational substrate.",
      signalStrength: 98,
      traits: ["Agentic Hub", "Compute Dense", "Industrial"]
    },
    {
      title: "Google DeepMind",
      slug: "google",
      segment: "Big Tech",
      releaseTimeline: "Gemini 3 (2025)",
      models: [
        { name: "Gemini 3 Pro", modality: "Text, Vision, Audio", context: "1M+", strength: "Long-context reasoning", reasoning: true },
        { name: "Gemini 3 Flash", modality: "Text, Vision, Audio", strength: "Speed + Cost optimization" },
        { name: "Gemini 2.5 Pro", modality: "Text, Vision", strength: "Enterprise reliability", reasoning: true },
        { name: "Gemini 2.5 Flash", modality: "Text, Vision", strength: "Fast inference, agent backends" }
      ],
      advancements: [
        "Veo 3.1: Cinematic text-to-video with physics realism.",
        "Nano-Banana Pro: Lightweight, high-quality image generation.",
        "Jules: Autonomous software maintenance agent."
      ],
      missed: [
        "Vibe coding: natural language app generation in AI Studio.",
        "Complete Assistant-to-Gemini neural core transition."
      ],
      pricing: [
        { model: "Gemini 3 Pro", input: "$1.50", cached: "$0.15", output: "$12.00" },
        { model: "Gemini 3 Flash", input: "$0.10", cached: "$0.01", output: "$0.80" },
        { model: "Gemini 2.5 Pro", input: "$1.25", cached: "$0.12", output: "$10.00" }
      ],
      investment: "TPU v6 infrastructure; global Search AI Mode saturation.",
      watch2026: ["Assistant-less Android", "Gen-Search Revenue Model"],
      platformUrl: "https://ai.google",
      zenVerdict: "Google doesn't just innovate; it saturates the digital landscape.",
      signalStrength: 97,
      traits: ["Distribution Moat", "TPU Native", "Multimodal"]
    },
    {
      title: "Anthropic",
      slug: "anthropic",
      segment: "Lab",
      releaseTimeline: "Claude 4.5 (2025)",
      models: [
        { name: "Claude 4.5 Opus", modality: "Text, Vision", context: "~200k+", strength: "Writing, reasoning, alignment", reasoning: true },
        { name: "Claude 4 Sonnet", modality: "Text, Vision", strength: "Balanced performance" },
        { name: "Claude 3.7 Sonnet", modality: "Text, Vision", strength: "Production workhorse" },
        { name: "Claude 3.5 Haiku", modality: "Text", strength: "Speed/Cost efficiency" }
      ],
      advancements: [
        "Computer Use: Operating desktop GUIs natively.",
        "Claude Code: Terminal CLI for autonomous engineering.",
        "Constitutional AI: Safety-first reasoning layers."
      ],
      missed: [
        "Focused on 'Cognitive Stamina' over short-term hype.",
        "Leading the trust-based enterprise AI market."
      ],
      pricing: [
        { model: "Opus 4.5", input: "$15.00", cached: "$3.75", output: "$75.00" },
        { model: "Sonnet 4.5", input: "$3.00", cached: "$0.75", output: "$15.00" },
        { model: "Haiku 3.5", input: "$0.25", cached: "$0.06", output: "$1.25" }
      ],
      investment: "Enterprise safety auditing; AWS Bedrock strategic alignment.",
      watch2026: ["Sovereign Cloud nodes", "Agentic Governance"],
      platformUrl: "https://anthropic.com",
      zenVerdict: "Reliability is their primary differentiator in a world of hallucination.",
      signalStrength: 96,
      traits: ["Safety First", "High Fidelity", "Enterprise Safe"]
    },
    {
      title: "xAI",
      slug: "xai",
      segment: "Lab",
      releaseTimeline: "Grok-3 (Sep 2025)",
      models: [
        { name: "Grok-2 / Grok-2 Vision", modality: "Text, Vision input", strength: "Real-time X firehose data" },
        { name: "Grok Reasoning", modality: "Text", strength: "Chain-of-thought optimized", reasoning: true }
      ],
      advancements: [
        "Blackwell Supercluster: 100k+ GPU coherence.",
        "Unfiltered Reasoning: Positioned as a 'Truth' engine."
      ],
      missed: ["Direct integration into Tesla Optimus physical intelligence."],
      pricing: [
        { model: "Grok-3", input: "$2.00", cached: "$0.20", output: "$15.00" },
        { model: "Grok-2", input: "$1.00", cached: "$0.10", output: "$10.00" }
      ],
      investment: "Gigawatt-scale datacenter campus (Memphis).",
      zenVerdict: "Compute is oil, and xAI is building the biggest refinery.",
      signalStrength: 94,
      traits: ["Live Data", "Compute Dense", "Unfiltered"],
      watch2026: ["Optimus V2 Integration"],
      metrics: [{ label: "Compute Rank", value: "#1", trend: 'up' }]
    },
    {
      title: "Mistral AI",
      slug: "mistral",
      segment: "Open Source",
      releaseTimeline: "Mistral Large 2 (2025)",
      models: [
        { name: "Mistral Large 2", modality: "Text", strength: "EU compliance, reasoning" },
        { name: "Codestral", modality: "Code", strength: "MoE specialized for engineering" },
        { name: "Mixtral 8x22B", modality: "Text", behavior: "Efficiency MoE" }
      ],
      advancements: [
        "Constraint-aware intelligence: Running on tighter budgets.",
        "Le Chat: Unified workspace for European enterprise."
      ],
      missed: ["Became the default 'Sovereign LLM' for EU governments."],
      pricing: [
        { model: "Large 2", input: "$2.00", cached: "$0.20", output: "$6.00" },
        { model: "Codestral", input: "$1.00", cached: "$0.10", output: "$3.00" }
      ],
      investment: "Sovereign AI for EU; NVIDIA edge partnerships.",
      zenVerdict: "Efficiency beats brute force in a energy-constrained world.",
      signalStrength: 92,
      traits: ["Efficiency", "Sovereign", "MoE Native"],
      watch2026: ["Vertical Legal Agents"]
    },
    {
      title: "Cohere",
      slug: "cohere",
      segment: "Software",
      releaseTimeline: "Command R+ (2025)",
      models: [
        { name: "Command R+", modality: "Text", strength: "RAG-optimized, tool-use" },
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
    }
  ],
  openWeights: [
    {
      title: "Meta (Llama)",
      slug: "meta",
      segment: "Open Source",
      releaseTimeline: "Llama 4 (2025)",
      models: [
        { name: "Llama 4 Scout", modality: "Text, Vision native", strength: "Open frontier baseline" },
        { name: "Llama 3.3 70B", modality: "Text", strength: "Efficiency/Performance peak" },
        { name: "Llama 3.1 405B", modality: "Text", context: "128k", strength: "The 'Open' lighthouse" },
        { name: "Llama Guard 3", modality: "Safety", strength: "Moderation standard" }
      ],
      advancements: ["Proved 'Open' can contest the frontier on parity."],
      missed: ["Zuckerberg's compute moat is now an industry barrier."],
      pricing: [
        { model: "Llama 4 405B", input: "Free/Open", cached: "N/A", output: "Compute Only" },
        { model: "Llama 3.1", input: "$0.15", cached: "N/A", output: "$0.60" }
      ],
      investment: "Open source as defensive strategy; massive GPU hoarding.",
      zenVerdict: "Meta is the lighthouse of the open intelligence ecosystem.",
      signalStrength: 98,
      traits: ["Compute Moat", "Open Weights", "Ecosystem"],
      watch2026: ["Llama-as-a-Service Edge"]
    },
    {
      title: "DeepSeek",
      slug: "deepseek",
      segment: "Open Source",
      releaseTimeline: "DeepSeek-R1 (Jan 2025)",
      models: [
        { name: "DeepSeek-R1", modality: "Text", strength: "Reasoning-optimized (O1 parity)", reasoning: true },
        { name: "DeepSeek-V2", modality: "Text", strength: "Architecture efficiency" },
        { name: "DeepSeek-Coder", modality: "Code", strength: "Math/Logic efficiency" }
      ],
      advancements: ["Disrupted the scaling narrative by proving efficiency."],
      missed: ["Became the preferred private backend for global developers."],
      pricing: [
        { model: "DeepSeek-R1", input: "$0.55", cached: "$0.14", output: "$2.19" },
        { model: "Coder V2", input: "$0.14", cached: "$0.07", output: "$0.28" }
      ],
      investment: "Architectural efficiency R&D.",
      zenVerdict: "Architecture beats brute force spend. DeepSeek is the proof.",
      signalStrength: 95,
      traits: ["Efficiency", "Disruptor", "Reasoning"],
      watch2026: ["Multimodal R2"]
    },
    {
      title: "Alibaba (Qwen)",
      slug: "qwen",
      segment: "Open Source",
      releaseTimeline: "Qwen 2.5 (Early 2025)",
      models: [
        { name: "Qwen 2.5 72B", modality: "Text", strength: "Multilingual high performance" },
        { name: "Qwen 2.5 VL", modality: "Vision-Language", strength: "Vision specialized" },
        { name: "Qwen Long", modality: "Text", strength: "Long-context specialist" }
      ],
      advancements: ["Default stack choice for Asian and global multi-lingual builders."],
      missed: ["Dominant choice for high-end on-prem enterprise deployments."],
      pricing: [
        { model: "Qwen 2.5 72B", input: "$0.50", cached: "$0.05", output: "$2.00" }
      ],
      investment: "Alibaba Cloud distribution; massive industrial variants.",
      zenVerdict: "The reliable workhorse of the open weights global ecosystem.",
      signalStrength: 91,
      traits: ["Multilingual", "Industrial", "Global Reach"],
      watch2026: ["Vertical MFG Agents"]
    },
    {
      title: "Stability AI",
      slug: "stability",
      segment: "Open Source",
      releaseTimeline: "SDXL / Stable Video (2025)",
      models: [
        { name: "SDXL / SD 3.5", modality: "Image", strength: "The open backbone for fine-tuning" },
        { name: "Stable Cascade", modality: "Image", strength: "Architecture efficiency" },
        { name: "Stable Video Diffusion", modality: "Video", strength: "Open temporal motion" }
      ],
      advancements: ["Sustaining the open pipeline for LoRAs and ControlNets."],
      missed: ["Infrastructure for the 'Small Lab' visual revolution."],
      pricing: [
        { model: "SD 3.5 API", input: "N/A", cached: "N/A", output: "$0.01 / Gen" }
      ],
      investment: "Open-weight diffusion ecosystem.",
      zenVerdict: "The open creative pipeline is held together by Stability.",
      signalStrength: 88,
      traits: ["Diffusion Core", "Open Pipeline", "Creator Native"],
      watch2026: ["Real-time Open Video"]
    }
  ],
  vision: {
    images: [
      {
        name: "Midjourney V7",
        description: "The aesthetic gold standard for cinematic direction.",
        excelledAt: ["Texture", "Style Consistency", "Taste"],
        whyItMattered: "Taste at scale—the designers' choice for final work.",
        releaseDate: "Apr 2025",
        platformUrl: "https://midjourney.com"
      },
      {
        name: "FLUX.2",
        description: "Studio-grade consistency with multi-reference control.",
        excelledAt: ["Typography", "Layout", "Brand Consistency"],
        whyItMattered: "Brought studio repeatability to the open ecosystem.",
        releaseDate: "Nov 2025",
        platformUrl: "https://blackforestlabs.ai"
      }
    ],
    videos: [
      {
        name: "Sora 2",
        description: "OpenAI's sound-era video engine with synced dialogue.",
        excelledAt: ["Physics", "Coherence", "Audio-Sync"],
        whyItMattered: "The step from 'silent clip' to 'cinematic storyteller'.",
        releaseDate: "Dec 2025",
        platformUrl: "https://openai.com/sora"
      },
      {
        name: "Veo 3.1",
        description: "Google's high-motion cinematic engine.",
        excelledAt: ["Motion Coherence", "Vertical Video", "Realism"],
        whyItMattered: "Visuals designed for global scale platforms.",
        releaseDate: "Oct 2025",
        platformUrl: "https://deepmind.google"
      }
    ]
  },
  coding: [
    {
      name: "Cursor",
      description: "The IDE that defined 'Vibe Coding' and repo-wide awareness.",
      excelledAt: ["Repo Awareness", "Refactors", "Flow"],
      whyItMattered: "Created a daily dependency for elite engineering teams.",
      platformUrl: "https://cursor.sh"
    },
    {
      name: "Bolt.new",
      description: "Prompt-to-deployed-app accelerator for instant MVPs.",
      excelledAt: ["Speed", "Zero Setup", "Momentum"],
      whyItMattered: "Lowered the barrier from idea to production significantly.",
      platformUrl: "https://bolt.new"
    }
  ],
  agents: [
    {
      name: "n8n",
      description: "Developer-first agent orchestration for complex logic.",
      excelledAt: ["Tool Chaining", "Self-hosting", "Ownership"],
      whyItMattered: "The power-user default for business agent automation.",
      platformUrl: "https://n8n.io"
    },
    {
      name: "CrewAI",
      description: "Multi-agent framework for orchestrating roles.",
      excelledAt: ["Role-based Design", "Multi-step Reasoning"],
      whyItMattered: "Standardized the 'agent swarm' architecture.",
      platformUrl: "https://crewai.com"
    }
  ],
  apps: [
    {
      name: "NotebookLM",
      description: "Source-grounded AI workspace that listens to documents.",
      excelledAt: ["Zero Hallucination", "Research", "Audio"],
      whyItMattered: "The cognitive prosthetic for serious knowledge workers.",
      platformUrl: "https://notebooklm.google"
    },
    {
      name: "Websim",
      description: "Generative simulation engine for speculative UI.",
      excelledAt: ["Interface Simulation", "Visual Thinking"],
      whyItMattered: "A thinking instrument to see ideas before code.",
      platformUrl: "https://websim.ai"
    }
  ],
  audio: [
    {
      name: "OpenAI Realtime",
      description: "Ultra-low latency speech-to-speech engine.",
      excelledAt: ["Emotional Nuance", "Prosody", "Latency"],
      whyItMattered: "The foundation for high-fidelity companions.",
      platformUrl: "https://openai.com/api"
    },
    {
      name: "Suno",
      description: "Turning song creation into cultural behavior.",
      excelledAt: ["Song Structure", "Vocal Quality"],
      whyItMattered: "Creativity without instrumentation barriers.",
      platformUrl: "https://suno.ai"
    }
  ],
  cloud: []
};
