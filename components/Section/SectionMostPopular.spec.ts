import { describe, it, expect, vi } from "vitest";

import { flushPromises, mount } from "@vue/test-utils";
import axios from "axios";

import { createTestingPinia } from "@pinia/testing";
import BestBeats from "./BestBeats.vue";

vi.spyOn(axios, "get").mockResolvedValue({
  data: {
    results: [
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
      {
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
    ],
  },
});

describe("bestbeats rendering", () => {
  const pinia = {
    global: {
      plugins: [
        createTestingPinia({
          initialState: {
            overlay: true,
          },
          createSpy: vi.fn,
        }),
      ],
    },
  };

  it("getting last beats and loading placeholder", async () => {
    const wrapper = mount(BestBeats, {
      pinia,
    });

    expect(wrapper.find('[data-test="placeholder"]').exists()).toBe(true);

    await flushPromises();
    expect(
      wrapper.get('[data-test="beatlist"]').findAll('[data-test="beat"]')
    ).toHaveLength(6);

    expect(wrapper.find('[data-test="placeholder"]').exists()).toBe(false);
  });
});
