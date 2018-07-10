import { CareModule } from './care.module';

describe('CareModule', () => {
  let careModule: CareModule;

  beforeEach(() => {
    careModule = new CareModule();
  });

  it('should create an instance', () => {
    expect(careModule).toBeTruthy();
  });
});
