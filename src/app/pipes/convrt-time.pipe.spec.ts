import { ConvrtTimePipe } from './convert-time.pipe';

describe('ConvrtTimePipe', () => {
  it('create an instance', () => {
    const pipe = new ConvrtTimePipe(); //convert time from minutes to hours and minutes string
    expect(pipe).toBeTruthy();
  });
});
