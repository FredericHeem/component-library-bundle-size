import { createContext, type Context } from "@grucloud/bau-ui/context";
// @ts-ignore
import globalStyle from "@grucloud/bau-ui/globalStyle/globalStyle";

import accordion, { Accordion } from "@grucloud/bau-ui/accordion";
import alert from "@grucloud/bau-ui/alert";
import badge from "@grucloud/bau-ui/badge";
import breadcrumbs, {
  type BreadcrumbsProps,
} from "@grucloud/bau-ui/breadcrumbs";
import button from "@grucloud/bau-ui/button";
import checkbox from "@grucloud/bau-ui/checkbox";
import chip from "@grucloud/bau-ui/chip";
import input from "@grucloud/bau-ui/input";
import modal from "@grucloud/bau-ui/modal";
import select from "@grucloud/bau-ui/select";
import spinner from "@grucloud/bau-ui/spinner";
import createSwitch from "@grucloud/bau-ui/switch";
import tabs, { Tabs } from "@grucloud/bau-ui/tabs";
import tooltip from "@grucloud/bau-ui/tooltip";

const context = createContext();

const colorPalette = [
  ["neutral", { h: "0", s: "0%", l: "20%" }],
  ["primary", { h: "230", s: "48%", l: "20%" }],
  ["secondary", { h: "338", s: "100%", l: "20%" }],
  ["success", { h: "120", s: "100%", l: "20%" }],
  ["info", { h: "194", s: "80%", l: "20%" }],
  ["warning", { h: "43", s: "100%", l: "20%" }],
  ["danger", { h: "358", s: "95%", l: "20%" }],
];

