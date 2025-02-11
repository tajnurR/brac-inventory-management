export interface NavModel {
  id: number;
  label: string;
  path: string;
  icon: string | null;
  componentName: string;
  parentMenuId: number | null;
  status: boolean;

}

