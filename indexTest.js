

const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('index.js', function () {
    describe('companyName', function () {
      it('is set as Scuber', function () {
        expect(companyName).to.equal('Scuber');
      });
  
      it('is defined as a const', function () {
        expect(() => {
          companyName = 'NewCompany';
        }).to.throw(TypeError);
      });
    });
  });
  describe('mostProfitableNeighborhood', function () {
    it('is declared as equal to a specific value', function () {
      expect(mostProfitableNeighborhood).to.equal('midtown'); 
    });
  });
  
  describe('companyCeo', function () {
    it('is declared as equal to a specific value', function () {
      expect(companyCeo).to.equal('Mark Jordan'); 
    });
  });
  
  