globalStyle(context, { colorPalette });
const app = (context: Context) => {
  const { bau, css } = context;

  const { section, div, h1, span, p, h2, main, header, footer, label } =
    bau.tags;

  const accordionDefs: Accordion[] = [
    {
      name: "Item1",
      Header: () => "Item 1",
      Content: () => div(p("Item 1 Content")),
    },
    {
      name: "Item2",
      Header: () => "Item 2",
      Content: () => div(p("Item 2 Content")),
    },
    {
      name: "Item3",
      Header: () => "Item 3",
      Content: () => div(p("Item 3 content")),
    },
  ];

  const Accordion = accordion(context, { accordionDefs });
  const Alert = alert(context);

  const Badge = badge(context);

  const breadcrumbs1: BreadcrumbsProps = {
    items: [
      {
        href: "/",
        name: "\u2302",
      },
      { name: "Dir" },
      { href: "/dir/subdir", name: "SubDir" },
    ],
  };

  const Breadcrumbs = breadcrumbs(context);
  const Button = button(context);
  const Checkbox = checkbox(context);
  const Chip = chip(context);

  const Input = input(context);

  const Modal = modal(context);

  const Content = () =>
    main(
      Array(10)
        .fill("")
        .map((_, k) => p(k + 1, ". Some text here" /*faker.lorem.paragraph()*/))
    );

  const MyModal = (props: any) => {
    const modalEl = Modal(
      { id: "my-dialog", ...props },
      header("Header"),
      Content(),
      footer(
        Button(
          {
            ...props,
            variant: "outline",
            onclick: () => {
              modalEl.close();
            },
          },
          "Cancel"
        ),
        Button(
          {
            ...props,
            variant: "solid",
            onclick: () => {
              modalEl.close();
            },
          },
          "OK"
        )
      )
    );
    return modalEl;
  };

  const Select = select(context);

  const selectOptions = [
    { code: "AD", label: "Andorra", phone: "376" },
    {
      code: "AE",
      label: "United Arab Emirates",
      phone: "971",
    },
    { code: "AF", label: "Afghanistan", phone: "93" },
  ];

  const SelectOption = (option: any) =>
    div(
      {
        class: css`
          display: flex;
          justify-content: space-between;
          gap: 0.5rem;
        `,
      },
      span(option.label),
      span(option.code)
    );

  const Spinner = spinner(context);

  const Switch = createSwitch(context);

  const tabDefs: Tabs = [
    {
      name: "Tab1",
      Header: () => div("TAB"),
      Content: () => div(p("My Tab 1 Content")),
    },
    {
      name: "Tab2",
      Header: () => div("TAB 2"),
      Content: () => div(p("My tab 2 Content")),
    },
    {
      name: "Tab Disabled",
      disabled: true,
      Header: () => div("Tab Disabled"),
      Content: () => div(p("My tab Disabled")),
    },
  ];

  const Tabs = tabs(context, { tabDefs });
  const TooltipContent = () => span("My tooltip");
  const Tooltip = tooltip(context);

  const components = [
    {
      name: "Accordion",
      Item: (props: any) => Accordion({ ...props }),
    },
    {
      name: "Alert",
      Item: (props: any) => Alert({ ...props }, `Alert ${props.color}`),
    },

    {
      name: "Badge",
      Item: (props: any) => Badge({ ...props, content: `2` }, "\u260F"),
    },
    {
      name: "Breadcrumbs",
      Item: (props: any) => Breadcrumbs({ ...props, ...breadcrumbs1 }),
    },
    {
      name: "Button",
      Item: (props: any) =>
        Button(
          {
            ...props,
          },
          `${props.variant} ${props.color}`
        ),
    },

    {
      name: "Checkbox",
      Item: (props: any) =>
        label(
          {
            class: css`
              display: flex;
              border: 1px dotted var(--color-emphasis-200);
              font-size: smaller;
              align-items: center;
              justify-content: space-between;
              color: var(--color-content-secondary);
              padding: 0.2rem;
            `,
          },
          `${props.color} ${props.variant}`,
          Checkbox({
            id: `myCheckbox-gallery-${props.color}-${props.variant}`,
            name: `myCheckbox-gallery-${props.color}-${props.variant}`,
            ...props,
          })
        ),
    },
    {
      name: "Chip",
      Item: (props: any) =>
        Chip(
          {
            ...props,
          },
          `Chip ${props.color}`
        ),
    },

    {
      name: "Input",
      Item: (props: any) => {
        return Input({
          name: "my-input",
          id: "my-input-with",
          placeholder: "Enter text",
          ...props,
        });
      },
    },
    {
      name: "Modal",
      Item: (props: any) => {
        const modalEl = MyModal(props);
        return div(
          Button(
            {
              ...props,
              onclick: () => {
                modalEl.showModal();
              },
            },
            "OPEN MODAL"
          ),
          modalEl
        );
      },
    },
    {
      name: "Select",
      Item: (props: any) =>
        div(
          Select({
            ...props,
            options: selectOptions,
            Option: SelectOption,
            getOptionLabel: ({ label }: any) => label,
            label: "Select a country...",
          })
        ),
    },

    {
      name: "Spinner",
      Item: (props: any) => Spinner(props),
    },
    {
      name: "Switch",
      Item: (props: any) =>
        div(
          {
            class: css`
              & label {
                display: inline-flex;
                border: 1px dotted var(--color-emphasis-200);
                font-size: smaller;
                align-items: center;
                color: var(--color-content-secondary);
                padding: 0.2rem;
              }
            `,
          },
          label(
            "off",
            Switch({
              ...props,
              id: `mySwitch-off-${props.color}-${props.variant}`,
            })
          ),
          label(
            "on",
            Switch({
              ...props,
              id: `mySwitch-on-${props.color}-${props.variant}`,
              checked: true,
            })
          )
        ),
    },
    {
      name: "Tabs",
      Item: (props: any) => Tabs(props),
    },

    {
      name: "Tooltip",
      Item: (props: any) =>
        Tooltip(
          { titleEl: TooltipContent(), ...props },
          Button(props, `${props.color} ${props.variant}`)
        ),
    },
  ];

  return () =>
    section(
      h1("Bau Bundle Size Test"),
      p("This page displays the components with various colors and variants."),

      components.map(({ name, Item }) =>
        div(
          {
            id: name,
            class: css`
              border: 1px dotted var(--color-emphasis-400);
              padding: 1rem;
              margin: 1rem;
            `,
          },
          h2(name),
          Item({ variant: "solid", color: "primary" })
        )
      )
    );
};

const App = app(context);
document.getElementById("app")?.replaceChildren(App());
