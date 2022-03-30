import { ListGrid } from "../../components/list_grid/ListGrid";

export default {
  title: "Lists/Table",
  component: ListGrid,
};

const data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

const Template = (args) => <ListGrid {...args} />;

export const WithPagination = Template.bind({});

WithPagination.args = {
  data: data,
  columns: [
    {
      id: 0,
      header: "Name",
      value: (item) => item.name,
      sortable: true,
    },
    {
      id: 1,
      header: "Email",
      value: (item) => item.email,
      sortable: false,
    },

    {
      id: 2,
      header: "Address",
      value: (item) => item.address.street,
      sortable: true,
    },
    {
      id: 3,
      header: "Phone",
      value: (item) => item.phone,
      sortable: false,
    },

    {
      id: 4,
      header: "Website",
      value: (item) => item.website,
      sortable: true,
    },
  ],
  total: 100,
  messages: {
    title: "My list",
    gridEmpty: "No data",
    showing: "Showing",
    from: "from",
    elements: "Elements",
  },
  pagination: {
    page: 1,
    elementsByPage: 10,
    optionsByPage: [10, 20],
  },
  color: "black",
};

export const WithoutPagination = Template.bind({});

WithoutPagination.args = {
  data: data,
  columns: [
    {
      id: 0,
      header: "Name",
      value: (item) => item.name,
      sortable: true,
    },
    {
      id: 1,
      header: "Email",
      value: (item) => item.email,
      sortable: false,
    },

    {
      id: 2,
      header: "Address",
      value: (item) => item.address.street,
      sortable: true,
    },
    {
      id: 3,
      header: "Phone",
      value: (item) => item.phone,
      sortable: false,
    },

    {
      id: 4,
      header: "Website",
      value: (item) => item.website,
      sortable: true,
    },
  ],
  total: 3,
  messages: {
    title: "My list",
    gridEmpty: "No data",
    showing: "Showing",
    from: "from",
    elements: "Elements",
  },
  color: "black",
};

export const WithCheckbox = Template.bind({});

WithCheckbox.args = {
  data: data,
  columns: [
    {
      id: 0,
      header: "Name",
      value: (item) => item.name,
      sortable: true,
    },
    {
      id: 1,
      header: "Email",
      value: (item) => item.email,
      sortable: false,
    },

    {
      id: 2,
      header: "Address",
      value: (item) => item.address.street,
      sortable: true,
    },
    {
      id: 3,
      header: "Phone",
      value: (item) => item.phone,
      sortable: false,
    },

    {
      id: 4,
      header: "Website",
      value: (item) => item.website,
      sortable: true,
    },
  ],
  total: data.length,
  messages: {
    title: "My list",
    gridEmpty: "No data",
    showing: "Showing",
    from: "from",
    elements: "Elements",
  },
  color: "black",
  checboxVisible: true,
  defaultSelected: [1],
};
