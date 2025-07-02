import {uniqueId} from "lodash";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  IconAdjustmentsHorizontal,
  IconWashMachine,
  IconUsers,
  IconCash,
  IconGraph,
} from "@tabler/icons-react";

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconGraph,
    href: "/",
    // chip: "New",
    // chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Transactions",
    icon: IconCash,
    href: "/transactions",
  },
  {
    id: uniqueId(),
    title: "Customers",
    icon: IconUsers,
    href: "/customers",
  },
  {
    navlabel: true,
    subheader: "Other",
  },
  {
    id: uniqueId(),
    title: "Machines",
    icon: IconWashMachine,
    href: "/machines",
  },
  {
    id: uniqueId(),
    title: "Settings",
    icon: IconAdjustmentsHorizontal,
    href: "/settings",
  },
];

export default Menuitems;
