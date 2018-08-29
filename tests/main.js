import assert from "assert";
import chai from "chai";

describe("novum-opus", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    chai.assert.strictEqual(name, "novum-opus");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      chai.assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      chai.assert.strictEqual(Meteor.isClient, false);
    });
  }
});
