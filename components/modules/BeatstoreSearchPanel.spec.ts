import { describe, it, expect, beforeEach, vi } from "vitest";

import { flushPromises, mount } from "@vue/test-utils";

import { createRouter, createWebHistory, type Router } from "vue-router";
import axios from "axios";
import BeatstoreSearchPanel from "./BeatstoreSearchPanel.vue";

let router: Router;

describe("search panel route-based rendering", () => {
  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "",
          name: "home",
          component: BeatstoreSearchPanel,
        },
      ],
    });

    router.push("/?bpm=140&name=Life");
    await router.isReady();
  });

  it("renders input values properly", async () => {
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

    const wrapper = mount(BeatstoreSearchPanel, {
      global: {
        plugins: [router],
      },
    });
    await flushPromises();

    expect(wrapper.find('[data-test="nameInput"]').element.value).toBe("Life");
    expect(wrapper.find('[data-test="bpmInput"]').element.value).toBe("140");
  });
});

describe("search panel emits", () => {
  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "",
          name: "home",
          component: BeatstoreSearchPanel,
        },
      ],
    });

    router.push("/");
    await router.isReady();
  });
  it("emits properly", async () => {
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

    const wrapper = mount(BeatstoreSearchPanel, {
      global: {
        plugins: [router],
      },
    });

    await flushPromises();

    await wrapper.find('[data-test="nameInput"]').setValue("trend");
    await wrapper.find('[data-test="bpmInput"]').setValue(110);

    expect(wrapper.emitted("updateSearchQuery")).toHaveLength(2);
    expect(wrapper.emitted("updateSearchQuery")[0]).toBe({
      name: "trend",
    });
    expect(wrapper.emitted("updateSearchQuery")[1]).toEqual({
      bpm: "110",
      name: "trend",
    });
  });
});
