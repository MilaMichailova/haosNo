import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('test user name', () => {
    expect(UsernameValidator.validate('12345678')).toBeTrue();
    expect(UsernameValidator.validate('123456')).toBeFalse();
    expect(UsernameValidator.validate('12345678910234')).toBeFalse();
  });

  it('test user name too long', () => {
    expect(UsernameValidator.validate('1234567891011')).toBeFalse();
  });

  it('test user name too short', () => {
    expect(UsernameValidator.validate('123456')).toBeTrue();
  });

  it('test user name correct if more than 6 and less than 13', () => {
    expect(UsernameValidator.validate('12345678')).toBeTrue();
  });

  it('test user name incorrect if less than 7', () => {
    expect(UsernameValidator.validate('123456')).toBeFalse();
    expect(UsernameValidator.validate('1234')).toBeFalse();
  });

  it('test user name incorrect if more than 13', () => {
    expect(UsernameValidator.validate('12345678910234')).toBeFalse();
  });

  it('test user name incorrect if more than 13', () => {
    expect(UsernameValidator.validate('12345678910234')).toBeFalse();
  });

  it('test user name should be shorter than 13 - UserNameTooLong - Error ', () => {
    //...
  });
});

class UsernameValidator {
  public static validate(name: string): boolean {
    return true;
  }
}
