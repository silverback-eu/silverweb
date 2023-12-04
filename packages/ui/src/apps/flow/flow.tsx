import { useCallback } from "react";
import type {
  ReactFlowProps,
  Connection,
  Edge,
  FitViewOptions,
} from "reactflow";
import ReactFlowBox, {
  useNodesState,
  useEdgesState,
  addEdge,
  ConnectionLineType,
  Background,
  Controls,
} from "reactflow";
import {
  CardNodeDefault,
  CardNodeInput,
  CardNodeOutput,
  CardNodeWithout,
} from "./nodes/card";
import {
  DisplayNodeDefault,
  DisplayNodeInput,
  DisplayNodeOutput,
  DisplayNodeWithout,
} from "./nodes/display";
import type { Node, NodeTypes } from "./types";
import "reactflow/dist/style.css";

const nodeTypes: NodeTypes = {
  displayNode: DisplayNodeDefault,
  displayNodeInput: DisplayNodeInput,
  displayNodeOutput: DisplayNodeOutput,
  displayNodeWithout: DisplayNodeWithout,
  cardNode: CardNodeDefault,
  cardNodeInput: CardNodeInput,
  cardNodeOutput: CardNodeOutput,
  cardNodeWithout: CardNodeWithout,
};

const defaultEdgeOptions = {
  animated: true,
  type: "smoothstep",
};

export function Flow({
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
}): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any -- 'Cause the Node type is dynamic and the nodes have different props ts doesn't like it.
  const [nodes, , onNodesChange] = useNodesState(initialNodes as any);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges || []);
  const onConnect = useCallback(
    (params: Connection | Edge) => {
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  return (
    <div className="h-full">
      <ReactFlowBox
        connectionLineType={ConnectionLineType.SmoothStep}
        defaultEdgeOptions={defaultEdgeOptions}
        edges={edges}
        fitView={fitView ?? true}
        fitViewOptions={
          fitViewOptions ?? {
            duration: 1000,
            padding: 0.5,
          }
        }
        nodeOrigin={[0.5, 0.5]}
        nodeTypes={nodeTypes}
        nodes={nodes}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        proOptions={{
          hideAttribution: true,
        }}
        {...rest}
      >
        <Background />
        {controls ? <Controls className={controlsClassName} /> : null}
      </ReactFlowBox>
    </div>
  );
}
