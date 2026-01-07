import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Search, 
  Code, 
  Palette, 
  Database, 
  FileText, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Server,
  Cpu,
  Globe,
  Layers,
  Terminal,
  Monitor
} from 'lucide-react';

// --- Types & Configuration ---

type ServiceType = 'ai' | 'seo' | 'web' | 'design' | 'erp';

interface WorkflowConfig {
  id: ServiceType;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  trigger: string;
  tools: { name: string; icon: React.ElementType }[];
  outputs: { title: string; subtitle: string; icon: React.ElementType }[];
}

const SERVICES: Record<ServiceType, WorkflowConfig> = {
  ai: {
    id: 'ai',
    title: "AI Automation",
    subtitle: "Intelligent automation solutions",
    icon: BrainCircuit,
    trigger: "Data Input Received",
    tools: [
      { name: "LLM Processing", icon: Cpu },
      { name: "Vector DB", icon: Database }
    ],
    outputs: [
      { title: "Automated Action", subtitle: "Execute Workflow", icon: Zap },
      { title: "Smart Response", subtitle: "Generated Output", icon: FileText }
    ]
  },
  seo: {
    id: 'seo',
    title: "SEO",
    subtitle: "Search engine optimization",
    icon: Search,
    trigger: "Site Audit Request",
    tools: [
      { name: "Keyword Data", icon: Globe },
      { name: "Rank Tracker", icon: FileText }
    ],
    outputs: [
      { title: "Optimization Plan", subtitle: "Meta & Structure", icon: Code },
      { title: "Analytics Report", subtitle: "Traffic Growth", icon: CheckCircle }
    ]
  },
  web: {
    id: 'web',
    title: "Website Development",
    subtitle: "Custom web solutions",
    icon: Monitor,
    trigger: "Project Scope Defined",
    tools: [
      { name: "Frontend Framework", icon: Code },
      { name: "API Integration", icon: Terminal }
    ],
    outputs: [
      { title: "Responsive UI", subtitle: "Pixel Perfect Build", icon: Layers },
      { title: "Deployment", subtitle: "Live Production", icon: Server }
    ]
  },
  design: {
    id: 'design',
    title: "Graphics Design",
    subtitle: "Creative visual design",
    icon: Palette,
    trigger: "Design Brief",
    tools: [
      { name: "Creative Suite", icon: Layers },
      { name: "Asset Library", icon: FileText }
    ],
    outputs: [
      { title: "Visual Concepts", subtitle: "Draft Iterations", icon: Monitor },
      { title: "Final Assets", subtitle: "Production Ready", icon: ArrowRight }
    ]
  },
  erp: {
    id: 'erp',
    title: "Custom ERP System",
    subtitle: "Enterprise resource planning",
    icon: Server,
    trigger: "System Event",
    tools: [
      { name: "Central Database", icon: Database },
      { name: "Auth Module", icon: CheckCircle }
    ],
    outputs: [
      { title: "Data Processing", subtitle: "Sync Modules", icon: Cpu },
      { title: "Report Generation", subtitle: "Business Insights", icon: FileText }
    ]
  }
};

// --- Components ---

const NodeCard = ({ 
  title, 
  subtitle, 
  icon: Icon, 
  isMain = false,
  isTrigger = false 
}: { 
  title: string; 
  subtitle?: string; 
  icon: React.ElementType; 
  isMain?: boolean;
  isTrigger?: boolean;
}) => (
  <div className={`
    relative z-10 flex items-center gap-3 rounded-2xl border bg-black px-4 py-3 transition-all duration-300
    ${isMain 
      ? 'border-white w-64 shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
      : 'border-neutral-800 w-52 md:w-56 hover:border-neutral-600'}
  `}>
    <div className={`
      flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border
      ${isTrigger ? 'border-neutral-700 bg-neutral-900 text-white' : ''}
      ${isMain ? 'border-white bg-white text-black' : 'border-neutral-800 bg-neutral-950 text-neutral-400'}
    `}>
      <Icon size={isMain ? 20 : 18} strokeWidth={1.5} />
    </div>
    <div className="flex flex-col overflow-hidden">
      <span className={`truncate text-sm font-medium ${isMain ? 'text-white' : 'text-neutral-200'}`}>
        {title}
      </span>
      {subtitle && (
        <span className="truncate text-xs text-neutral-500">
          {subtitle}
        </span>
      )}
    </div>
    
    {/* Connection Dots */}
    {!isTrigger && (
      <div className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-black ring-1 ring-neutral-700" />
    )}
    <div className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-black ring-1 ring-neutral-700" />
  </div>
);

const ToolNode = ({ label, icon: Icon }: { label: string; icon: React.ElementType }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 shadow-sm">
      <Icon size={16} className="text-neutral-400" />
    </div>
    <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">{label}</span>
  </div>
);

