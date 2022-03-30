import { ListGrid } from "../../components/list_grid/ListGrid";
import { CardList } from "../../components/card_list/CardList";

export default {
  title: "Lists/CardList",
  component: CardList,
};

const Template = (args) => <CardList {...args} />;

export const ImageList = Template.bind({});

ImageList.args = {
  data: [
    {
      id: 1,
      title: "Artistic paint",
      color: "text-white",
      img: "https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 2,
      title: "Darkest bar in LA.",
      color: "text-white",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 3,
      title: "The coolest mountains",
      color: "text-white",
      img: "https://images.pexels.com/photos/1724888/pexels-photo-1724888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },

    {
      id: 4,
      title: "Playing with forms",
      color: "text-black",
      img: "https://images.pexels.com/photos/3678799/pexels-photo-3678799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ],
};
