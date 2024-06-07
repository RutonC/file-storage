import { MenuProps } from "rc-menu";

type MenuItem = Required<MenuProps>['items'][number];


export function getItem(
  label?:React.ReactNode,
  key?:React.Key,
  icon?:React.ReactNode,
  children?:MenuItem[],
  type?:'group'
):any{
  return{
    label,
    key,
    icon,
    children,
    type
  }
}