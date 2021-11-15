import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S71005Page } from './s71005.page';

describe('S71005Page', () => {
  let component: S71005Page;
  let fixture: ComponentFixture<S71005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S71005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S71005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
