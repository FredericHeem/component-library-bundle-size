<template>
  <q-page class="">
    <h2>Accordion</h2>

    <q-expansion-item
      expand-separator
      icon="perm_identity"
      label="Account settings"
      caption="John Doe"
    >
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius
          reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum
          officiis modi facere maiores architecto suscipit iste eveniet
          doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <h2>Badge</h2>

    <q-badge color="blue"> #4D96F2 </q-badge>

    <h2>Breadcrumbs</h2>
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>
    <h2>Button</h2>
    <q-btn color="white" text-color="black" label="Standard" />
    <q-btn color="primary" label="Primary" />
    <h2>Checkbox</h2>
    <q-checkbox v-model="val" />
    <h2>Chip</h2>

    <q-chip icon="event">Add to calendar</q-chip>
    <h2>Modal</h2>

    <q-btn label="Prompt" color="primary" @click="prompt = true" />

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <h2>Input</h2>
    <q-input v-model="text" label="Standard" />

    <q-input filled v-model="text" label="Filled" />

    <h2>Spinner</h2>

    <q-circular-progress
      :value="value"
      size="50px"
      color="orange"
      class="q-ma-md"
    />

    <h2>Select</h2>

    <q-select v-model="model" :options="options" label="Standard" />

    <q-input outlined v-model="text" label="Outlined" />

    <h2>Switch</h2>

    <q-toggle v-model="value" color="green" />

    <h2>Tabs</h2>

    <q-tabs v-model="tab" class="text-teal">
      <q-tab name="mails" icon="mail" label="Mails" />
      <q-tab name="alarms" icon="alarm" label="Alarms" />
      <q-tab name="movies" icon="movie" label="Movies" />
    </q-tabs>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'IndexPage',
  components: {},
  setup() {
    return {
      val: ref(true),
      text: ref(''),
      tab: ref('tabs'),
      model: ref(null),
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      alert: ref(false),
      confirm: ref(false),
      prompt: ref(false),
      address: ref(''),
      value: 71,
    };
  },
});
</script>
