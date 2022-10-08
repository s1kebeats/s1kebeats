import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import BeatstoreArtist from "./BeatstoreArtist.vue";

describe("artist rendering", () => {
  it("renders artist properly", async () => {
    const wrapper = mount(BeatstoreArtist, {
      props: {
        artist: {
          id: 1,
          name: "Lil Tjay",
        },
      },
    });

    expect(wrapper.find('[data-test="artist"]').text()).toBe("Lil Tjay");
    expect(wrapper.find('[data-test="shimmer"]').exists()).toBe(false);
  });

  it("renders placeholder properly", async () => {
    const wrapper = mount(BeatstoreArtist, {
      props: {
        artist: {},
      },
    });

    expect(wrapper.find('[data-test="artist"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="shimmer"]').exists()).toBe(true);
  });
});

describe("artist emits", () => {
  it("emits 1 properly", async () => {
    const wrapper = mount(BeatstoreArtist, {
      props: {
        artist: {
          id: 1,
          name: "Drake",
        },
      },
    });
    await wrapper.find('[data-test="artist"]').trigger("click");

    expect(wrapper.emitted("selectArtist")[0]).toEqual([1]);
  });
  it("emits 2 properly", async () => {
    const wrapper = mount(BeatstoreArtist, {
      props: {
        artist: {
          id: 2,
          name: "Drake",
        },
      },
    });
    await wrapper.find('[data-test="artist"]').trigger("click");

    expect(wrapper.emitted("selectArtist")[0]).toEqual([2]);
  });
});
