<script>
  import { Alert } from "@svelteuidev/core";
  import { Accordion } from "@svelteuidev/core";
  import { Badge } from "@svelteuidev/core";
  import { Breadcrumbs } from "@svelteuidev/core";
  import { Button } from "@svelteuidev/core";
  import { Checkbox } from "@svelteuidev/core";
  import { Chip } from "@svelteuidev/core";
  import { Group } from "@svelteuidev/core";
  import { Loader } from "@svelteuidev/core";
  import { Modal } from "@svelteuidev/core";
  import { NativeSelect } from "@svelteuidev/core";
  import { Paper } from "@svelteuidev/core";
  import { Popper } from "@svelteuidev/core";
  import { Radio } from "@svelteuidev/core";
  import { Switch } from "@svelteuidev/core";
  import { Tabs } from "@svelteuidev/core";
  import { Tooltip } from "@svelteuidev/core";
  import { TextInput } from "@svelteuidev/core";

  let opened = false;
  let mounted = false;
</script>

<h1>Svelte bundle size</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<h2>Alert</h2>

<Alert title="Oopsie!">
  Seems like our servers (actually a single Raspebery pi) crashed, please wait
  while our underpaid worker tries to solder the CPU again.
</Alert>
<h2>Accordion</h2>

<Accordion>
  <Accordion.Item value="typescript">
    <div slot="control">Typescript Based</div>
    Build type safe applications...
  </Accordion.Item>
  <Accordion.Item value="packed">
    <div slot="control">Feature packed</div>
    SvelteUI contains more than just components...
  </Accordion.Item>
  <Accordion.Item value="accessible">
    <div slot="control">Accessible and usable</div>
    All components are accessible according to WAI-ARIA standards....
  </Accordion.Item>
</Accordion>
<h2>Badge</h2>

<Badge size="sm" radius="sm">Badge</Badge>

<h2>Breadcrumbs</h2>
<Breadcrumbs size="md">
  <Breadcrumbs.Item href="https://svelteui.org">
    <!-- <IconRenderer slot="icon" icon={Home} /> -->
    HOME
  </Breadcrumbs.Item>
  <Breadcrumbs.Item>
    <!-- <IconRenderer slot="icon" icon={Person} /> -->
    Application List
  </Breadcrumbs.Item>
  <Breadcrumbs.Item active={true}>View</Breadcrumbs.Item>
</Breadcrumbs>

<h2>Checkbox</h2>
<Checkbox label="I agree to sell my privacy" />
<h2>Chip</h2>
<Chip>Click me</Chip>
<h2>Button</h2>
<Button>Settings</Button>

<h2>TextInput</h2>

<TextInput label="Input label" description="Input description" />
<h2>Loader</h2>

<Loader />
<h2>Modal</h2>

<Modal {opened} on:close={() => {}} title="Introduce yourself!">
  <!-- Modal Content -->
</Modal>

<Group position="center">
  <Button on:click={() => (opened = true)}>Open Modal</Button>
</Group>

<NativeSelect
  data={["Svelte", "React", "Vue", "Angular", "Solid"]}
  placeholder="Pick one"
  label="Select your favorite framework/library"
  description="This is anonymous"
/>
<h2>Paper</h2>
<Paper>
  Paper is the most basic UI component. Use it to create cards, dropdowns,
  modals and other components that require background with shadow
</Paper>

<Button on:click={() => (mounted = !mounted)}>Click here</Button>
<Popper {mounted}>
  <div>Popper content</div>
</Popper>

<h2>Radio</h2>
<Radio label="I agree to sell my privacy" />
<h2>Switch</h2>

<Switch checked label="I agree to sell my privacy" />

<h2>Tabs</h2>

<Tabs>
  <Tabs.Tab label="Gallery">Gallery tab content</Tabs.Tab>
  <Tabs.Tab label="Messages">Messages tab content</Tabs.Tab>
  <Tabs.Tab label="Settings">Settings tab content</Tabs.Tab>
</Tabs>

<h2>Tooltip</h2>
<Tooltip opened label="Label">
  <Button>With tooltip</Button>
</Tooltip>
