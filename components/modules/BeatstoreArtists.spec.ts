import { describe, it, expect, beforeEach, vi } from "vitest";

import { flushPromises, mount } from "@vue/test-utils";

import { createRouter, createWebHistory, type Router } from "vue-router";
import axios from "axios";
import BeatstoreArtists from "./BeatstoreArtists.vue";

vi.spyOn(axios, "get").mockResolvedValue({
  data: {
    results: [
      {
        id: 1,
        name: "Lil Tjay",
      },
      {
        id: 2,
        name: "Drake",
      },
    ],
  },
});

let router: Router;

describe("artists rendering", () => {
  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "",
          name: "home",
          component: BeatstoreArtists,
        },
      ],
    });

    router.push("/?artist=2,1");
    await router.isReady();
  });

  it("renders properly", async () => {
    const wrapper = mount(BeatstoreArtists, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find('[data-test="placeholder"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="artistList"]').isVisible()).toBe(false);

    await flushPromises();

    expect(wrapper.find('[data-test="placeholder"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="artistList"]').isVisible()).toBe(true);
  });
});

describe("artists emits", () => {
  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "",
          name: "home",
          component: BeatstoreArtists,
        },
      ],
    });

    router.push("/?artist=2");
    await router.isReady();
  });

  it("emits properly", async () => {
    const wrapper = mount(BeatstoreArtists, {
      global: {
        plugins: [router],
      },
    });

    await flushPromises();

    await wrapper.findAll('[data-test="artist"]')[0].trigger("click");

    expect(wrapper.emitted("updateArtistQuery")).toHaveLength(2);
    expect(wrapper.emitted("updateArtistQuery")[0]).toEqual([[2, 1]]);

    await wrapper.findAll('[data-test="artist"]')[1].trigger("click");

    expect(wrapper.emitted("updateArtistQuery")).toHaveLength(3);
    expect(wrapper.emitted("updateArtistQuery")[1]).toEqual([[1]]);

    await wrapper.findAll('[data-test="artist"]')[0].trigger("click");

    expect(wrapper.emitted("updateArtistQuery")).toHaveLength(4);
    expect(wrapper.emitted("updateArtistQuery")[2]).toEqual([[]]);
  });
});
