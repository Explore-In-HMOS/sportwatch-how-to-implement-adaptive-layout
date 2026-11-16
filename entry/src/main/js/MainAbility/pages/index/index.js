import app from "@system.app";

let GOAL = 8;

export default {
  data: {
    count: 0,
    percent: 0,
    title: "",
    statusText: "",
    addLabel: "",
    resetLabel: ""
  },

  onInit: function () {
    this.title = this.$t("strings.title");
    this.addLabel = this.$t("strings.add");
    this.resetLabel = this.$t("strings.reset");
    this.refresh();
  },

  // Recompute everything the view shows from count.
  refresh: function () {
    let p = Math.floor(this.count * 100 / GOAL);
    this.percent = p > 100 ? 100 : p;
    if (this.count >= GOAL) {
      this.statusText = this.$t("strings.goal_reached");
    } else {
      this.statusText = this.$t("strings.of_goal");
    }
  },

  addGlass: function () {
    if (this.count < 99) {
      this.count = this.count + 1;
      this.refresh();
    }
  },

  reset: function () {
    this.count = 0;
    this.refresh();
  },

  // Swipe right leaves the app.
  onPageSwipe: function (e) {
    if (e.direction === "right") {
      app.terminate();
    }
  }
};
