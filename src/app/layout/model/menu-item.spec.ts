import { MenuItem } from './menu-item';

describe('MenuItem', () => {
  it('should create an instance', () => {
    expect(new MenuItem('Nav1', '/posts')).toBeTruthy();
  });
});
