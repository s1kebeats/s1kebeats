import { describe, it, expect, vi } from "vitest";

import { flushPromises, mount } from "@vue/test-utils";
import axios from "axios";

import YoutubeLatest from "./YoutubeLatest.vue";

vi.spyOn(axios, "get").mockResolvedValue({
  data: {
    items: [{ snippet: { resourceId: { videoId: "sumId" } } }],
  },
});

describe("youtube api iframe scr", () => {
  it("renders iframe with right src and loading screen", async () => {
    const wrapper = mount(YoutubeLatest);

    expect(wrapper.find('[data-test="shimmer"]').exists()).toBe(true);

    await flushPromises();
    expect(wrapper.get('[data-test="iframe"]').element.src).toBe(
      `https://www.youtube.com/embed/sumId`
    );

    expect(wrapper.find('[data-test="shimmer"]').exists()).toBe(false);
  });
});
