import { describe, it, expect, beforeEach, vi } from "vitest";

import { flushPromises, mount } from "@vue/test-utils";

import { createRouter, createWebHistory, type Router } from "vue-router";
import axios from "axios";

import { createTestingPinia } from "@pinia/testing";
import BeatstoreBeats from "./BeatstoreBeats.vue";

let router: Router;

describe("beats contitional rendering", () => {
  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "",
          name: "home",
          component: BeatstoreBeats,
        },
      ],
    });

    router.push("/");
    await router.isReady();
  });

  it("renders properly", async () => {
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
        ],
        next: null,
      },
    });

    const wrapper = mount(BeatstoreBeats, {
      global: {
        plugins: [
          router,
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });

    expect(wrapper.find('[data-test="placeholderList"]').isVisible()).toBe(
      true
    );

    await flushPromises();

    expect(wrapper.find('[data-test="placeholderList"]').isVisible()).toBe(
      false
    );
    expect(wrapper.find('[data-test="loadmoreButton"]').isVisible()).toBe(
      false
    );
  });
  it("renders properly with next page data", async () => {
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
        ],
        next: true,
      },
    });

    const wrapper = mount(BeatstoreBeats, {
      global: {
        plugins: [
          router,
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });

    expect(wrapper.find('[data-test="placeholderList"]').isVisible()).toBe(
      true
    );

    await flushPromises();

    expect(wrapper.find('[data-test="placeholderList"]').isVisible()).toBe(
      false
    );
    expect(wrapper.find('[data-test="loadmoreButton"]').isVisible()).toBe(true);
  });
});

describe("beats loadmore function", () => {
  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "",
          name: "home",
          component: BeatstoreBeats,
        },
      ],
    });

    router.push("/");
    await router.isReady();
  });

  it("loads more beats and pushes it to the list", async () => {
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
        ],
        next: "some.next.url",
      },
    });

    const wrapper = mount(BeatstoreBeats, {
      global: {
        plugins: [
          router,
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });

    await flushPromises();
    await wrapper.get('[data-test="loadmoreButton"]').trigger("click");
    await flushPromises();

    expect(wrapper.findAll('[data-test="beat"]')).toHaveLength(4);

    await wrapper.get('[data-test="loadmoreButton"]').trigger("click");
    await flushPromises();

    expect(wrapper.findAll('[data-test="beat"]')).toHaveLength(6);
  });
});
