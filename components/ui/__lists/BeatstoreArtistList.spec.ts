import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory, type Router } from "vue-router";
import ArtistList from "./ArtistList.vue";

let router: Router;

describe("artistlist rendering", () => {
  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "",
          name: "home",
          component: ArtistList,
        },
      ],
    });

    router.push("/?artist=1,2");
    await router.isReady();
  });

  it("renders properly", async () => {
    const wrapper = mount(ArtistList, {
      global: {
        plugins: [router],
      },
      props: {
        artistList: [
          {
            id: 1,
            name: "Lil Tjay",
          },
          {
            id: 2,
            name: "Drake",
          },
          {
            id: 3,
            name: "s1kebeats",
          },
          {
            id: 4,
            name: "Lil Baby",
          },
        ],
      },
    });

    expect(wrapper.findAll('[data-test="artist"]')).toHaveLength(4);

    expect(wrapper.findAll('[data-test="artist"]')[0].classes()).toContain(
      "bg-black"
    );
    expect(wrapper.findAll('[data-test="artist"]')[0].classes()).not.toContain(
      "bg-gradient-to-r"
    );
    expect(wrapper.findAll('[data-test="artist"]')[1].classes()).toContain(
      "bg-black"
    );
    expect(wrapper.findAll('[data-test="artist"]')[1].classes()).not.toContain(
      "bg-gradient-to-r"
    );

    expect(wrapper.findAll('[data-test="artist"]')[2].classes()).toContain(
      "bg-gradient-to-r"
    );
    expect(wrapper.findAll('[data-test="artist"]')[2].classes()).not.toContain(
      "bg-black"
    );
    expect(wrapper.findAll('[data-test="artist"]')[3].classes()).toContain(
      "bg-gradient-to-r"
    );
    expect(wrapper.findAll('[data-test="artist"]')[3].classes()).not.toContain(
      "bg-black"
    );
  });
  it("background onclick", async () => {
    const wrapper = mount(ArtistList, {
      global: {
        plugins: [router],
      },
      props: {
        artistList: [
          {
            id: 1,
            name: "Lil Tjay",
          },
        ],
      },
    });

    expect(wrapper.get('[data-test="artist"]').classes()).toContain("bg-black");
    expect(wrapper.get('[data-test="artist"]').classes()).not.toContain(
      "bg-gradient-to-r"
    );

    await wrapper.get('[data-test="artist"]').trigger("click");

    expect(wrapper.get('[data-test="artist"]').classes()).not.toContain(
      "bg-black"
    );
    expect(wrapper.get('[data-test="artist"]').classes()).toContain(
      "bg-gradient-to-r"
    );
  });
});

describe("artistlist emits", () => {
  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "",
          name: "home",
          component: ArtistList,
        },
      ],
    });

    router.push("/?artist=1,2");
    await router.isReady();
  });

  it("artistlist emits", async () => {
    const wrapper = mount(ArtistList, {
      global: {
        plugins: [router],
      },
      props: {
        artistList: [
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
    await wrapper.findAll('[data-test="artist"]')[0].trigger("click");

    expect(wrapper.emitted("selectArtist")).toHaveLength(1);
    expect(wrapper.emitted("selectArtist")[0]).toEqual([1]);

    await wrapper.findAll('[data-test="artist"]')[1].trigger("click");

    expect(wrapper.emitted("selectArtist")).toHaveLength(2);
    expect(wrapper.emitted("selectArtist")[1]).toEqual([2]);
  });
});
