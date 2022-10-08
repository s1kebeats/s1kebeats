import { describe, it, expect, vi } from "vitest";

import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import BeatstorePlayer from "./BeatstorePlayer.vue";

describe("player rendering", () => {
  it("renders properly", async () => {
    const wrapper = mount(BeatstorePlayer, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              main: {
                beat: {
                  id: 1,
                  name: "Life",
                  bpm: 112,
                  artist: {
                    id: 1,
                    name: "Lil Tjay",
                  },
                  wrap: "wrapUrl",
                  mp3: "mp3Url",
                  wave: "wavUrl",
                },
              },
            },
            createSpy: vi.fn,
          }),
        ],
      },
    });

    expect(wrapper.find('[data-test="player"]').exists()).toBe(true);
    expect(wrapper.get('[data-test="downloadLink"]').element.href).toBe(
      "http://localhost:3000/wavUrl"
    );
    expect(
      wrapper.get('[data-test="playPauseButton"]').classes()
    ).not.toContain("pause");
  });
  it("isn't visible if there is no beat in the store", () => {
    const wrapper = mount(BeatstorePlayer, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });

    expect(wrapper.find('[data-test="player"]').exists()).toBe(false);
  });
});

describe("player functionality", () => {
  it("play-pause", async () => {
    const wrapper = mount(BeatstorePlayer, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              main: {
                beat: {
                  id: 1,
                  name: "Life",
                  bpm: 112,
                  artist: {
                    id: 1,
                    name: "Lil Tjay",
                  },
                  wrap: "wrapUrl",
                  mp3: "mp3Url",
                  wav: "wavUrl",
                },
              },
            },
            createSpy: vi.fn,
            stubActions: false,
          }),
        ],
      },
      attachTo: document.body,
    });

    await wrapper.get('[data-test="playPauseButton"]').trigger("click");

    expect(wrapper.find('[data-test="playPauseButton"]').classes()).toContain(
      "pause"
    );

    await wrapper.get('[data-test="playPauseButton"]').trigger("click");

    expect(
      wrapper.find('[data-test="playPauseButton"]').classes()
    ).not.toContain("pause");

    await wrapper.trigger("keydown.space");

    expect(wrapper.find('[data-test="playPauseButton"]').classes()).toContain(
      "pause"
    );

    await wrapper.trigger("keydown.space");

    expect(
      wrapper.find('[data-test="playPauseButton"]').classes()
    ).not.toContain("pause");
  });
});
