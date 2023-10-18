import { useCallback } from "react";
import ReactFlow, {
    ReactFlowProps,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  ConnectionLineType,
  Background,
  Controls,
  FitViewOptions,
} from "reactflow";
import { DisplayNodeDefault, DisplayNodeInput, DisplayNodeOutput, DisplayNodeWithout } from "./DisplayNode";
import { Node, NodeTypes } from "./types";
import { CardNodeDefault, CardNodeInput, CardNodeOutput, CardNodeWithout } from "./CardNode";

const nodeTypes: NodeTypes = {
  displayNode: DisplayNodeDefault,
  displayNodeInput: DisplayNodeInput,
  displayNodeOutput: DisplayNodeOutput,
  displayNodeWithout: DisplayNodeWithout,
  cardNode: CardNodeDefault,
  cardNodeInput: CardNodeInput,
  cardNodeOutput: CardNodeOutput,
  cardNodeWithout: CardNodeWithout
};

const defaultEdgeOptions = {
  animated: true,
  type: "smoothstep",
};

export default function Flow({
  fitView,
  fitViewOptions,
  initialNodes,
  initialEdges,
  controls,
  controlsClassName,
  ...rest
}: ReactFlowProps & {
  initialNodes?: Node[];
  initialEdges?: Edge[];
  controls?: boolean;
  fitView?: boolean;
  fitViewOptions?: FitViewOptions;
  controlsClassName?: string;
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes as any);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges || []);
  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="h-full">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView={fitView ?? true}
        fitViewOptions={
          fitViewOptions ?? {
          duration: 1000,
          padding: 0.5,
        }}
        nodeOrigin={[0.5, 0.5]}
        proOptions={{
          hideAttribution: true,
        }}
        {...rest}
      >
        <Background />
        {controls && <Controls className={controlsClassName} />}
      </ReactFlow>
    </div>
  );
}