const SvgConnectorsDesktop = () => (
  <svg className="absolute inset-0 h-full w-full pointer-events-none z-0 overflow-visible">
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#525252" />
      </marker>
    </defs>
    
    {/* Trigger to Main */}
    <path 
      d="M 250 200 C 350 200, 350 200, 450 200" 
      fill="none" stroke="#525252" strokeWidth="1.5" strokeDasharray="6 4" markerEnd="url(#arrowhead)" 
      className="opacity-50"
    />

    {/* Main to Output Top */}
    <path 
      d="M 710 200 C 760 200, 760 120, 820 120" 
      fill="none" stroke="#525252" strokeWidth="1.5" strokeDasharray="6 4" markerEnd="url(#arrowhead)" 
      className="opacity-50"
    />

    {/* Main to Output Bottom */}
    <path 
      d="M 710 200 C 760 200, 760 280, 820 280" 
      fill="none" stroke="#525252" strokeWidth="1.5" strokeDasharray="6 4" markerEnd="url(#arrowhead)" 
      className="opacity-50"
    />

    {/* Main to Tool 1 */}
    <path 
      d="M 520 250 C 520 300, 480 300, 480 330" 
      fill="none" stroke="#333" strokeWidth="1.5" strokeDasharray="4 4" 
      className="opacity-40"
    />

    {/* Main to Tool 2 */}
    <path 
      d="M 640 250 C 640 300, 680 300, 680 330" 
      fill="none" stroke="#333" strokeWidth="1.5" strokeDasharray="4 4" 
      className="opacity-40"
    />
  </svg>
);

// --- Main Component ---

const WorkflowSection = () => {
  const [activeService, setActiveService] = useState<ServiceType>('ai');
  const data = SERVICES[activeService];

  return (
    // Main Container: h-screen fixes height, overflow-hidden stops scroll on desktop
    <div className="relative h-screen w-full overflow-hidden bg-black text-white font-sans selection:bg-neutral-800">
      
      {/* Navigation Tabs (Required to switch views) */}
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-center pt-6 pb-4 bg-gradient-to-b from-black to-transparent">
        <div className="flex flex-wrap justify-center gap-2 rounded-full border border-neutral-900 bg-neutral-950/80 px-2 py-2 backdrop-blur-md">
          {(Object.keys(SERVICES) as ServiceType[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveService(key)}
              className={`
                rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider transition-all
                ${activeService === key 
                  ? 'bg-white text-black' 
                  : 'text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900'}
              `}
            >
              {SERVICES[key].title}
            </button>
          ))}
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* Content Area - Centered vertically & horizontally */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        
        {/* --- DESKTOP LAYOUT --- */}
        <div className="hidden w-full max-w-6xl md:flex items-center justify-center">
          <div className="relative flex h-[450px] w-full items-center justify-between">
            
            <SvgConnectorsDesktop />

            {/* Trigger (Left) */}
            <div className="flex w-1/4 justify-start pl-12">
              <div className="relative group">
                <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-600 transition-colors group-hover:text-neutral-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors" />
                  Input
                </div>
                <NodeCard title={data.trigger} subtitle="Start Process" icon={Zap} isTrigger />
              </div>
            </div>

            {/* Center Processor */}
            <div className="relative flex w-1/2 flex-col items-center justify-center">
              <div className="relative z-20">
                <div className="mb-3 text-center text-[10px] font-bold uppercase tracking-widest text-neutral-600">
                  Core Service
                </div>
                <NodeCard title={data.title} subtitle={data.subtitle} icon={data.icon} isMain />
              </div>

              {/* Tools (Bottom) */}
              <div className="absolute top-[240px] flex w-full justify-center gap-20">
                {data.tools.map((tool, idx) => (
                  <ToolNode key={idx} label={tool.name} icon={tool.icon} />
                ))}
              </div>
            </div>

            {/* Outputs (Right) */}
            <div className="flex w-1/4 flex-col justify-center gap-16 pr-12">
              {data.outputs.map((output, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -top-5 left-0 text-[10px] font-bold uppercase tracking-widest text-neutral-600 transition-colors group-hover:text-neutral-400">
                    Output {idx + 1}
                  </div>
                  <NodeCard title={output.title} subtitle={output.subtitle} icon={output.icon} />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* --- MOBILE LAYOUT --- */}
        {/* Use overflow-y-auto only on mobile if needed, but hide scrollbar */}
        <div className="flex h-full w-full flex-col items-center justify-center gap-6 overflow-y-auto px-4 pb-20 pt-24 md:hidden no-scrollbar">
            
            {/* Trigger */}
            <div className="flex flex-col items-center">
              <span className="mb-1 text-[10px] uppercase tracking-widest text-neutral-600">Input</span>
              <NodeCard title={data.trigger} subtitle="Request" icon={Zap} isTrigger />
              <div className="h-6 w-[1px] border-l border-dashed border-neutral-700"></div>
            </div>

            {/* Main */}
            <div className="flex flex-col items-center">
              <NodeCard title={data.title} subtitle={data.subtitle} icon={data.icon} isMain />
              
              {/* Tools Compact Row */}
              <div className="my-4 flex gap-8">
                  {data.tools.map((tool, idx) => (
                      <ToolNode key={idx} label={tool.name} icon={tool.icon} />
                  ))}
              </div>
              
              <div className="h-6 w-[1px] border-l border-dashed border-neutral-700"></div>
            </div>

            {/* Outputs */}
            <div className="flex flex-col gap-3 w-full items-center">
                <span className="mb-1 text-[10px] uppercase tracking-widest text-neutral-600">Deliverables</span>
                {data.outputs.map((output, idx) => (
                    <NodeCard key={idx} title={output.title} subtitle={output.subtitle} icon={output.icon} />
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default WorkflowSection;