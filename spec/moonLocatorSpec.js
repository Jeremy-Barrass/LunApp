describe('moonLocator',function(){
	beforeEach(function(){
		locator = new MoonLocator;
	});

	it('has a location variable', function(){
		expect(locator._location).toBeDefined();
	});

	it('has a localTime variable', function(){
		expect(locator._localTime).toBeDefined();
	});

	it('has an orientation variable', function(){
		expect(locator._orientation).toBeDefined();
	});
});