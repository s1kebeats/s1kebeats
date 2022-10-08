import { describe, it, expect, beforeEach, vi } from "vitest";

import { mount, flushPromises } from "@vue/test-utils";

import { createRouter, createWebHistory, type Router } from "vue-router";
import axios from "axios";
import BeatstoreSearch from "./BeatstoreSearch.vue";

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

describe("search rendering", () => {
  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "",
          name: "home",
          component: BeatstoreSearch,
        },
      ],
    });

    router.push("/?ordering=id");
    await router.isReady();
  });

  it("renders properly", async () => {
    const wrapper = mount(BeatstoreSearch, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.get('[data-test="orderingText"]').text()).toBe("Old");
    expect(wrapper.get('[data-test="orderingDown"]').isVisible()).toBe(false);
    expect(wrapper.get('[data-test="orderingUp"]').isVisible()).toBe(true);
    expect(wrapper.get('[data-test="searchPanel"]').isVisible()).toBe(false);

    await wrapper.get('[data-test="searchButton"]').trigger("click");

    expect(wrapper.get('[data-test="searchPanel"]').isVisible()).toBe(true);

    await wrapper.get('[data-test="orderingButton"]').trigger("click");

    expect(wrapper.get('[data-test="orderingText"]').text()).toBe("New");
    expect(wrapper.get('[data-test="orderingDown"]').isVisible()).toBe(true);
    expect(wrapper.get('[data-test="orderingUp"]').isVisible()).toBe(false);
  });
});

describe("search emits", () => {
  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "",
          name: "home",
          component: BeatstoreSearch,
        },
      ],
    });

    router.push("/?ordering=id");
    await router.isReady();
  });

  it("simple emits", async () => {
    const wrapper = mount(BeatstoreSearch, {
      global: {
        plugins: [router],
      },
    });

    await flushPromises();

    await wrapper.get('[data-test="orderingButton"]').trigger("click");

    expect(wrapper.emitted("search")).toHaveLength(1);
    expect(wrapper.emitted("search")[0]).toEqual(["?ordering=-id"]);

    await wrapper.get('[data-test="orderingButton"]').trigger("click");

    expect(wrapper.emitted("search")).toHaveLength(2);
    expect(wrapper.emitted("search")[1]).toEqual(["?ordering=id"]);
  });
  it("complex emits", async () => {
    const wrapper = mount(BeatstoreSearch, {
      global: {
        plugins: [router],
      },
    });

    await flushPromises();

    await wrapper.findAll('[data-test="artist"]')[0].trigger("click");

    expect(wrapper.emitted("search")).toHaveLength(1);
    expect(wrapper.emitted("search")[0]).toEqual(["?ordering=id&artist=1"]);

    await wrapper.findAll('[data-test="artist"]')[1].trigger("click");

    expect(wrapper.emitted("search")).toHaveLength(2);
    expect(wrapper.emitted("search")[1]).toEqual(["?ordering=id&artist=1%2C2"]);

    await wrapper.findAll('[data-test="artist"]')[0].trigger("click");

    expect(wrapper.emitted("search")).toHaveLength(3);
    expect(wrapper.emitted("search")[2]).toEqual(["?ordering=id&artist=2"]);
  });
});
