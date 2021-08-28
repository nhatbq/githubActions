const getPosts = require('../getPosts/index.js');

describe("Learn github Actions", () => {
  describe("test getPosts", () => {
    it("test getPosts of response", () => {
      // const pencil = new Pencil();
      // const result = pencil.writeOnPaper("", "Hello World!");

      // expect(result).to.equal("Hello World!");
      var require = {}
      getPosts.handle(require,{}, (err, res)  => {
        expect(err).toBeNull();
        expect(res).not.toBeUndefined();
        const response = JSON.parse(res);
        expect(response[0].itemId).toBe("100");
      })
    });

  })

});