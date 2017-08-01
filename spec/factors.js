describe("Prime factors", function() {

	beforeEach(function() {
		this.factors = new PrimeFactor();
	});

	it("should return an empty array for 1", function() {
		expect(this.factors.generate(1)).to.deep.equal([]);
	});

	// it("should return 2 for 2", function() {
	// 	expect(this.factors.generate(2)).to.deep.equal([2]);
	// });

	// it("should return 3 for 3", function() {
	// 	expect(this.factors.generate(3)).to.deep.equal([3]);
	// });

	// it("should return 2 and 2 for 4", function() {
	// 	expect(this.factors.generate(4)).to.deep.equal([2, 2]);
	// });

	// it("should return 5 for 5", function() {
	// 	expect(this.factors.generate(5)).to.deep.equal([5]);
	// });

	// it("should return 2 and 3 for 6", function() {
	// 	expect(this.factors.generate(6)).to.deep.equal([2, 3]);
	// });

	// it("should return 2, 2 and 2 for 8", function() {
	// 	expect(this.factors.generate(8)).to.deep.equal([2, 2, 2]);
	// });

	// it("should return 3 and 3 for 9", function() {
	// 	expect(this.factors.generate(9)).to.deep.equal([3, 3]);
	// });

	// it("should return 2, 2, 5 and 5 for 100", function() {
	// 	expect(this.factors.generate(100)).to.deep.equal([2, 2, 5, 5]);
	// });

});