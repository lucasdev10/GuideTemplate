/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HandlerFormErrorComponent } from './handlerFormError.component';

describe('HandlerFormErrorComponent', () => {
  let component: HandlerFormErrorComponent;
  let fixture: ComponentFixture<HandlerFormErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlerFormErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlerFormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
