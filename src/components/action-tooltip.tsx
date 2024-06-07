import { Tooltip } from "antd";

interface ActionTooltipProps {
  label:string;
  children:React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  arrow?: true | false;
}
const ActionTooltip = ({
label,
children,
side,
arrow=undefined
}:ActionTooltipProps) =>{
  return(
    <Tooltip placement={side} arrow={arrow} title={label}>
      {children}
    </Tooltip>
  )
}

export default ActionTooltip;