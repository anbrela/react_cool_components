import { ListGrid } from "../../components/list_grid/ListGrid";
import { Search } from "../../components/search/Search";

export default {
  title: "Components/Search",
  component: Search,
};

const Template = (args) => <Search {...args} />;

export const Basic = Template.bind({});
