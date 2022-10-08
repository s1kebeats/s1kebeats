import { describe, it, expect, vi } from "vitest";

import { mount } from "@vue/test-utils";

import { createTestingPinia } from "@pinia/testing";
import BeatList from "./BeatList.vue";

describe("beatlist rendering", () => {
  const pinia = {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  };

  it("renders beats properly", async () => {
    const wrapper = mount(BeatList, {
      pinia,
      props: {
        list: [
          {
            id: 1,
            name: "Life",
            bpm: 112,
            artist: {
              id: 3,
              name: "Lil Tjay",
            },
            wrap: "someWrapUrl",
            mp3: "someMp3Url",
            wave: "someWaveUrl",
          },
          {
            id: 2,
            name: "Vibes",
            bpm: 130,
            artist: {
              id: 1,
              name: "Drake",
            },
            wrap: "someWrapUrl",
            mp3: "someMp3Url",
            wave: "someWaveUrl",
          },
        ],
      },
    });

    expect(wrapper.find('[data-test="nothingFound"]').isVisible()).toBe(false);
    expect(wrapper.findAll('[data-test="beat"]')).toHaveLength(2);
  });

  it("renders nothing found placeholder", async () => {
    const wrapper = mount(BeatList, {
      pinia,
      props: {
        list: [],
      },
    });

    expect(wrapper.find('[data-test="nothingFound"]').isVisible()).toBe(true);
    expect(wrapper.findAll('[data-test="beat"]')).toHaveLength(0);
  });
});
